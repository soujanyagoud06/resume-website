// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact form validation
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("form-status");

  if (!name || !email || !subject || !message) {
    status.textContent = "Please fill all fields!";
    status.style.color = "red";
  } else if (!email.includes("@")) {
    status.textContent = "Enter a valid email!";
    status.style.color = "red";
  } else {
    status.textContent = "Message sent successfully!";
    status.style.color = "green";
    this.reset();
  }
});
