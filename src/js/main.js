import { data } from './data';
import {mainHtmlMaker} from './functions';

class Recipe {
    constructor(id, name, img, href) {
        const thisRecipe = this;
        thisRecipe.id = id;
        thisRecipe.name = name;
        thisRecipe.img = img;
        thisRecipe.href = href;
    }
    render() {
        return mainContainer.innerHTML += mainHtmlMaker(this.id,this.img,this.name);
    }

}

/* Varibales */
let allRecipes = [];

/* Querry */
let recipeWindow = document.querySelectorAll('.recipeDiv');
const recipeImg = document.querySelectorAll('.recipeImg');
const mainContainer = document.querySelector('.main');
const searchInput = document.querySelector('.searchInput');
const searchSubmit = document.querySelector('.fa-search');

/* Functions */
// Click the recipe
const initEventListeners = () => {
    setTimeout(() => {
        recipeWindow = document.querySelectorAll('.recipeDiv');
        recipeWindow.forEach(window => {
            window.addEventListener('click', () => {
                console.log('clicked', window.id);
            })
        })
    }, 100);
}

// Search for input recipes
searchSubmit.addEventListener('click', () => {
    let filteredRecipes = [];
    filteredRecipes = allRecipes.filter(element => element.name.includes(searchInput.value));
    // Check if there is any result of searching: if yes display it, if not display error inscription
    filteredRecipes.length  == 0 ? mainContainer.innerHTML = `<p class="notFound">No recipes found at name "${searchInput.value}"</p>` : mainContainer.innerHTML ='';
    filteredRecipes.forEach(element => {
        mainContainer.innerHTML += mainHtmlMaker(element.id, element.img, element.name);
    })
    initEventListeners();
})
// init Recipes
data.forEach(element => {
    const recipe = new Recipe(element.id, element.name, element.img, element.href);
    allRecipes.push(recipe);
    recipe.render();
});

/* Actions */
// Click the recipe
initEventListeners();
