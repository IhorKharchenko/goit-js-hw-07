const ingredientsList = document.getElementById('ingredients');
// console.log(ingredientsList);
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

function createListElement(array) { 
  return array.map(item => {
    const element = document.createElement('li');
    element.textContent = item;
    // ingredientsList.append(element);
    return element;
  });
};
const products = createListElement(ingredients);
ingredientsList.append(...products);