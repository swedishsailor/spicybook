import { generalContainer } from "./main";
import { url } from "./constants";
import axios from 'axios';

/* Variables */
// Number of steps to choose in creator
const nr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// Data 
let fetchedData;

// Query button
const createRecipeButton = document.querySelector('.createRecipeButton');


/* Actions */
// Click the nav button
createRecipeButton.addEventListener('click', () => {
    generalContainer.innerHTML = '';
    generalContainer.innerHTML += '<div class="createRecipeContainer"><i class="far fa-arrow-alt-circle-left back"></i><h2 class="createRecipeTitle">Create recipe!</h2><div class="row"><label>Name :</label><input placeholder="type name of recipe..." class="nameInput" type="text"/></div><div class="row"><label>Description :</label><textarea class="descriptionInput" placeholder="This is my recipe \n I prepare this dish everyday for myself.\n etc... etc..." type="textarea" rows="4" cols="50"></textarea></div><div class="row"><label>Ingredients :</label><input class="ingredientsInput" type="text" placeholder="pepper, salt, sushi rice, wasabi"/></div><div class="row"><label>Number of steps :</label><select class="selectSteps">' + nr.map(i => `<option class="stepInput" value="${i}">${i}</option>`) + '</select></div><div class="row stepDiv">' + `<label class="steps">Step ${1}<input class="stepsText"/>` + '</div><div class="row"><label>Small image :</label><input class="smallImageInput" placeholder="paste here image link" type="text"/></div><div class="row"><label>Big image :</label><input placeholder="paste here image link" class="bigImageInput" type="text"/></div><div class="row"><button type="submit" class="createRecipeButton">Create</buton></div></div>';

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


// event delegation on change then number of steps in select then render number of steps under
generalContainer.addEventListener('change', (e) => {
    if(e.target.classList.contains('selectSteps')){
    console.log(e.target.value);
    renderSteps(e.target.value);
    }
})

const getData = () => {
    axios.get(url+'/data')
    .then(data=>fetchedData = data.data)
    .catch(err=>console.log(err))
}

const postData = (payload) => {
    axios.post(url+'/datapost', {
        payload
    })
    //.then(data=>console.log(data))
    .catch(err=>console.log(err))
}

const postIngredients = (payload) => {
    axios.post(url+'/ingredientspost', {
        payload
    })
    //.then(data=>console.log(data))
    .catch(err=>console.log(err))
}

const postSteps = (payload) => {
    axios.post(url+'/stepspost', {
        payload
    })
    //.then(data=>console.log(data))
    .catch(err=>console.log(err))
}


generalContainer.addEventListener('click', (e, name,description, ingredients, steps, smallImage, bigImage) => {
        // create button click
        if(e.target.classList.contains('createRecipeButton')){
            // GET data http request
           getData();
           console.log(fetchedData);
           name = generalContainer.querySelector('.nameInput').value; 
           description = generalContainer.querySelector('.descriptionInput').value; 
           ingredients = generalContainer.querySelector('.ingredientsInput').value.split(',');
           steps =[];
           // make an array out of all steps inputs to push every element
           generalContainer.querySelectorAll('.stepsText').forEach(element => {
               // get only steps where is text
               element.value !== '' ? steps.push(element.value) : null
           })
           smallImage = generalContainer.querySelector('.smallImageInput').value; 
           bigImage = generalContainer.querySelector('.bigImageInput').value; 
           console.log('name: '+name, '\ndescription: ' + description, '\ningredients :' + ingredients, '\nsteps :' + steps, '\nsmallImage: '+ smallImage, '\nbigImage :' + bigImage);
           // Define payload and add to it all features
           // POST all data
           let payload = {};
           // GET the number of data then find it's length and produce id 
           payload.id = fetchedData !== undefined ? fetchedData.length + 1 : 1;
           payload.name = name;
           payload.text = description;
           payload.img = smallImage;
           payload.bigImg =bigImage;
           postData(payload);

           // POST all ingredients
           let ingredientsPayload = {};
           ingredients.forEach(element => {
            ingredientsPayload.id = payload.id;
            ingredientsPayload.name = element;
            ingredientsPayload.recipeId = payload.id;
            postIngredients(ingredientsPayload);
           })

           // POST all steps
           let stepsPayload = {};
           steps.forEach(element => {
               stepsPayload.id = payload.id;
               stepsPayload.name = element;
               stepsPayload.stepsId = payload.id;
               console.log(stepsPayload);
               postSteps(stepsPayload);
           })           
           //console.log(payload);
        }
})

getData();

