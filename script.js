// Form submission
const contactForm = document.getElementById("contact-form");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const submitBtn = contactForm.querySelector('.submit-btn');
  const originalText = submitBtn.textContent;
  
  submitBtn.textContent = 'Enviando...';
  submitBtn.style.opacity = '0.7';

  // Simulate network request
  setTimeout(() => {
    contactForm.reset();
    submitBtn.textContent = 'Mensagem Enviada!';
    submitBtn.style.background = '#00ffd0';
    submitBtn.style.color = '#000';
    
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.background = '#ffffff';
      submitBtn.style.opacity = '1';
    }, 3000);
  }, 1000);
});

// Update active state in navbar on scroll
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {
  let current = "";
  
  // If at top
  if (window.scrollY < 200) {
    current = "inicio";
  } else {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 150) {
        current = section.getAttribute("id");
      }
    });
  }

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href").includes(current)) {
      item.classList.add("active");
    }
  });
});
