const inputEl = document.querySelector('#font-size-control')
const inputText = document.querySelector('#text')

inputEl.addEventListener('input', (event) => {
    inputText.style.fontSize = event.currentTarget.value + 'px';
})