import { generalContainer } from "./main";

/* Variables */
// Number of steps to choose in creator
const nr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Query button
const createRecipeButton = document.querySelector('.createRecipeButton');


/* Actions */
// Click the nav button
createRecipeButton.addEventListener('click', () => {
    generalContainer.innerHTML = '';
    generalContainer.innerHTML += '<div class="createRecipeContainer"><i class="far fa-arrow-alt-circle-left back"></i><h2 class="createRecipeTitle">Create recipe!</h2><div class="row"><label>Name :</label><input placeholder="type name of recipe..." class="nameInput" type="text"/></div><div class="row"><label>Description :</label><textarea class="descriptionInput" placeholder="" type="textarea" rows="4" cols="50"></textarea></div><div class="row"><label>Ingredients :</label><input class="ingredientsInput" type="text" placeholder="pepper, salt, sushi rice, wasabi"/></div><div class="row"><label>Number of steps :</label><select class="selectSteps">' + nr.map(i => `<option class="stepInput" value="${i}">${i}</option>`) + '</select></div><div class="row stepDiv">' + `<label class="steps">Step ${1}<input class="stepsText"/>` + '</div><div class="row"><label>Small image :</label><input class="smallImageInput" placeholder="paste here image url" type="text"/></div><div class="row"><label>Big image :</label><input placeholder="paste here image url" class="bigImageInput" type="text"/></div><div class="row"><button type="submit">Create</buton></div></div>';

})


// Select of a step number
const selectSteps = document.querySelector('.selectSteps');
// Its where the steps spawns on select change

// Display inputs for every number in select
const renderSteps = (value) => {
    const stepDiv = document.querySelector('.stepDiv');
    stepDiv.innerHTML = '';
    for (let i = 0; i < parseInt(value); i++) {
        stepDiv.innerHTML += `<div class="row"><label class="steps">Step ${i + 1}<input class="stepsText"/></label></div>`;
    }
}


// event delegation on change then umber of steps in select
generalContainer.addEventListener('change', (e) => {
    if(e.target.classList.contains('selectSteps')){
    console.log(e.target.value);
    renderSteps(e.target.value);
    }
})

