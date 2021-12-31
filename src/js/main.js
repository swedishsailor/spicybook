import { data } from './data';
import {mainHtmlMaker, getHTML, generalHtmlMaker} from './functions';

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
        return mainContainer.innerHTML += mainHtmlMaker(this.id,this.img,this.name);
    }

}

/* Varibales */
let allRecipes = [];
const containerHTML = document.querySelector('.container');
// General Container HTML - made from taking whole container and turning it into a string
const generalHTML = getHTML(containerHTML, true);


/* Querry */
const generalContainer = document.querySelector('.container');
let recipeWindow = document.querySelectorAll('.recipeDiv');
const recipeImg = document.querySelectorAll('.recipeImg');
const mainContainer = document.querySelector('.main');
const searchInput = document.querySelector('.searchInput');
const searchSubmit = document.querySelector('.fa-search');
const backButton = document.querySelector('.back');

/* Functions */





// Search for input recipes
searchSubmit.addEventListener('click', () => {
    let filteredRecipes = [];
    filteredRecipes = allRecipes.filter(element => element.name.includes(searchInput.value));
    // Check if there is any result of searching: if yes display it, if not display error inscription
    filteredRecipes.length  == 0 ? document.querySelector('.main').innerHTML = `<p class="notFound">No recipes found at name "${searchInput.value}"</p>` : document.querySelector('.main').innerHTML ='';
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
// EVENT DELEGATION to attach event listener to dynamic Back Button
document.addEventListener('click', (e) => {
    // if click target is backButton do something
    if(e.target.classList.contains('back')){
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
});

// Click the recipe
const initEventListeners = () => {
    setTimeout(() => {
        recipeWindow = document.querySelectorAll('.recipeDiv');
        recipeWindow.forEach(window => {
            window.addEventListener('click', () => {
                const thisRecipe = allRecipes[window.id];
                console.log('clicked', window.id);
                generalContainer.innerHTML = '';
                console.log(allRecipes[window.id].bigImg)
                generalContainer.innerHTML += generalHtmlMaker(thisRecipe.text, thisRecipe.bigImg, thisRecipe.ingredients);
            })
        })
    }, 100);
}
// Click the recipe
initEventListeners();

//const sampleText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
//generalContainer.innerHTML = '';
//generalContainer.innerHTML += '<i class="far fa-arrow-alt-circle-left back"></i><div class="recipeDetails"><div class="leftPanel"><div class="details"><p class="text">'+ sampleText + '</p></div></div><div class="rightPanel"><div class="img"></div><div class="ingredients">' + '<ul class="list"><p class="listName">Ingredients</p><li class="listItem">XD</li><li class="listItem">oooo</li></ul>' + '</div></div></div>';