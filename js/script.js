// Navigation Highlight on Scroll
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav li a");
  
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index]?.classList.add("active");
      }
    });
  });
  
  // Subscription Form Validation
  const subscriptionForm = document.querySelector(".subscription form");
  const subscriptionInput = subscriptionForm.querySelector("input");
  const subscriptionButton = subscriptionForm.querySelector(".subscription-btn");
  
  subscriptionButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = subscriptionInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!email) {
      alert("Please enter your email address.");
    } else if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
    } else {
      alert("Thank you for subscribing!");
      subscriptionInput.value = ""; // Clear input field
    }
  });
  
  // Image Hover Effect
  const images = document.querySelectorAll(".popular-places-grid li");
  images.forEach((img) => {
    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(1.1)";
      img.style.transition = "transform 0.3s ease-in-out";
    });
  
    img.addEventListener("mouseout", () => {
      img.style.transform = "scale(1)";
    });
  });
  
  // Scroll-to-Top Button
  const scrollTopButton = document.createElement("button");
  scrollTopButton.innerText = "↑";
  scrollTopButton.className = "scroll-to-top";
  document.body.appendChild(scrollTopButton);
  
  scrollTopButton.style.position = "fixed";
  scrollTopButton.style.bottom = "20px";
  scrollTopButton.style.right = "20px";
  scrollTopButton.style.padding = "10px 15px";
  scrollTopButton.style.fontSize = "20px";
  scrollTopButton.style.border = "none";
  scrollTopButton.style.borderRadius = "50%";
  scrollTopButton.style.backgroundColor = "#4CAF50";
  scrollTopButton.style.color = "white";
  scrollTopButton.style.cursor = "pointer";
  scrollTopButton.style.display = "none";
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopButton.style.display = "block";
    } else {
      scrollTopButton.style.display = "none";
    }
  });
  
  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  