const SCROLL_HEIGHT = 35;

const headerElem = document.getElementById('pageHeader');
window.onscroll = function() {
    if (window.scrollY > SCROLL_HEIGHT &&
        !headerElem.classList.contains('headerOnScroll')) {
        headerElem.classList.add('headerOnScroll');
    } else if (window.scrollY <= SCROLL_HEIGHT &&
        headerElem.classList.contains('headerOnScroll')) {
        headerElem.classList.remove('headerOnScroll');

    }
};