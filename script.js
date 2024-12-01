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


nameInput.addEventListener('input', validateName);

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

  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('message').value = "";

});

// Update the character count dynamically
const messageInput = document.getElementById('message');
const charCountDisplay = document.getElementById('charCount');

messageInput.addEventListener('input', () => {
  const remaining = 255 - messageInput.value.length;
  charCountDisplay.textContent = `${remaining} characters remaining.`
})

// Open and close the settings modal
const settingsButton = document.getElementById('settingsButton');
const settingsModal = document.getElementById('settingsModal');
const closeSettings = document.getElementById('closeSettings');

settingsButton.addEventListener('click', () => settingsModal.showModal());
closeSettings.addEventListener('click', () => settingsModal.close());

// Apply settings
const themeToggle = document.getElementById('themeToggle');
const captionSize = document.getElementById('captionSize');
const captionColor = document.getElementById('captionColor');
const captionSizeValue = document.getElementById('captionSizeValue');

document.getElementById('applySettings').addEventListener('click', () => {
  //Toggle theme
  if (themeToggle.checked) {
    document.body.classList.add('dark-theme');
    captionColor.value = "#ffffff";
    captionSize.value = 30;
  } else {
    document.body.classList.remove('dark-theme');
    captionColor.value = "#000000";
    captionSize.value = 30;
  }

  // Change caption size
  const captions = document.querySelectorAll('h2, h3, h4, h5, h6');
  captions.forEach(caption => {
    caption.style.fontSize = `${captionSize.value}px`;
  });

  // Change caption color
  captions.forEach(caption => {
    caption.style.color = captionColor.value;
  });

  settingsModal.close();

})

// Update caption size value
captionSize.addEventListener('input', () => {
  captionSizeValue.textContent = `${captionSize.value}px`;
});