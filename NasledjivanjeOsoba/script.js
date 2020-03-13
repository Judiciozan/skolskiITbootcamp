import { Osoba } from "./modules/osoba.js";
import { Zaposleni } from "./modules/zaposleni.js";
import { Sportista } from "./modules/sportista.js";
import { Kosarkas } from "./modules/kosarkas.js";

let o1 = new Osoba("Aleksandar", "Petrovic", 28);
o1.ispisiOsobu();

let z1 = new Zaposleni("Pera", "Peric", 1976, 54000, "ekonomista");
z1.ispisiZaposlenog();
z1.ekonomista();
let z2 = new Zaposleni("Mika", "Mikic", 1990, 50000, "ucitelj");
z2.ekonomista();

let radnici = [z1, z2];

let prosecnaPlata = niz => {
    let s = 0;
    niz.forEach(elem => {
        s += elem.plata;
    });

    return s / niz.length;
}
console.log(prosecnaPlata(radnici));
console.log(z1.natprosecnaPlata(prosecnaPlata(radnici)));

let s1 = new Sportista ("Laza", "Lazic", 1990, "Beograd");
s1.ispisiSportistu();
let k1 = new Kosarkas("Vlade", "Divac", 1968, "Prijepolje", [24, 36, 40, 12, 21, 30]);
let k2 = new Kosarkas("Pedja", "Stojakovic", 1977, "Pozega", [20, 12, 10, 25, 50]);
let k3 = new Kosarkas("Nikola", "Jokic", 1995, "Sombor", [40, 30, 27, 10]);

let kosarkasi = [k3, k2, k1];

let najviseUtakmica = niz => {
    let naj = niz[0];
    niz.forEach(elem => {
        if(elem.poeni.length > naj.poeni.length) {
            naj = elem;
        }
    });
    return naj;
}
najviseUtakmica(kosarkasi).ispisiKosarkasa();

let najvisePoena = niz => {
    let max  = niz[0].poeni[0];
    let maxKos = niz[0];
    niz.forEach( elem => {
        elem.poeni.forEach(p => {
            if(p > max) {
                max = p;
                maxKos = elem;
            }
        });
    });
    return maxKos;
}
najvisePoena(kosarkasi).ispisiKosarkasa();