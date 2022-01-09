
// CUSTOM EVENT 
// get mobile device width and display bars if it's width is less than 768px
const getMobileDeviceSize = new CustomEvent('mobile', {
    detail:{
        width:window.innerWidth
    }
})
document.addEventListener('mobile', e => e.detail.width < 768 ? document.querySelector('.navBar').innerHTML+='<i class="fas fa-bars bars"></i>' : null);
document.dispatchEvent(getMobileDeviceSize);

// If bars exists, attach to it event listener, if not return null
document.querySelector('.bars') ?
document.querySelector('.bars').addEventListener('click', ()=>{
    document.body.innerHTML = '<div class="mobileMenu"></div>';
    // Add links to subpages
    document.querySelector('.mobileMenu').innerHTML += `<h2 class="mobileMenuLink">Home</h2>`;
    document.querySelector('.mobileMenu').innerHTML += `<h2 class="mobileMenuLink">Log in</h2>`;
    document.querySelector('.mobileMenu').innerHTML += `<h2 class="mobileMenuLink">Register</h2>`;
    document.querySelector('.mobileMenu').innerHTML += `<h2 class="mobileMenuLink">Sponsors</h2>`;
    document.querySelector('.mobileMenu').innerHTML += `<h2 class="mobileMenuLink">Recipes</h2>`;
})
:
null;