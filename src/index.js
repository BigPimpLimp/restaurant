// index.js
console.log('Yerttt');


import "./styles.css";
import { createHomeDom } from "./home.js";
import { createMenuDom } from "./menu.js";
import { createAboutDom } from "./about.js";

// Element created will append to id given
export function createElement (id, element) {
    const content = document.getElementById(id);
    const container = document.createElement(element);
    content.appendChild(container);
    return container;
}

export function styleText(variable, fontSize, textContent, textAlign) {
    variable.textContent = textContent;
    variable.style.fontSize = fontSize;
    variable.style.textAlign = textAlign; 
}

(function switchPage () {
    createHomeDom();
    const homeButton = document.getElementById('home-button');
    const menuButton = document.getElementById('menu-button');
    const aboutButton = document.getElementById('about-button');
    
    const wipeDiv = (divId) => {
        const div = document.getElementById(divId)
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
    }

    homeButton.addEventListener('click', () => {
        wipeDiv('content');
        createHomeDom();
    })
    
    menuButton.addEventListener('click', () => {
        wipeDiv('content');
        createMenuDom();
    })
    
    aboutButton.addEventListener('click', () => {
        wipeDiv('content');
        createAboutDom();
    })
})();