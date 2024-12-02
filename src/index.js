// index.js
console.log('Yerttt');


import "./styles.css";
import { greeting, createDom } from "./home.js";
console.log(greeting);


(function switchPage () {
    const homeButton = document.getElementById('home-button');
    const menuButton = document.getElementById('menu-button');
    const aboutButton = document.getElementById('about-button');
    
    const wipeDiv = (divId) => {
        const div = document.getElementById(divId)
        while(div.firstChild) {
            div.removeChild(div.firstChild);
        }
    }

    homeButton.addEventListener(click, () => {
        wipeDiv('content');
    })
    
    menuButton.addEventListener(click, () => {
        wipeDiv('content');
    })
    
    aboutButton.addEventListener(click, () => {
        wipeDiv('content');
    })
})();