

const teamContainerElem = document.getElementById('teamContainer');

let iconsMap = new Map();
iconsMap.set('facebook.com', 'fab fa-facebook-f');
iconsMap.set('twitter.com', 'fab fa-twitter');
iconsMap.set('linkedin.com', 'fab fa-linkedin-in');
iconsMap.set('google.com', 'fab fa-google-plus-g');
iconsMap.set('dribble.com', 'fab fa-dribbble');

fetch('./data/employees.json').then(response => {
    return response.json();
}).then(data => {
    data.forEach(employee => {
        createUserCard(employee);
    });

});

function createUserCard(employee){
    const teamItemElem = document.createElement('div');
    teamItemElem.classList.add('person');
    teamContainerElem.appendChild(teamItemElem);

    const imageElem = new Image();
    imageElem.src = employee.avatar;
    imageElem.onerror = function() {
        imageElem.src = 'https://i.imgur.com/jC5FZ3s.png';
    };
    teamItemElem.appendChild(imageElem);

    const personContentElem = document.createElement('div');
    personContentElem.classList.add('person-content');
    teamItemElem.appendChild(personContentElem);

    const h4Elem = document.createElement('h4');
    h4Elem.innerText = employee.name;
    personContentElem.appendChild(h4Elem);

    const h5Elem = document.createElement('h5');
    h5Elem.innerText = employee.position;
    personContentElem.appendChild(h5Elem);

    const pElem = document.createElement('p');
    pElem.innerText = employee.description;
    personContentElem.appendChild(pElem);

    const ulElem = document.createElement('ul');
    ulElem.classList.add('social-icons');
    teamItemElem.appendChild(ulElem);

    employee.contacts.forEach(contact => {
        createSocialNetworksLinks(contact, ulElem);
    });
}

function createSocialNetworksLinks(contact, elem) {
    const liElem = document.createElement('li');
    const aElem = document.createElement('a');
    const spanElem = document.createElement('span');

    elem.appendChild(liElem);
    liElem.appendChild(aElem);
    aElem.setAttribute('href', contact);
    aElem.appendChild(spanElem);

    spanElem.setAttribute('class', iconsMap.get(new URL(contact).hostname));
}