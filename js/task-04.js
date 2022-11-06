const value = document.querySelector('span#value');
const actions = document.querySelectorAll('button');

let counterValue = 0;

const render = () => {
  value.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  render();
};

const increment = () => {
  counterValue += 1;
  render();
};

actions[0].addEventListener('click', decrement);
actions[1].addEventListener('click', increment);
