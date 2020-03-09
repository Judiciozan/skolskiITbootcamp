import createDiv from "./modules/result_div.js";
import {tacniOdgovori, calculateScore} from "./modules/answers.js";
import generateScore from "./modules/clock.js";



let form = document.querySelector("form");


let [div,h2] = createDiv('intro', document.body, document.body.children[1]);


form.addEventListener('submit', event => {
    event.preventDefault(); 
    
    let odg1 = form.q1.value;
    let odg2 = form.q2.value;
    let odg3 = form.q3.value;
    let odg4 = form.q4.value;
    let odg5 = form.q5.value.length;
    if (odg5 > 6) {
        odg5 = "B";
    }
    else {
        odg5 = "A";
    }
    let odgovori = [odg1, odg2, odg3, odg4, odg5];
    let score = calculateScore(odgovori);
    console.log(score);
    div.style.display = 'block';
    scrollTo(0, 0);
    generateScore(h2, score);
    });