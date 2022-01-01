import { data } from './data';
import { mainHtmlMaker, getHTML, generalHtmlMaker } from './functions';

class Recipe {
    constructor(id, name, img, href, text, bigImg, ingredients) {
        const thisRecipe = this;
        thisRecipe.id = id;
        thisRecipe.name = name;
        thisRecipe.img = img;
        thisRecipe.href = href;
        thisRecipe.text = text;
        thisRecipe.bigImg = bigImg;
        thisRecipe.ingredients = ingredients;
    }
    render() {
        return mainContainer.innerHTML += mainHtmlMaker(this.id, this.img, this.name);
    }

}

/* Varibales */
let allRecipes = [];
const containerHTML = document.querySelector('.container');
// General Container HTML - made from taking whole container and turning it into a string
const generalHTML = getHTML(containerHTML, true);


/* Querry */
export const generalContainer = document.querySelector('.container');
let recipeWindow = document.querySelectorAll('.recipeDiv');
const recipeImg = document.querySelectorAll('.recipeImg');
const mainContainer = document.querySelector('.main');
const searchInput = document.querySelector('.searchInput');
const searchSubmit = document.querySelector('.fa-search');
const backButton = document.querySelector('.back');
const homeIcon = document.querySelector('.homeIcon');

const createRecipeButton = document.querySelector('.createRecipeButton');

/* Functions */

const refreshMainView = () => {
    // make General Container of HTML an empty string
    generalContainer.innerHTML = '';
    // then add correct HTML from memory initialized at the start of using website
    generalContainer.innerHTML += generalHTML;
    // map all the recipes in the main div
    allRecipes.forEach(element => {
        // phrase below is generalContainer.innerHTML but it can't be taken from const variable
        document.querySelector('.main').innerHTML += mainHtmlMaker(element.id, element.img, element.name);
    })
    initEventListeners();
}



// Search for input recipes
searchSubmit.addEventListener('click', () => {
    let filteredRecipes = [];
    filteredRecipes = allRecipes.filter(element => element.name.includes(searchInput.value));
    // Check if there is any result of searching: if yes display it, if not display error inscription
    filteredRecipes.length == 0 ? document.querySelector('.main').innerHTML = `<p class="notFound">No recipes found at name "${searchInput.value}"</p>` : document.querySelector('.main').innerHTML = '';
    filteredRecipes.forEach(element => {
        document.querySelector('.main').innerHTML += mainHtmlMaker(element.id, element.img, element.name);
    })
    initEventListeners();
})
// init Recipes
data.forEach(element => {
    const recipe = new Recipe(element.id, element.name, element.img, element.href, element.text, element.bigImg, element.ingredients);
    allRecipes.push(recipe);
    recipe.render();
});

/* Actions */
homeIcon.addEventListener('click', () => {
    refreshMainView();
})
// EVENT DELEGATION to attach event listener to dynamic Back Button
document.addEventListener('click', (e) => {
    // if click target is backButton do something
    if (e.target.classList.contains('back')) {
        refreshMainView();
    }
});

// Click the recipe
const initEventListeners = () => {
    setTimeout(() => {
        recipeWindow = document.querySelectorAll('.recipeDiv');
        recipeWindow.forEach(window => {
            window.addEventListener('click', () => {
                const thisRecipe = allRecipes[window.id];
                generalContainer.innerHTML = '';
                generalContainer.innerHTML += generalHtmlMaker(thisRecipe.text, thisRecipe.bigImg, thisRecipe.ingredients);
            })
        })
    }, 100);
}
// Click the recipe
initEventListeners();