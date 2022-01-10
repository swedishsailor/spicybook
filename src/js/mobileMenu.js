import { getHTML } from "./functions";
import {generalHTML, refreshMainView} from './main';

// Variables
const church = getHTML(document.body,true);

// CUSTOM EVENT 
// get mobile device width and display bars if it's width is less than 768px
const getMobileDeviceSize = new CustomEvent('mobile', {
    detail: {
        width: window.innerWidth
    }
})
document.dispatchEvent(getMobileDeviceSize);

// If bars exists, attach to it event listener, if not return null
const initMenuLinksListeners = () => {
document.querySelector('.bars')
    ?
    document.querySelector('.bars').addEventListener('click', () => {
        document.body.innerHTML = '<div class="mobileMenu"></div>';
        // Add links to subpages
        document.querySelector('.mobileMenu').innerHTML += `<h1><span>S</span><span>p</span><span>i</span><span>c</span><span>y</span> <span>B</span><span>o</span><span>o</span><span>k</h1>`;
        document.querySelector('.mobileMenu').innerHTML += `<p>by SwedishSailor</p>`;
        document.querySelector('.mobileMenu').innerHTML += `<h2 class="mobileMenuLink" id="home">Home</h2>`;
        document.querySelector('.mobileMenu').innerHTML += `<h2 class="mobileMenuLink" id="login">Log in</h2>`;
        document.querySelector('.mobileMenu').innerHTML += `<h2 class="mobileMenuLink" id="register">Register</h2>`;
        document.querySelector('.mobileMenu').innerHTML += `<h2 class="mobileMenuLink" id="sponsors">Sponsors</h2>`;
        document.querySelector('.mobileMenu').innerHTML += `<h2 class="mobileMenuLink" id="recipes">Recipes</h2>`;


        // Add event listeners to Links
        document.querySelectorAll('.mobileMenuLink').forEach(mobileMenuListener);
    })
    :
    null;
}

    const mobileMenuListener = element => {
        element.addEventListener('click', e => {
                    // Main Container of this section
        const container = document.body;
            const thisLink = e.target.id;

            switch (thisLink) {
                // Home
                case 'home':
                    console.log('xd');
                    console.log(church);
                    container.innerHTML = church;
                    initMenuLinksListeners();
                    break;
                // Login
                case 'login':
                    console.log('xd');
                    break;
                // Register
                case 'register':
                    console.log('xd');
                    break;
                // Sponsors
                case 'sponsors':
                    console.log('xd');
                    break;
                // Recipes
                case 'recipes':
                    console.log('xd');
                    break;
            }
        })
    }

    /* Actions */
    // Declare mobile menu links event listeners
    initMenuLinksListeners();


