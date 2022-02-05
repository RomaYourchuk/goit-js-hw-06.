const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
// знаходить елемент з id ingredients
ingredients.forEach((ingredient) => {
  // перебирає масив ingredients
  const item = document.createElement("li");
  // добавляє li 
  item.textContent = ingredient;
  // добавляє назву інгидієнта як текст
  item.classList.add("item");
  // добавляє li клас item
  ingredientsList.append(item);
  // добавляє усі li в список ul
});

