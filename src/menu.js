import { addImage, createElement, createMultipleElements, styleMainContainer, styleText } from "./index.js";
import background from './images/timber-interior-texture.jpg';
import sushi0 from './images/sushi-154528.svg';

import sushi1 from './images/board-1295877.svg';
import sushi2 from './images/sushi-154590.svg';
import sushi3 from './images/culture-1295879.svg';
import sushi4 from './images/steak-8184606.svg';
import sushi5 from './images/bread-1296280.svg';
import sushi6 from './images/ai-generated-8131440.svg';
import sushi7 from './images/ai-generated-8184591.svg'; 
import sushi8 from './images/ai-generated-8995594.svg'; 
import sushi9 from './images/food-576547.svg'; 
import sushi10 from './images/food-576600.svg'; 
import sushi11 from './images/bananas-146688.svg'; 
import sushi12 from './images/bread-1300348.svg'; 
import sushi13 from './images/fruit-575762.svg'; 
import sushi14 from './images/mushroom-7882746.svg'; 

export function createMenuDom () {
    const container = createElement('content', 'div');
    container.setAttribute('id', 'div1');
    //parameter order: variable, width, height, opacity, display, justifySelf, flexDirection, flexValue, position, alignItems
    styleMainContainer(container, '90%', '100%', '1', 'flex', 'center', 'column', '1 0 80%', 'relative', 'center');
    container.style.justifyContent = 'center';


    const header = createElement('div1', 'h1');
    header.textContent = 'Menu';
    header.style.fontSize = '5.5rem';
    header.style.textAlign = 'center';
    header.style.width = '40%';
    header.style.backgroundImage = `url(${background})`;
    header.style.border = '2px solid rgba(255, 127, 80';
    header.style.borderRadius = '35%';
    header.style.marginBottom = '50px';

    const menuContainer = createElement('div1', 'div');
    menuContainer.setAttribute('id', 'menuContainer')
    menuContainer.style.display = 'grid';
    menuContainer.style.gridTemplate = 'repeat(5, 1fr) / repeat(3, 1fr)';
    menuContainer.style.gap = '40px';

    const imgArr = [];
    imgArr.unshift(sushi0, sushi1, sushi2, sushi3, sushi4, sushi5, sushi6, sushi7, sushi8, sushi9, sushi10, sushi11, sushi12, sushi13, sushi14);

    //parameter order parentID, numberOf Elememnts, class, OwnID
    const menuDivs = createMultipleElements('menuContainer', 15, 'div', 'menuDiv');
    let addNum = 0;
    let i = 0;
    menuDivs.forEach(element => {
        let divId = 'sushi' + addNum;
        let imgDivId = 'imgDiv' + addNum++;
        element.setAttribute('id', divId);
        element.style.display = 'grid';
        element.gridTemplate = '1fr, 1fr / 1fr';
        element.style.fontSize = '5rem';
        element.style.borderRadius = '25% 25%';
        element.style.border = '2px solid white';
        element.style.padding = '15px';
         element.style.width = '300px';
         element.style.height = '300px';
         element.style.backgroundColor = 'rgba(255, 127, 80, 0.9)';
         const img = addImage(divId, imgArr[i], 'sushiImg', 'imgDiv', imgDivId, 'imgCaption');
         i++;
    });

    const p0 = document.getElementById('sushi0').lastChild.innerHTML = '- Salmon Tataki $14.99';
    const p1 = document.getElementById('sushi1').lastChild.innerHTML = '- Sushi Sampler $19.99';
    const p2 = document.getElementById('sushi2').lastChild.innerHTML = '- Nanbanzuke $39.99';
    const p3 = document.getElementById('sushi3').lastChild.innerHTML = '- Authentic Yakisoba $25.99';
    const p4 = document.getElementById('sushi4').lastChild.innerHTML = '- Steak "Grassfed" $420.69';
    const p5 = document.getElementById('sushi5').lastChild.innerHTML = '- Biryani <br>$22.99';
    const p6 = document.getElementById('sushi6').lastChild.innerHTML = '- Tonkatsu <br>$9.99';
    const p7 = document.getElementById('sushi7').lastChild.innerHTML = '- Yakisoba Chicken $16.99';
    const p8 = document.getElementById('sushi8').lastChild.innerHTML = '- Coffee & Oranges $5.99';
    const p9 = document.getElementById('sushi9').lastChild.innerHTML = '- Ebi No Umani $14.99';
    const p10 = document.getElementById('sushi10').lastChild.innerHTML = '- Chops & Tatters $12.99';
    const p11 = document.getElementById('sushi11').lastChild.innerHTML = '- Michael Labuda $2.99';
    const p12 = document.getElementById('sushi12').lastChild.innerHTML = '- Toast <br>$0.99 (per slice)';
    const p13 = document.getElementById('sushi13').lastChild.innerHTML = '- Vegan Bowl <br>$4.99';
    const p14 = document.getElementById('sushi14').lastChild.innerHTML = '- Magic Mushrooms Free';

   
}

