import { createElement } from "./index.js";

export function createHomeDom () {
    const container = createElement('content', 'div');
    container.style.width = '900px';
    container.style.height = '1000px';
    container.style.backgroundColor = 'orange';
    container.style.display = 'flex';
    container.style.justifySelf = 'center';
    container.style.flexDirection = 'column';
    container.style.flex = '1 0 80%';
    container.textContent = 'tttttttttttttttttttttttt';
    container.position = 'relative';
}

