const input = document.querySelector('input#name-input');
const nameLable = document.querySelector('span#name-output');

function onInputChange(event) {
  input.value === ''
    ? (nameLable.textContent = 'Anonymous')
    : (nameLable.textContent = input.value);
}

input.addEventListener('input', onInputChange);

console.log(nameLable);
console.log(input);
