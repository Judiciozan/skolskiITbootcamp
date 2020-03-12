import {Knjiga} from "./knjiga.js";

let k1 = new Knjiga("Na Drini ćuprija", "Ivo Andric", 2003, 1300, 44430);
k1.stampaj();
let k2 = new Knjiga ("Orlovi rano lete", "Branko Copic", 2006, 185, 430);
k2.stampaj();
console.log(k1.obimna());

if (k1.obimna()) {
    console.log("Knjiga je obimna");
}
else {
    console.log('Knjiga nije obimna');
}
console.log(k1.skupa());
let k3 = new Knjiga ("Ana Karenjina", "Lav Tolstoj", 1996, 1200, 8300);

let a = "5.9" ;
let b = "6";
let rez = +a + +b;


console.log(rez);
let nizKnjiga = [k1, k2, k3];

nizKnjiga.forEach (elem => {
    elem.stampaj();
});
console.log("Skupe i obimne knjige");
nizKnjiga.forEach(elem =>{
    if(elem.skupa() && elem.obimna()){
        elem.stampaj();
    }
});

let ukupnaCena = (niz) => {
    let ukupno = 0;
    niz.forEach(elem => {
       ukupno += elem.cena;
    });
    return ukupno;
}

console.log(`Ukupna cena je: ${ukupnaCena(nizKnjiga)}`);

let prosecnaCena = niz => ukupnaCena(niz) / niz.length;

console.log(`Prosecna cena knjiga je: ${prosecnaCena(nizKnjiga)}`);
let ukupnoStranica = niz => {
    let ukupno = 0;
    niz.forEach(elem => {
        ukupno += elem.brojStrana;
    });
    return ukupno;
}

let prosecnaStranica = niz => ukupnaCena(niz) / ukupnoStranica(niz);

console.log(`Prosecna cena po stranici svih knjiga je: ${prosecnaStranica(nizKnjiga)}`);