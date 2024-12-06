// Smooth scrolling for header navigation
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 60, // Offset for sticky header
      behavior: 'smooth',
    });
  });
});

// Highlight active section in the header
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === currentSection) {
      link.classList.add('active');
    }
  });
});

// Section reveal on scroll
const revealSections = document.querySelectorAll('section');

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

revealSections.forEach(section => {
  revealObserver.observe(section);
});

// Interactive form validation for the contact section
const form = document.querySelector('.contact-form');
const emailInput = form.querySelector('input[type="email"]');
const messageInput = form.querySelector('textarea');
const submitButton = form.querySelector('button');

form.addEventListener('submit', e => {
  e.preventDefault();

  if (!emailInput.value || !messageInput.value) {
    alert('Please fill out all fields!');
    return;
  }

  if (!validateEmail(emailInput.value)) {
    alert('Please enter a valid email address!');
    return;
  }

  alert('Thank you for reaching out! Your message has been sent.');
  form.reset();
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Add animation to header on scroll
const header = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});



  
