const inputEl = document.querySelector('input')
// отримуємо доступ до input
inputEl.addEventListener('blur', onInputBlur => { 
    // добавляємо слухача blur на елемент

    if (onInputBlur.currentTarget.value.length == inputEl.dataset.length) {
        // через властивість dataset отримуємо досуп до атрибуту
        //  data-length і через власивість currentTarget.value зрівнюємо довжину рядку
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
        // при рівності через властивість classList добавляємо
        //  клас з зеленим кольором і знімаємо червоний
        console.log('рівні, зелений');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.add('valid');
        // при нерівності через властивість classList добавляємо
        //  клас з червоним кольором і знімаємо зелений
        console.log('не рівні, червоний');

    }
})