const projectContainerElems = document.getElementsByClassName('projectContainer');
const closeOverlayViewWindowElem = document.getElementById('closeOverlayViewWindow');
const overlayViewContainerElem = document.getElementById('overlayViewContainer');

for (let projectContainerElem of projectContainerElems) {

    projectContainerElem.addEventListener('click', function (event) {
        event.stopPropagation();
        const imgOfProject = document.getElementsByClassName('imgOfProject')[0];
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
    overlayViewContainerElem.style.display = 'none';
}
