import { createElement, createMultipleElements, styleMainContainer } from "./index.js";
import background from './images/timber-interior-texture.jpg';

export function createMenuDom () {
    const container = createElement('content', 'div');
    container.setAttribute('id', 'div1');
    //parameter order: variable, width, height, opacity, display, justifySelf, flexDirection, flexValue, position, alignItems
    styleMainContainer(container, '90%', '100%', '1', 'flex', 'center', 'column', '1 0 80%', 'relative', 'center');

    const header = createElement('div1', 'h1');
    header.textContent = 'Menu';
    header.style.fontSize = '5.5rem';
    header.style.textAlign = 'center';
    header.style.width = '50%';
    header.style.backgroundImage = `url(${background})`;
    header.style.borderRadius = '35%';
    header.style.marginBottom = '50px';

    const menuContainer = createElement('div1', 'div');
    menuContainer.setAttribute('id', 'menuContainer')
    menuContainer.style.display = 'grid';
    menuContainer.style.gridTemplate = 'repeat(5, 1fr) / repeat(3, 1fr)';
    menuContainer.style.justContent = 'center';
    menuContainer.style.width = '100%';
    menuContainer.style.alignItems = 'center';

    const menuDivs = createMultipleElements('menuContainer', 15, 'div');
    menuDivs.forEach(element => {
        element.textContent = 'Test  '
        element.style.fontSize = '5rem';
         element.style.width = '50%';
         element.style.backgroundColor = 'blue';
    })
}

