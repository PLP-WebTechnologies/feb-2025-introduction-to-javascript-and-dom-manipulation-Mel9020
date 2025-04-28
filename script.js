// Change text content dynamically
const textElement = document.getElementById('dynamic-text');
const changeTextButton = document.getElementById('change-text');

changeTextButton.addEventListener('click', () => {
  textElement.textContent = "The text has been updated dynamically!";
  textElement.style.color = "darkblue"; // Modify CSS style
  textElement.style.fontWeight = "bold";
});

// Add or remove an element when a button is clicked
const toggleButton = document.getElementById('toggle-element');
const section = document.getElementById('content-section');

let newElement = null;

toggleButton.addEventListener('click', () => {
  if (!newElement) {
    newElement = document.createElement('div');
    newElement.textContent = "I am a new element!";
    newElement.style.backgroundColor = "#f0c0c0";
    newElement.style.padding = "10px";
    newElement.style.marginTop = "10px";
    section.appendChild(newElement);
  } else {
    section.removeChild(newElement);
    newElement = null;
  }
});
