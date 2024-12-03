import { createElement } from "./index.js";

export function createMenuDom () {
    const container = createElement('content', 'div');
    container.style.width = '900px';
    container.style.height = '1000px';
    container.style.backgroundColor = 'blue';
    container.style.display = 'flex';
    container.style.justifySelf = 'center';
    container.style.flexDirection = 'column';
    container.style.flex = '1 0 80%';
    container.textContent = 'tasdfaszdfasdf';
    container.position = 'relative';

}