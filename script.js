function showSection(sectionId) {
  // Select all sections
  const sections = document.querySelectorAll(".section");

  // Hide all sections
  sections.forEach(section => {
      section.classList.add("hidden");
  });

  // Show the selected section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
      targetSection.classList.remove("hidden");
  }

  // Update active class in the navigation menu
  const navLinks = document.querySelectorAll(".topnav a");
  navLinks.forEach(link => link.classList.remove("active"));
  document.querySelector(`a[onclick="showSection('${sectionId}')"]`).classList.add("active");
}


function myFunction() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

// form varlidation
const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const errorElement = document.querySelector('.error');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      let errorMessage = '';

      // Name validation - only letters and spaces allowed
      const nameRegex = /^[a-zA-Z ]+$/;
      if (!nameRegex.test(nameInput.value)) {
        errorMessage += 'Invalid name. Please enter only letters and spaces. \n';
      }

      // Email validation - basic email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        errorMessage += 'Invalid email address. Please enter a valid email format. \n';
      }

      // Message validation - required field
      if (messageInput.value === '') {
        errorMessage += 'Please enter a message. \n';
      }

      if (errorMessage) {
        errorElement.textContent = errorMessage;
        return;
      }

      // Form submission logic (replace with your actual submission process)
      alert('Form submitted successfully!');
      form.reset();
    });
