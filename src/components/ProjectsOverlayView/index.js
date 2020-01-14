import {appendById} from "../../utils";
import createPicture from '../Picture';
import {onWorkClick} from "./components/onWorkClick";

const projectContainerElements = document.getElementsByClassName('projectContainer');

for (let projectContainerElem of projectContainerElements) {

    projectContainerElem.addEventListener('click', function (event) {
        event.stopPropagation();
        appendById('overlayViewWindow', createPicture(`${projectContainerElem.querySelector('img').src}`,'https://i.imgur.com/jC5FZ3s.png', 'project image',['imgOfProject']));
        onWorkClick();
    })
}
