
import { LINKS_ICON_MAP } from '../../../../constants';

/**
 *
 * @param {string} href
 * @param {Array<string>} className
 */

export default function (href) {
    const liElem = document.createElement('li');
    const linkElem = document.createElement( 'a' );
    linkElem.setAttribute( 'href', href );
    const iconElem = document.createElement( 'i' );
    const { hostname } = new URL( href );
    if (LINKS_ICON_MAP.has( hostname )) {
        iconElem.setAttribute('class', LINKS_ICON_MAP.get(new URL(href).hostname));
    } else {
        iconElem.classList.add( 'fab', 'default' );
    }

    liElem.appendChild(linkElem);
    linkElem.appendChild( iconElem );

    return liElem;
}