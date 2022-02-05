const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')
    // доступ до id

nameInput.addEventListener('input', (event) => {
    nameOutput.textContent = event.currentTarget.value;
    // підставляє текст в nameOutput
    
    if (!event.currentTarget.value) {
        nameOutput.textContent = "Anonymous";
    }
    // якщо nameOutput пустий то відображається Anonymous
})
