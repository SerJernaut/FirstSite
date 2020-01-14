import {closeButton} from "../closeButton";

const overlayViewWindowElem = document.getElementById('overlayViewWindow');

export function onCloseOverlayViewWindow (){
    closeButton();
    overlayViewWindowElem.removeChild(overlayViewWindowElem.children[1]);
}