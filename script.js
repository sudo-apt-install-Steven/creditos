// Form submission with mailto logic
const contactForm = document.getElementById("contact-form");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const recipient = document.getElementById("recipient").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const emails = {
    joao: "crisostomo.neves@estudante.ifro.edu.br",
    vinicius: "vinicius.costa@estudante.ifro.edu.br",
    steven: "melos.s@estudante.ifro.edu.br"
  };

  let targetEmail = "";
  if (recipient === "todos") {
    targetEmail = `${emails.joao},${emails.vinicius},${emails.steven}`;
  } else {
    targetEmail = emails[recipient];
  }

  const subject = encodeURIComponent(`Contato pelo site: ${name}`);
  const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`);

  // Trigger mailto link
  window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

  // Animation feedback
  const submitBtn = contactForm.querySelector('.submit-btn');
  const originalText = submitBtn.textContent;
  
  submitBtn.textContent = 'Enviando...';
  submitBtn.style.opacity = '0.7';

  setTimeout(() => {
    contactForm.reset();
    submitBtn.textContent = 'Cliente de Email Aberto!';
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
