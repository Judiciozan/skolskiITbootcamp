import {Pacijent} from "./modules/pacijent.js";
import {Film} from "./modules/film.js";
import Auto from "./modules/auto.js";

let datum = new Date (); 
    // Date - ime klase  
    //new Date() - kreira objekat klase Date
    // let datum = new Date(); - promenljiva datum cuva objekat klase Date
console.log(datum.getDay());

let niz1 = [1, 2, 3];
let niz2 = new Array(1, 2, 3);
console.log(niz1, niz2);

let o1 = {
    ime : "Pera",
    godine : 25 
}
let o2 = new Object();
o2.ime = "Pera";
o2.godine = 25;
console.log(o1, o2);

// Klasa Auto 
// Unutar klasa i objekata : metode se pisu kao obicne funkcije
// NIKADA SE NE PISU KAO ARROW FUNKCIJUE

let auto1 = new Auto("Peugeot 208", "bele", false);
    // construktor("Peugeot 208", "bela", false)
    // auto1.marka = "Peugeot 208"
    // auto1.boja = "bela"
    // auto1.imaKrov = false
let auto2 = new Auto("Mazda CX-30", "crvene", true);
    // construktor("Mazda CX-30", "crvene", true)
    // auto2.marka = "Mazda CX-30"
    // auto2.boja = "crvene"
    // auto2.imaKrov = true
console.log(auto1.aMarka); 
console.log(auto1, auto2);
auto1.sviraj();
auto2.sviraj();

let film1 = new Film ("Prokletnici", "Kventin Tarantino", 2009, [8.8, 9, 8.2, 7.7] );
let film2 = new Film ("Ko to tamo peva", "Slobodan Sijan", 1980, [10, 10, 8.9, 9.7] );
let film3 = new Film ("Kum", "Frensis Ford Kopola", 1972, [8.2, 8.5, 9.6, 9.7] );

console.log(film1);
console.log(film2);
console.log(film3);
film1.stampaj();
film2.stampaj();
film3.stampaj();

let p1 = new Pacijent("Miki", 190, 250);
let p2 = new Pacijent("Danica", 177, 57);
let p3 = new Pacijent("Milica", 168, 62);

p1.Stampaj();
p2.Stampaj();
p3.Stampaj();
console.log(p1.Bmi());
console.log(p2.Bmi());
console.log(p1.Kritican());
console.log(p2.Kritican());
console.log(p3.Bmi());
console.log(p3.Kritican());

film1.aGodina = 1500;
console.log(film1.godinaIzdanja);

let pa1 = new Pacijent ("Ana", 173, 70);
let pa2 = new Pacijent ("Mira", 165, 55);
let pa3 = new Pacijent ("Mila", 176, 65);

let pacijenti = [pa1, pa2, pa3];

let najmanjaTezina = niz => {
    let min  = pacijenti[0].pTezina;
    let minPac = pacijenti[0];
    pacijenti.forEach(elem => {
        if (min > elem.pTezina){
            minPac = elem;
            min = elem.pTezina;
        }
    });
    return minPac.Stampaj();
}


najmanjaTezina(pacijenti);

let maksPac = pacijenti[0];
pacijenti.forEach(elem => {
    if(elem.Bmi() > maksPac.Bmi()) {
        maksPac = elem;
    }
});
maksPac.Stampaj();

let filmovi = [film1, film2, film3];

filmovi.forEach( elem => {
    elem.fOcene.forEach(o => {
        console.log(o);
    });
});
console.log(film1.prosecnaOcena());

let filmVek = (niz, odGod, doGod) => {
    niz.forEach(elem => {
        if(elem.godinaIzdanja >= odGod && elem.godinaIzdanja <= doGod){
            elem.stampaj();
        }
    });
}
filmVek(filmovi, 0, 2020);

let prosecnaOcenaSvih = (niz) => {
    let suma = 0;
    let brojOcena = 0; 
    niz.forEach( film => {
        let ocene = film.ocene;
        ocene.forEach( o => {
            suma += o;
            brojOcena++;
        });
    });
    return suma / brojOcena;
}

console.log(prosecnaOcenaSvih(filmovi));


let najboljeOcenjeni = (niz) => {
    let naj = niz[0];
    niz.forEach(film => {
        if(naj.prosecnaOcena() < film.prosecnaOcena()) {
            naj = film;
        }
    });
    return naj;
}
najboljeOcenjeni(filmovi).stampaj();

let osrednjiFilm = (niz) => {
    let najbliziElem = niz[0];
    let globalniProsek = prosecnaOcenaSvih(niz);
    let najbliziProsek = Math.abs(niz[0].prosecnaOcena() - globalniProsek);

    niz.forEach( elem => {
        if (Math.abs(elem.prosecnaOcena() - globalniProsek) < najbliziProsek){
            najbliziElem = elem;
            najbliziProsek = Math.abs(elem.prosecnaOcena() - globalniProsek);
        }
    });
    return najbliziElem;
}


osrednjiFilm(filmovi).stampaj();
console.log(film1.prosecnaOcena());
console.log(film2.prosecnaOcena());
console.log(film3.prosecnaOcena());

let oc = [1, 5, 7, 8.3, 4.001, 1, 10, 9, 9, 5, 5, 5];

let najcesca = oc[0];
let ponavljanje = 0;
let maxPonavljanja = 0;

for( let i = 0; i < oc.length; i++){
    for(let j = 0; j < oc.length; j++){
        if(oc[i]== oc[j]){
            ponavljanje++;
        }
    }
    if (ponavljanje > maxPonavljanja) {
        maxPonavljanja = ponavljanje;
        najcesca = oc[i];
    }
    ponavljanje = 0;
}
console.log(`Najfrekventija ocena je ${najcesca}`);