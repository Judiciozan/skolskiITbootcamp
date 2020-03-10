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

let film1 = new Film ("Prokletnici", "Kventin Tarantino", 2009 );
let film2 = new Film ("Ko to tamo peva", "Slobodan Sijan", 1980 );
let film3 = new Film ("Kum", "Frensis Ford Kopola", 1972 );

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
