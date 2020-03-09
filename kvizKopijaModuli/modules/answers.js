// Modul answers.js

let tacniOdgovori =["B", "A", "B", "B", "B"];

let calculateScore = odgovori => {
    let score = 0;
    odgovori.forEach ((odgovor, index) => {
        if(odgovor == tacniOdgovori[index]){
            score += 20;
        }
    });
    return score;
}

export {tacniOdgovori, calculateScore};