import createPicture from '../../../Picture';
import createSocialNetworksLinksList from '../../../СontactsList';
import {createTextElem} from "../../../../utils";

export default function (employee) {
    const teamItemElem = document.createElement('div');
    const userPicture = createPicture(employee.avatar, 'https://i.imgur.com/jC5FZ3s.png',
        'profile picture', []);
    teamItemElem.classList.add('person');
    teamItemElem.appendChild(userPicture);
    const personContentElem = document.createElement('div');
    personContentElem.classList.add('person-content');
    teamItemElem.appendChild(personContentElem);
    personContentElem.appendChild(createTextElem('h4', employee.name));
    personContentElem.appendChild(createTextElem('h5', employee.position));
    personContentElem.appendChild(createTextElem('p', employee.description));
    teamItemElem.appendChild(createSocialNetworksLinksList(employee.contacts,["social-icons"]));
    return teamItemElem;
}



