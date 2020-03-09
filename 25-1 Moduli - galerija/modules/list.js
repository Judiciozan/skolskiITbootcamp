//U modulu list.js exportovati funkcije:
    //-generateList(parent), koja formira ul listu i dodaje je na parent element,
    //-generateListItem(parent, src), koja formira stavku liste čiji je sadržaj slika na zadatoj putanji, i dodaje je na parent element.

//import {generateImage} from "./general.js";
import generateImage from './general.js';
let generateList = parent => {
    let ul = document.createElement('ul');
    ul.style.listStyleType = 'none';
    parent.appendChild(ul);
    return ul;
};

let generateItem = (parent, src) => {
    let li = document.createElement('li');
    li.style.float = 'left';
    let img = generateImage(src);
    li.appendChild(img);
    parent.appendChild(li);
};

export {generateList, generateItem};
