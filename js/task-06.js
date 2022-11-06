const input = document.querySelector('input#validation-input');
console.log(input);

function onValidationInput() {
  if (input.value.length !== Number(input.dataset.length)) {
    input.classList.add('invalid');
    input.classList.remove('valid');
  } else {
    input.classList.add('valid');
    input.classList.remove('invalid');
  }
}

input.addEventListener('blur', onValidationInput);
