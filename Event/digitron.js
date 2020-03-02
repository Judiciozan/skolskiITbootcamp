let x = 0;
let y = 0;
let z = 0;
let op = "";

let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8');
let b9 = document.getElementById('b9');

b1.addEventListener('click', () =>{
    if(x == 0) {
        x = 1;
    } else {
        y = 1;
    }
});

b2.addEventListener('click', () =>{
    if(x == 0) {
        x = 2;
    } else {
        y = 2;
    }
});

let s = document.getElementById('sabiranje');
s.addEventListener('click', () => {
    op = '+';
});

let jednako = dokument.getElementById('jednako');
jednako.addEventListener("click", () => {
    switch(op) {
        case "+":
            rez = x + y;
            break;
        case "-":
            rez = x - y;
            break;
        case "+":
            rez = x * y;
            break;
        case "+":
            rez = x / y;
            break;
    }
    let paragraf = document.getElementById('rezultat');
    paragraf.innerText = rez;
});

