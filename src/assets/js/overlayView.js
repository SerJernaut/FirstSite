const projectContainerElems = document.getElementsByClassName('projectContainer');
const closeOverlayViewWindowElem = document.getElementById('closeOverlayViewWindow');
const overlayViewContainerElem = document.getElementById('overlayViewContainer');
const imgOfProject = document.getElementsByClassName('imgOfProject')[0];

for (let projectContainerElem of projectContainerElems) {

    projectContainerElem.addEventListener('click', function (event) {
        event.stopPropagation();
        imgOfProject.src = `${projectContainerElem.querySelector('img').src}`;
        onWorkClick();
    })
}

function onWorkClick() {
    overlayViewContainerElem.classList.add('overlayViewContainerOpened');
    closeOverlayViewWindowElem.onclick = closeButton;
    overlayViewContainerElem.addEventListener('click', function (event) {
        event.stopPropagation();
        if (overlayViewContainerElem === event.target) {
            closeButton();
        }
        console.log(event.target);
    });
}

function closeButton() {
    overlayViewContainerElem.classList.remove('overlayViewContainerOpened');
    imgOfProject.src = null;
    imgOfProject.alt= '';
}
