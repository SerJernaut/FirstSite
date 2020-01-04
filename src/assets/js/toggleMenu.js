
const navigationElem = document.getElementsByTagName('nav');
const btnNavToggleElem = document.getElementById('btn-nav-toggle');
const mainNavElem = document.getElementById('main-nav');
let isOpenedMenu = false;
btnNavToggleElem.onclick = () => {
    toggleMenu();
}

function toggleMenu() {
    if(!isOpenedMenu) {
    isOpenedMenu = true;
    navigationElem[0].classList.add('navigation-open');
    mainNavElem.classList.add('primary-nav');
    mainNavElem.classList.remove('main-nav');
    }
    else {
    isOpenedMenu = false;
    navigationElem[0].classList.remove('navigation-open');
    mainNavElem.classList.remove('primary-nav');
    mainNavElem.classList.add('main-nav');
    }
}

mainNavElem.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        toggleMenu();
    }
});