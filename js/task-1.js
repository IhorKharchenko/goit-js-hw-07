const categoriesList = document.getElementById('categories');
const categoriesTitle = document.querySelector('h2');
const categoriesItems = document.getElementsByClassName('item')
const itemsArray = Array.from(categoriesItems)
console.log(`В списке ${categoriesList.childElementCount} категории.`);
itemsArray.forEach(element => { 
    console.log(`Категория: ${element.firstElementChild.textContent}`)
    console.log(`Количество елементов: ${element.lastElementChild.childElementCount}`);
})