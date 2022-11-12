function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const mainBox = document.querySelector('#boxes');
const input = document.querySelector('input');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');

let amount = 0;
const getAmount = event => {
  amount = event.target.value;
};

function createBoxes(amount) {
  let boxSize = 30;
  mainBox.innerHTML = '';
  for (let i = 0; i < amount; i += 1) {
    const newBoxes = document.createElement('div');

    boxSize += 10 * i;

    newBoxes.style.width = `${boxSize}px`;
    newBoxes.style.height = `${boxSize}px`;
    newBoxes.style.backgroundColor = getRandomHexColor();
    mainBox.append(newBoxes);
  }
}

const onClickCreate = () => {
  createBoxes(amount);
};

const onClickDestroy = () => {
  mainBox.innerHTML = '';
};

input.addEventListener('change', getAmount);
create.addEventListener('click', onClickCreate);
destroy.addEventListener('click', onClickDestroy);
