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

  // Populate dialog with user inputs
  const dialogMessage = `Thank you, ${name}, for reaching out! 
  <br><br>
  <u>I received your message and will respond as soon as possible!</u>
  <br><br>
  <strong>Your email:</strong> ${email}
  <br><br>
  <strong>Your message:</strong> ${message}`;

  document.getElementById('thankYouMessage').innerHTML = dialogMessage;

  // Show dialog
  const dialog = document.getElementById('thankYouDialog');
  dialog.showModal();

  // Close the dialog when close button is pressed
  document.getElementById('closeDialog').addEventListener('click', () => {
    dialog.close();
  });

});

// Update the character count dynamically
const messageInput = document.getElementById('message');
const charCountDisplay = document.getElementById('charCount');

messageInput.addEventListener('input', () => {
  const remaining = 255 - messageInput.value.length;
  charCountDisplay.textContent = `${remaining} characters remaining.`
})