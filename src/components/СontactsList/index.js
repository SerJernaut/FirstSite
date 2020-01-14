import createLinkItem from './components/СontactItem';

export default function(links, className) {
    const socialIconsContainer = document.createElement('ul');

    links.forEach(link => {
        socialIconsContainer.appendChild(createLinkItem(link));
    });

    socialIconsContainer.classList.add(...className);
    return socialIconsContainer;
}