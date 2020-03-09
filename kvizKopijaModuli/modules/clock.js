// Modul clock.js


let generateScore = (h2, score) => {
    let broj = 0;
    let clock = setInterval(() => {
        if ( broj < score){
            broj++;
            h2.textContent =`Vas odgovor je: ${broj}%`;
            
        }
        else {
            clearInterval(clock);
        }
    }, 100);
}

export default generateScore;