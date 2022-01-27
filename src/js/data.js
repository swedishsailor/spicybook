
import axios from 'axios';
import { url } from './constants';

let importedData,importedSteps, importedIngredients;
let correctData;

// This func activate all data fetchings and then it makes one object from it
const getData = () => {
    let resultData;
        axios.get(url+'/data')
        .then(data=>importedData = data.data)
        .then(getSteps())
        .then(getIngredients()) 
        // This method is usefull for finding out if the server works properly
        /*
        .then(() => {
            console.log(importedData, importedSteps, importedIngredients)
        }) */
        .then(
            resultData = dataPreparing()
        )   
        .catch(err=>console.log(err)) 
        return resultData;  
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

// Prepare data promise to export it to the app main
export const data = () => getData();


// its in SetTimout func becuase we want it to be the last executed func here
function dataPreparing(){
    let filteredSteps, filteredIngredients;
    // Filter all steps and ingredients and add them to the data with correct id
    importedData != undefined
    ?
     importedData.forEach(element => {
        filteredSteps = importedSteps.filter(obj => obj.id == element.id);
        element.steps = filteredSteps;
        filteredIngredients = importedIngredients.filter(obj => obj.id == element.id);
        element.ingredients = filteredIngredients;
    })
    :
    null;
    correctData = importedData;
    return correctData;
}




