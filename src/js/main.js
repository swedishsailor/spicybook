import { data } from './data';

class Recipe {
    constructor(id, name, img, href) {
        const thisRecipe = this;
        thisRecipe.id = id;
        thisRecipe.name = name;
        thisRecipe.img = img;
        thisRecipe.href = href;
    }
    render() {
        const html = `<div class="recipeDiv"><img src="${this.img}"><p class="recipeTitle">${this.name}</p></div>`;
        return mainContainer.innerHTML += html;
    }

}

/* Varibales */
let allRecipes = [];

/* Querry */
const recipeWindow = document.querySelectorAll('.recipeDiv');
const mainContainer = document.querySelector('.main');
const searchInput = document.querySelector('.searchInput');
const searchSubmit = document.querySelector('.fa-search');


/* Actions */
// Click the recipe
recipeWindow.forEach(window => {
    window.addEventListener('click', () => {
        console.log('clicked');
    })
})

// Search for input recipes
searchSubmit.addEventListener('click', () => {
    let filteredRecipes = [];
    filteredRecipes = allRecipes.filter(element => element.name.includes(searchInput.value));
    // Check if there is any result of searching: if yes display it, if not display error inscription
    filteredRecipes.length  == 0 ? mainContainer.innerHTML = `<p class="notFound">No recipes found at name "${searchInput.value}"</p>` : mainContainer.innerHTML ='';
    filteredRecipes.forEach(element => {
        const html = `<div class="recipeDiv"><img src="${element.img}"><p class="recipeTitle">${element.name}</p></div>`;
        mainContainer.innerHTML += html;
    })

})
// init Recipes
data.forEach(element => {
    const recipe = new Recipe(element.id, element.name);
    allRecipes.push(recipe);
    recipe.render();
});

