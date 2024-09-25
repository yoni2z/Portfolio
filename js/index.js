const textElement = document.getElementById("dynamic-text");
const texts = ["Yonas Zelalem", "Front-End Developer"]; // The texts to switch between
let textIndex = 0; // Index to keep track of which text to display
let charIndex = 0; // Index for the character in the current text
let isDeleting = false; // Flag to check if we're deleting text
const typingSpeed = 150; // Typing speed in ms
const deletingSpeed = 100; // Deleting speed in ms
const delayBetweenSwitch = 2000; // Delay between the switch of texts

function type() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    // Add characters
    textElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenSwitch); // Wait before starting to delete
    } else {
      setTimeout(type, typingSpeed); // Continue typing
    }
  } else {
    // Remove characters
    textElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length; // Switch to the next text
      setTimeout(type, typingSpeed); // Start typing the next word
    } else {
      setTimeout(type, deletingSpeed); // Continue deleting
    }
  }
}

// Start the typing effect
type();
