
const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
    Number(inputEl.dataset.length) === inputEl.value.trim().length
        ? inputEl.setAttribute('class', 'valid')
        : inputEl.setAttribute('class', 'invalid');
}