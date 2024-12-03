export const greeting = 'Test';

export function createElement (id, element) {
    const content = document.getElementById(id);
    const container = document.createElement(element);
    content.appendChild(container);
    return container;
}

export function createDom () {
    const container = createElement('content', 'div');
    container.style.width = '200px';
    container.style.height = '600px';
    container.style.backgroundColor = 'red';
    container.style.display = 'flex';
    container.style.justifySelf = 'center';
    container.style.flexDirection = 'column';
    container.style.flex = '1 0 80%';
    container.textContent = 't';
    container.position = 'relative';

}

