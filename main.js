let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toogle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}