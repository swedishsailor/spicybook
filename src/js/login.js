import { loginHTML } from "./constants";
import { generalContainer } from "./main";

//Login button Query
const loginButton = document.querySelector('.loginButton');
let loginTemplate = document.getElementById('loginTemplate');
let loginTemplateContent = loginTemplate.content;

document.querySelector('.loginButton').addEventListener('click', () => {
    const copy = loginTemplateContent.cloneNode(true);
    generalContainer.innerHTML = '';
    //generalContainer.innerHTML += loginHTML;
    generalContainer.appendChild(copy);
})

