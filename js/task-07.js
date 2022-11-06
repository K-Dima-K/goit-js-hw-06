const inputEl = document.querySelector('input');
const textEl = document.querySelector('span');

function onChangeFontSize(event) {
  textEl.style.fontSize = `${Number(event.currentTarget.value)}px`;
}

inputEl.addEventListener('input', onChangeFontSize);
