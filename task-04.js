const buttonCounter = {
    inc: document.querySelector("[data-action='increment']"),
    dec: document.querySelector("[data-action='decrement']"),
    // доступ до дата атрибутів
    value: document.querySelector('#value'),
    // доступ до span id
  };
  let counterValue = 0;
    //   поточне значення лічильника
    
    const increment = () => {
        counterValue += 1;
        // збільшення значення на 1
    
        document.getElementById('value').textContent = counterValue;
    };
  
    const decrement = () => {
        counterValue -= 1;
        // зменшення значення на 1

    
        document.getElementById('value').textContent = counterValue;
    };
    
    buttonCounter.inc.addEventListener('click', increment);
    // Додає слухача події на елемент increment
    buttonCounter.dec.addEventListener('click', decrement);
    // Додає слухача події на елемент decrement