// index.js
console.log('Yerttt');


import "./styles.css";
import { createHomeDom } from "./home.js";
import { createMenuDom } from "./menu.js";
import { createAboutDom } from "./about.js";

// Element created will append to id given
export function createElement (id, element, cssClass) {
    const content = document.getElementById(id);
    const container = document.createElement(element);
    content.appendChild(container);
    container.setAttribute('class', cssClass);
    return container;
}

//parameter order parentID, numberOf Elememnts, class, OwnID
export function createMultipleElements(parentID, numElem, element, cssClass) {
    let arr = [];
    for (let i = 0; i < numElem; i++) {
        arr.push(createElement(parentID, element, cssClass))
    } 
    return arr;
};

export function addImage(id, src, cssClass, divCssClass, imgDivId, imgTextClass) {
    let imgDiv = createElement(id, 'div', divCssClass);
    imgDiv.setAttribute('id', imgDivId);
    let imgText = createElement(id, 'p', imgTextClass);
    const img = createElement(imgDivId, 'img', cssClass);
    img.setAttribute('src', src);
    // arr.appendChild(imgDiv);
    // imgDiv.appendChild(img);
}

export function styleText(variable, fontSize, textContent, textAlign, cssClass) {
    variable.textContent = textContent;
    variable.style.fontSize = fontSize;
    variable.style.textAlign = textAlign; 
}

export function styleMainContainer(variable, width, height, opacity, display, justifySelf, flexDirection, flexValue, position, alignItems) {
    variable.style.width = width;
    variable.style.height = height;
    variable.style.opacity = opacity;
    variable.style.display = display;
    variable.style.justifySelf = justifySelf;
    variable.style.flexDirection = flexDirection;
    variable.style.flex = flexValue;
    variable.position = position;
    variable.style.alignItems = alignItems;
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