// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const errorMessageName = document.getElementById('errorMessageName');
// const errorMessageEmail = document.getElementById('errorMessageEmail');


function validateName() {

  const name = nameInput.value.trim();
  const isValid = /^[a-zA-Z]+$/.test(name); // Example: name must only contain letters

  if (name && !isValid) {
    nameInput.classList.add('invalid');
    errorMessageName.style.display = 'block';
  } else {
    nameInput.classList.remove('invalid');
    errorMessageName.style.display = 'none';
  }
}

// function validateEmail() {
//   const email = emailInput.value.trim();
//   const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   if (email && !isValid) {
//     email.classList.add('invalid');
//     errorMessageEmail.style.display = 'block';
//   } else {
//     email.classList.remove('invalid');
//     errorMessageEmail.style.display = 'none';
//   }

// }

nameInput.addEventListener('input', validateName);
// emailInput.addEventListener('input', validateEmail);

// Handle form submission to show a pop up with the user inputs

document.getElementById('contactForm').addEventListener('submit', function(event) {

  event.preventDefault(); // Prevent default submit behavior

  // Get user inputs
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Display the pop up message
  alert(`Thank you ${name} for reaching out! We will respond as soon as possible!\n\nYour email: ${email}.\nYour message: ${message}`);

})