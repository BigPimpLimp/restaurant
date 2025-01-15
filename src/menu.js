import { addImage, createElement, createMultipleElements, styleMainContainer } from "./index.js";
import background from './images/timber-interior-texture.jpg';
import sushi0 from './images/pexels-valeriya-1028425.jpg';

import sushi1 from './images/pexels-nadin-sh-78971847-13452095.jpg';
import sushi2 from './images/pexels-cottonbro-5900504.jpg';
import sushi3 from './images/pexels-valeriya-11213769.jpg';
import sushi4 from './images/pexels-valeriya-1199973.jpg';
import sushi5 from './images/pexels-valeriya-1199979.jpg';
import sushi6 from './images/pexels-viniciusbenedit-3620705.jpg';
import sushi7 from './images/pexels-cottonbro-5900774.jpg'; 
import sushi8 from './images/pexels-cottonbro-5900883.jpg'; 
import sushi9 from './images/pexels-ivan-samkov-8951295.jpg'; 
import sushi10 from './images/pexels-kei-scampa-1201427-9882309.jpg'; 
import sushi11 from './images/pexels-valeriya-14457635.jpg'; 
import sushi12 from './images/pexels-valeriya-1893562.jpg'; 
import sushi13 from './images/pexels-viniciusbenedit-3620705.jpg'; 
import sushi14 from './images/pexels-valeriya-1028429.jpg'; 

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
    menuContainer.style.justifyContent = 'center';
    menuContainer.style.width = '100%';
    menuContainer.style.alignItems = 'center';
    menuContainer.style.gap = '25px';

    const imgArr = [];
    imgArr.unshift(sushi0, sushi1, sushi2, sushi3, sushi4, sushi5, sushi6, sushi7, sushi8, sushi9, sushi10, sushi11, sushi12, sushi13, sushi14);

    //parameter order parentID, numberOf Elememnts, class, OwnID
    const menuDivs = createMultipleElements('menuContainer', 15, 'div', 'menuDiv');
    let addNum = 0;
    let i = 0;
    menuDivs.forEach(element => {
        let divId = 'sushi' + addNum++;
        element.setAttribute('id', divId);
        element.style.fontSize = '5rem';
        element.textContent = 'test';
         element.style.width = '400px';
         element.style.height = '400px';
         element.style.backgroundColor = 'blue';
         const img = addImage(divId, imgArr[i], menuDivs[i], 'sushiImg');

         i++;
    });

    // const sushiImg0 = addImage('sushi0', sushi0, menuDivs[0], 'sushiImg');
    const sushiImg1 = addImage('sushi1', sushi1, menuDivs[1], 'sushiImg');
    // const sushiImg2 = addImage('sushi0', sushi0, menuDivs[0], 'sushiImg');
    // const sushiImg3 = addImage('sushi0', sushi0, menuDivs[0], 'sushiImg');
    // const sushiImg4 = addImage('sushi0', sushi0, menuDivs[0], 'sushiImg');
    // const sushiImg5 = addImage('sushi0', sushi0, menuDivs[0], 'sushiImg');
    // const sushiImg6 = addImage('sushi0', sushi0, menuDivs[0], 'sushiImg');

    
    
    // const sushiImg1 = createElement('sushi1', 'img');
    // addImage(sushiImg1, sushi1, menuDivs, 1)

    // const sushiImg2 = createElement('sushi0', 'img');
    // sushiImg2.src = sushi2;
    // sushiImg2.setAttribute('class', 'sushiImg');
    // menuDivs[2].appendChild(sushiImg2);

    // const sushiImg3 = createElement('sushi0', 'img');
    // sushiImg0.src = sushi3;
    // sushiImg0.setAttribute('class', 'sushiImg');
    // menuDivs[0].appendChild(sushiImg0);

    // const sushiImg4 = createElement('sushi0', 'img');
    // sushiImg4.src = sushi4;
    // sushiImg4.setAttribute('class', 'sushiImg');
    // menuDivs[0].appendChild(sushiImg4);

    // const sushiImg5 = createElement('sushi0', 'img');
    // sushiImg5.src = sushi5;
    // sushiImg5.setAttribute('class', 'sushiImg');
    // menuDivs[0].appendChild(sushiImg5);

    // const sushiImg6 = createElement('sushi0', 'img');
    // sushiImg6.src = sushi6;
    // sushiImg6.setAttribute('class', 'sushiImg');
    // menuDivs[0].appendChild(sushiImg6);

}

