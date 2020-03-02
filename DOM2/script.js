let par =document.querySelector('p');
console.log(par.parentElement);
console.log(par.parentElement.parentElement);

console.log(par.parentElement.children);
console.log(par.nextElementSibling);
console.log(par.previousElementSibling);
console.log(par.parentElement.nextElementSibling.children[1]);
let div = par.parentElement;
let decaDiva = div.children; //kolekcija
for (let i = 0; i < decaDiva.length; i++) {
    console.log (decaDiva[i]);
}


console.log('bla');
// Skraceno: 
for(let i = 0; i < par.parentElement.children.length; i++){
    console.log(par.parentElement.children[i]);
}

let niz = Array.from(par.parentElement.children);
niz.forEach(elem => {
    console.log(elem);
});

let link = document.querySelector('a');
console.log(link.getAttribute('href'));

// ako vrednost atributa vec postoji, ona se menja
// ako ne postoji, ona se postavlja
link.setAttribute('id', "link1");
link.setAttribute('href', "https://www.wikipedia.org/");
link.innerText = "Wikipedia";
console.log(link);



// Vezbanje 
// 1. zadatak

let linkovi = document.querySelectorAll('a');
for(i = 0; i < linkovi.length; i++){
    linkovi[i].setAttribute("target", "_blank");
};

// 2.zadatak
let slike = document.querySelectorAll("img");
slike.forEach(elem => {
    elem.setAttribute("alt", "slikaVezba");
});

// 3. 
let paragrafi = document.querySelectorAll("p");

paragrafi.forEach(elem => {
    elem.setAttribute('style', "color : purple");
});

// 4.

paragrafi.forEach((elem,i) => {
    if (i % 2 == 0){
        //elem.setAttribute('style', "background-color : green");
        elem.style.backgroundColor = "grey";
        elem.style.padding = '10px';
        console.log(par.style);
    }
    else {
       // elem.setAttribute('style', "background-color : red");
       elem.style.backgroundColor = "yellow";
    }
});

linkovi.forEach( (elem, i) => {
    elem.style.margin =  "5px";
    elem.style.fontSize =  "18px";
    elem.style.textDecoration =  "none";
    if (i % 2 == 0) {
        elem.style.backgroundColor ="green";
        elem.style.color ="purple";
    }
    else {
        elem.style.backgroundColor ="blue";
        elem.style.color ="white";
    }
});

par.classList.add("error");
console.log(par.classList);
par.classList.remove("error");
console.log(par.classList);
par.classList.toggle("error");
console.log(par.classList);

// 
paragrafi.forEach((elem, i) => {
    if(i % 3 == 0) {
        elem.style.fontSize = "15px";
    } else if(i % 3 == 1){
        elem.style.fontSize = "20px";
    } else {
        elem.style.fontSize = "25px";
    }
});

// 
paragrafi.forEach ( elem => {
    if(elem.textContent.includes("Success")){
        elem.classList.add("success");
    } else if (elem.textContent.includes("Error")) {
        elem.classList.add('error');
    }
});

//  Dodati novi div tag elementu 
let div1 = document.createElement('div');
div1.innerText = 'Pridodati div';
document.body.appendChild(div1);

// formirati ul listu sa stavkama ciji je sadrzaj proizvoljan tekst i dodati div elementu.
let lista1 = document.createElement('ul');
let li1 = document.createElement('li');
li1.innerText = "Prvi item";
let li2 = document.createElement('li');
li2.innerText = "Drugi item";
let li3 = document.createElement('li');
li3.innerText = "Treci item";


let divLista = document.getElementById('lista');

divLista.appendChild(lista1);

lista1.appendChild(li1);
lista1.appendChild(li2);
lista1.appendChild(li3);

/*
// iz ul liste izbaciti prvu stavku
lista1.removeChild(lista1.firstChild);
lista1.removeChild(lista1.childNodes[0]);
// poslednju stavku
lista1.removeChild(lista1.lastChild);
*/

let liPom = document.createElement('li');
liPom.innerText = "*****";
lista1.replaceChild(liPom, lista1.children[1]);