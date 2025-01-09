import { createElement, styleMainContainer } from "./index.js";
import background from './images/timber-interior-texture.jpg';

export function createMenuDom () {
    const container = createElement('content', 'div');
    container.setAttribute('id', 'div1');
    //parameter order: variable, width, height, opacity, display, justifySelf, flexDirection, flexValue, position, alignItems
    styleMainContainer(container, '900px', '1000px', '1', 'flex', 'center', 'column', '1 0 80%', 'relative', 'center');

    const header = createElement('div1', 'h1');
    header.textContent = 'Menu';
    header.style.fontSize = '5.5rem';
    header.style.textAlign = 'center';
    header.style.width = '50%';
    header.style.backgroundImage = `url(${background})`;
    header.style.borderRadius = '35%';
    header.style.marginBottom = '50px';
}

