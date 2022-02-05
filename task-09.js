function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const backgroundBtn = document.querySelector('.change-color')
const colorEl = document.querySelector('.color')
const backgroundBody = document.querySelector('body') 

backgroundBtn.addEventListener('click', (event) => {
  backgroundBody.style.backgroundColor = getRandomHexColor();
  // event.preventDefault();
  // backgroundBody.style.setProperty('style', getRandomHexColor);
  // змінює колір на елемент body
  colorEl.textContent = getRandomHexColor();
  // виводить значення кольору в span
  // backgroundBody.setAttribute("style", );
  
});
