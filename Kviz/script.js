let form = document.querySelector("form");
let tacniOdgovori =["B", "A", "B", "B", "B"];
let div = document.createElement('div');
div.classList.add("intro");
let text =document.createElement('div');
text.classList.add('text');
let h2 = document.createElement('h2');
text.appendChild(h2);
div.appendChild(text);

let referentChild = document.body.children[1];
document.body.insertBefore(div, referentChild);
div.style.display ='none';


form.addEventListener('submit', event => {
    event.preventDefault(); 
    //Potrebno je odrediti koji radio je selektovan
    // Generalni nacin
    /*
    let radios = document.querySelectorAll('.q1');
    radios.forEach(radio => {
        if(radio.checked){
            console.log(radio.value);
        }
    });*/
    // Za forme:
    // 1) U JS kodu - Objekat forme (promenljiva form)
    // 2) Svi elementi forme u HTML-u moraju da imaju name atribut
    let odg1 = form.q1.value;
    let odg2 = form.q2.value;
    let odg3 = form.q3.value;
    let odg4 = form.q4.value;
    let odg5 = form.q5.value.length;
    if (odg5 > 6) {
        odg5 = "B"
    }
    else {
        odg5 = "A"
    }

    
    console.log(odg1, odg2, odg3, odg4, odg5);
    let odgovori = [odg1, odg2, odg3, odg4, odg5];
    let score = 0;
    odgovori.forEach ((odgovor, index) => {
        if(odgovor == tacniOdgovori[index]){
            score += 20;
        }
    })
    console.log(score);
    div.style.display = 'block';
    //h2.textContent =`Vas odgovor je: ${score}%`
    scrollTo(0, 0);
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
});