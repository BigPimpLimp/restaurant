import { createElement, styleMainContainer } from "./index.js";
import background from './images/timber-interior-texture.jpg';

export function createAboutDom () {
    const container = createElement('content', 'div');
    container.setAttribute('id', 'div1');
    //parameter order: variable, width, height, opacity, display, justifySelf, flexDirection, flexValue, position, alignItems
    styleMainContainer(container, '900px', '1000px', '1', 'flex', 'center', 'column', '1 0 80%', 'relative', 'center');

    const header = createElement('div1', 'h1');
    header.textContent = 'Contact Us';
    header.style.fontSize = '5.5rem';
    header.style.textAlign = 'center';
    header.style.width = '50%';
    header.style.backgroundImage = `url(${background})`;
    header.style.borderRadius = '35%';
    header.style.marginBottom = '50px';

    const p1 = createElement('div1', 'p', 'contact');
    p1.innerHTML = '<h2>Scott Hargan</h2><br>Owner<br>scott.hargan@ssb.com';
    p1.style.width = '50%';
    p1.style.fontSize = '2.0rem';
    p1.style.padding = '25px';
    p1.style.marginBottom = '50px';
    p1.style.borderRadius = '25% 25%';
    p1.style.border = '2px solid white';
    p1.style.backgroundColor = 'rgba(255, 127, 80, 0.9)';

    const p2 = createElement('div1', 'p', 'contact');
    p2.innerHTML = '<h2>Travis Todd</h2><br>Chef<br>travis.todd@ssb.com';
    p2.style.width = '50%';
    p2.style.fontSize = '2.0rem';
    p2.style.padding = '25px';
    p2.style.marginBottom = '50px';
    p2.style.borderRadius = '25% 25%';
    p2.style.border = '2px solid white';
    p2.style.backgroundColor = 'rgba(255, 127, 80, 0.9)';

    const p3 = createElement('div1', 'p', 'contact');
    p3.innerHTML = '<h2>Yahtez</h2><br>Manager<br>yahtez@ssb.com';
    p3.style.width = '50%';
    p3.style.fontSize = '2.0rem';
    p3.style.padding = '25px';
    p3.style.marginBottom = '50px';
    p3.style.borderRadius = '25% 25%';
    p3.style.border = '2px solid white';
    p3.style.backgroundColor = 'rgba(255, 127, 80, 0.9)';

    const p4 = createElement('div1', 'p', 'contact');
    p4.innerHTML = '<h2>DC</h2><br>Security<br>dc@ssb.com';
    p4.style.width = '50%';
    p4.style.fontSize = '2.0rem';
    p4.style.padding = '25px';
    p4.style.marginBottom = '50px';
    p4.style.borderRadius = '25% 25%';
    p4.style.border = '2px solid white';
    p4.style.backgroundColor = 'rgba(255, 127, 80, 0.9)';

    const h1Elements = document.querySelectorAll('h2');
    h1Elements.forEach(element => {
        element.style.fontSize = '3.0rem'
    })

    // const arrContact = [];
    // arrContact.push(document.getElementsByClassName('contact'));
    // arrContact.forEach(element => {
    //     element.style.fontSize = '2.0rem';
    // });
}