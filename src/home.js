import { createElement } from "./index.js";
import { styleText } from "./index.js";
import background from './images/timber-interior-texture.jpg';

export function createHomeDom () {
    const container = createElement('content', 'div');
    container.setAttribute('id', 'div1');
    const header = createElement('div1', 'h1');
    const p1 = createElement('div1', 'p');
    const ul = createElement('div1', 'ul');
    ul.setAttribute('id', 'ul1');
    const sun = createElement('ul1', 'li');
    const mon = createElement('ul1', 'li');
    const tue = createElement('ul1', 'li');
    const wed = createElement('ul1', 'li');
    const thu = createElement('ul1', 'li');
    const fri = createElement('ul1', 'li');
    const sat = createElement('ul1', 'li');
    container.style.width = '900px';
    container.style.height = '1000px';
    container.style.opacity = '1';
    container.style.display = 'flex';
    container.style.justifySelf = 'center';
    container.style.flexDirection = 'column';
    container.style.flex = '1 0 80%';
    container.position = 'relative';
    container.style.alignItems = 'center';
    header.textContent = 'Scotty\'s Sushi Bar';
    header.style.fontSize = '5.5rem';
    header.style.textAlign = 'center';
    header.style.width = '75%';
    header.style.backgroundImage = `url(${background})`;
    header.style.borderRadius = '35%';
    header.style.marginBottom = '50px';
    p1.textContent = 'Scotty\'s offers the best Sushi you will ever put on your tongue. Not to mention the vibes are out of this world dawg. Come in, grab a seat and get to munchin!!!';
    p1.style.width = '50%';
    p1.style.fontSize = '2.0rem';
    p1.style.padding = '10px';
    p1.style.backgroundImage = `url(${background})`;
    p1.style.marginBottom = '50px';
    ul.style.listStyleType = 'none';
    ul.style.backgroundImage = `url(${background})`;
    ul.style.alignItems = 'center';
    styleText(sun, '2.0rem', 'Sunday: 11am - 8pm', 'center');
    styleText(mon, '2.0rem', 'Monday: 1pm - 2am', 'center');
    styleText(tue, '2.0rem', 'Tuesday: 1pm - 2am', 'center');
    styleText(wed, '2.0rem', 'Wednesday: 1pm - 2am', 'center');
    styleText(thu, '2.0rem', 'Thursday: 1pm - 2am', 'center');
    styleText(fri, '2.0rem', 'Friday: 1pm - 3am', 'center');
    styleText(sat, '2.0rem', 'Saturday: 1pm - 3am', 'center');
}



