import { createElement, styleMainContainer, styleText } from "./index.js";
import background from './images/timber-interior-texture.jpg';

export function createHomeDom () {
    const container = createElement('content', 'div');
    container.setAttribute('id', 'div1');
    //parameter order: variable, width, height, opacity, display, justifySelf, flexDirection, flexValue, position, alignItems
    styleMainContainer(container, '900px', '1000px', '1', 'flex', 'center', 'column', '1 0 80%', 'relative', 'center');

    const header = createElement('div1', 'h1');
    header.textContent = 'Scotty\'s Sushi Bar';
    header.style.fontSize = '5.5rem';
    header.style.textAlign = 'center';
    header.style.width = '75%';
    header.style.backgroundImage = `url(${background})`;
    header.style.borderRadius = '35%';
    header.style.marginBottom = '50px';
    header.style.border = '2px solid rgba(255, 127, 80';

    const p1 = createElement('div1', 'p');
    p1.textContent = 'Scotty\'s offers the best Sushi you will ever put on your tongue. Not to mention the vibes are out of this world dawg. Come in, grab a seat and get to munchin!!! - GunwalK';
    p1.style.width = '50%';
    p1.style.fontSize = '2.0rem';
    p1.style.padding = '25px';
    p1.style.marginBottom = '50px';
    p1.style.borderRadius = '25% 25%';
    p1.style.border = '2px solid white';
    p1.style.backgroundColor = 'rgba(255, 127, 80, 0.9)';

    const hoursContainer = createElement('div1', 'div');
    hoursContainer.setAttribute('id', 'hoursContainer');
    hoursContainer.style.display = 'flex';
    hoursContainer.style.alignItems = 'center';
    hoursContainer.style.flexDirection = 'column';
    hoursContainer.style.width = '50%'
    hoursContainer.style.padding = '25px';
    hoursContainer.style.borderRadius = '25% 25%';
    hoursContainer.style.border = '2px solid white';
    hoursContainer.style.backgroundColor = 'rgba(255, 127, 80, 0.9)';

    const hoursHeader = createElement('hoursContainer', 'h3');
    hoursHeader.textContent = 'Hours';
    hoursHeader.style.marginBottom = '10px';
    hoursHeader.style.fontSize = '2.5rem';

    const ul = createElement('hoursContainer', 'ul');
    ul.setAttribute('id', 'ul1');
    ul.style.listStyleType = 'none';

    const sun = createElement('ul1', 'li', 'hours');
    const mon = createElement('ul1', 'li', 'hours');
    const tue = createElement('ul1', 'li', 'hours');
    const wed = createElement('ul1', 'li', 'hours');
    const thu = createElement('ul1', 'li', 'hours');
    const fri = createElement('ul1', 'li', 'hours');
    const sat = createElement('ul1', 'li', 'hours');
    styleText(sun, '2.0rem', 'Sunday: 11am - 8pm', 'center');
    styleText(mon, '2.0rem', 'Monday: 1pm - 2am', 'center');
    styleText(tue, '2.0rem', 'Tuesday: 1pm - 2am', 'center');
    styleText(wed, '2.0rem', 'Wednesday: 1pm - 2am', 'center');
    styleText(thu, '2.0rem', 'Thursday: 1pm - 2am', 'center');
    styleText(fri, '2.0rem', 'Friday: 1pm - 3am', 'center');
    styleText(sat, '2.0rem', 'Saturday: 1pm - 3am', 'center');
    const hours = document.querySelectorAll('.hours');
    hours.forEach(element => {
        element.style.marginBottom = '15px';
    })
}



