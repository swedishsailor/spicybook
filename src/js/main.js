import { data } from './data';
import { mainHtmlMaker, getHTML, generalHtmlMaker } from './functions';

class Recipe {
    constructor(id, name, img, href, text, bigImg, ingredients, steps) {
        const thisRecipe = this;
        thisRecipe.id = id;
        thisRecipe.name = name;
        thisRecipe.img = img;
        thisRecipe.href = href;
        thisRecipe.text = text;
        thisRecipe.bigImg = bigImg;
        thisRecipe.ingredients = ingredients;
        thisRecipe.steps = steps;
    }
    render() {
        return mainContainer.innerHTML += mainHtmlMaker(this.id, this.img, this.name);
    }

}

/* Varibales */
let allRecipes = [];
const containerHTML = document.getElementById('container');
// General Container HTML - made from taking whole container and turning it into a string
export const generalHTML = getHTML(containerHTML, true);


/* Querry */
export const generalContainer = document.getElementById('container');
let recipeWindow = document.querySelectorAll('.recipeDiv');
const recipeImg = document.querySelectorAll('.recipeImg');
const mainContainer = document.querySelector('.main');
const searchInput = document.querySelector('.searchInput');
const searchSubmit = document.querySelector('.fa-search');
const backButton = document.querySelector('.back');
const homeIcon = document.querySelector('.homeIcon');

/* Functions */

export const refreshMainView = () => {
    window.location.reload();
    /*
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
    */
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





setTimeout(() => {
    data().forEach(element => {
        const recipe = new Recipe(element.id, element.name, element.img, element.href, element.text, element.bigImg, element.ingredients, element.steps);
        allRecipes.push(recipe);
        recipe.render();
    })
}, 210);

// init Recipes




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
                const thisRecipe = allRecipes[window.id-1];
                generalContainer.innerHTML = '';
                generalContainer.innerHTML += generalHtmlMaker(thisRecipe.name, thisRecipe.text, thisRecipe.steps, thisRecipe.bigImg, thisRecipe.ingredients);
            })
        })
        if(document.querySelector('.recipeDiv')){
            document.body.removeChild(loadingTag);
        }
    }, 220);
}
const loadingTag = document.createElement('p');
loadingTag.innerHTML = 'Loading';
loadingTag.classList.add('loadingTag');
document.body.appendChild(loadingTag);

// Click the recipe system
initEventListeners();