import {closeButton, overlayViewContainerElem} from "../closeButton";
import {appendById} from "../../../../utils";
import createPicture from "../../../Picture";
import {onCloseOverlayViewWindow} from "../onCloseOverlayViewWindow";

const closeOverlayViewWindowElem = document.getElementById('closeOverlayViewWindow');


export function onWorkClick() {
    overlayViewContainerElem.classList.add('overlayViewContainerOpened');
    closeOverlayViewWindowElem.onclick = onCloseOverlayViewWindow;
    overlayViewContainerElem.addEventListener('click', function (event) {
        event.stopPropagation();
        if (overlayViewContainerElem === event.target) {
            onCloseOverlayViewWindow();
        }
        console.log(event.target);
    });
}