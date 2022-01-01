import { generalContainer } from "./main";

//Login button Query
const loginButton = document.querySelector('.loginButton');

loginButton.addEventListener('click', () => {
    generalContainer.innerHTML = '';
    generalContainer.innerHTML += '<div class="loginContainer"><i class="far fa-arrow-alt-circle-left back"></i><h2 class="loginTitle">Log in</h2><label>Account e-mail:</label><input class="loginInput" type="email" placeholder="Your e-mail"></input><label>Account password:</label><input class="loginInput" type="password" placeholder="Your password"></input><button type="submit" class="submitButton">Submit</button><p> or </p><a href="#" class="registerLink"> Register an account</a></div>'
})

