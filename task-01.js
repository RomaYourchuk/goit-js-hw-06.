const navEl = document.querySelectorAll('.item');
// знаходить усі елементи з класом item
console.log(`Number of categories: ${navEl.length}`);
// виводить у консоль кількість елементів li.item

navEl.forEach(function (category) {
    console.log('Category: ', category.firstElementChild.textContent);
    // виводить у консоль текст усіх заголовків через firstElementChild 
    console.log('Element: ', category.lastElementChild.children.length);
    // виводить у консоль кількість елементів li 
});
