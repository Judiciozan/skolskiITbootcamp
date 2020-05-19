let btn = document.querySelectorAll('.broj');
let operacija = document.querySelectorAll('.operacija');
let x = 0;
let y = 0;
let z = 0;
let op = "";
let rez = 0;
let jednako = document.getElementById('jednako');

let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8');
let b9 = document.getElementById('b9');

operacija.forEach(elem => {
    elem.addEventListener('click', () => {
        op = elem.textContent;
    });
});

btn.forEach(elem => {
    elem.addEventListener('click', () => {
       if(x == 0){
           x = elem.textContent;
       }
       else {
           y = elem.textContent;
       }
        console.log(x, y);
    });
});
 
x = parseInt(x);
y = parseInt(y);

jednako.addEventListener("click", () => {
    switch(op) {
        case "+":
            rez = x + y;
            break;
        case "-":
            rez = x - y;
            break;
        case "*":
            rez = x * y;
            break;
        case "/":
            rez = x / y;
            break;
    }
    let paragraf = document.getElementById('bla');
    paragraf.innerText = rez;
    x = 0;
    y = 0;
    rez =0;
});

