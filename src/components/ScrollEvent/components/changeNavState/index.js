import {SCROLL_HEIGHT} from "../../../../constants";


const headerElem = document.getElementById('pageHeader');
export function changeHeaderState(){
    if (window.scrollY > SCROLL_HEIGHT &&
        !headerElem.classList.contains('headerOnScroll')) {
        headerElem.classList.add('headerOnScroll');
    } else if (window.scrollY <= SCROLL_HEIGHT &&
        headerElem.classList.contains('headerOnScroll')) {
        headerElem.classList.remove('headerOnScroll');
    }
}