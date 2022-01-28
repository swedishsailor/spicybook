import { generalContainer } from "./main";

// Querry Selectors
const createAccountButton = document.querySelector('.createAccountButton');
console.log(createAccountButton);

const createAccountTemplate = document.getElementById('createAccountTemplate');
const createAccountTemplateContent = createAccountTemplate.content;

createAccountButton.addEventListener('click', () => {
    const copy = createAccountTemplateContent.cloneNode(true);
    generalContainer.innerHTML = '';
    generalContainer.appendChild(copy);

})