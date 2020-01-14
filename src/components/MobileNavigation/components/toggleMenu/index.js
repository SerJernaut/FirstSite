
let isOpenedMenu = false;
const mainNavElem = document.getElementById('main-nav');
const navigationElem = document.getElementsByTagName('nav');
export const btnNavToggleElem = document.getElementById('btn-nav-toggle');

export function toggleMenu() {
    if(!isOpenedMenu) {
        isOpenedMenu = true;
        navigationElem[0].classList.add('navigation-open');
        mainNavElem.classList.add('primary-nav');
        mainNavElem.classList.remove('main-nav');
        btnNavToggleElem.classList.add('btnToggleRotate');
    }
    else {
        isOpenedMenu = false;
        navigationElem[0].classList.remove('navigation-open');
        mainNavElem.classList.remove('primary-nav');
        mainNavElem.classList.add('main-nav');
        btnNavToggleElem.classList.remove('btnToggleRotate');
    }
}

mainNavElem.addEventListener('click', (e) => {
    if (navigationElem[0].classList.contains('navigation-open')) {
        toggleMenu();
    }
});