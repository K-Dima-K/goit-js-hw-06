function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('button');
const nameColorEl = document.querySelector('span');
const backgroundEl = document.querySelector('body');

function onChangeColor() {
  backgroundEl.style.backgroundColor = getRandomHexColor();
  nameColorEl.textContent = getRandomHexColor();
}

buttonEl.addEventListener('click', onChangeColor);
