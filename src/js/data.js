
import axios from 'axios';
import { url } from './constants';

let importedData,importedSteps, importedIngredients;
let correctData;

const getData = () => {
    axios.get(url+'/data')
    .then(data=>importedData = data.data)
    .catch(err=>console.log(err))
}
const getSteps = () => {
    axios.get(url+'/steps')
    .then(data=>importedSteps = data.data)
    .catch(err=>console.log(err))
}
const getIngredients = () => {
    axios.get(url+'/ingredients')
    .then(data=>importedIngredients = data.data)
    .catch(err=>console.log(err))
}

// GET the data to create rendering objects from it
getData();
getSteps();
getIngredients();

// its in SetTimout func becuase we want it to be the last executed func here
setTimeout(() => {
    console.log(importedData);
    let filteredSteps, filteredIngredients;
    // Filter all steps and ingredients and add them to the data with correct id
    importedData.forEach(element => {
        filteredSteps = importedSteps.filter(obj => obj.id == element.id);
        element.steps = filteredSteps;
        filteredIngredients = importedIngredients.filter(obj => obj.id == element.id);
        element.ingredients = filteredIngredients;
    });
    correctData = importedData;
    data = correctData;
}, 80);

export let data = correctData !== undefined? correctData : [];

