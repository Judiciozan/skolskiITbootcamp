let cars = ["Toyota", "BMW", "Opel"] ;
console.log (cars);
console.log(cars[0]);
console.log(cars[2]);

// Niz od n elemenata
// Indeksi su: 0, 1, 2..., n-1

cars[1] = "Ford";
console.log(cars);

let test = [6.03, "sreda", false]
console.log(test);


// Ispis svih elemenata niza
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
for (let i = 0; i <= cars.length - 1 ; i++) {
    console.log(cars[i]);
}

// Ispis svih elemenata u obrnutom redosledu

for (let i = cars.length - 1 ; i >= 0; i--) {
    console.log(cars[i]);
}

let niz = [2, 4, -9, 0, -12, 98, 23];

// odrediti sumu elemenata celobrojnog niza

let suma = 0;

for (let i = 0; i < niz.length; i++) {
    suma += niz[i];
}
console.log(suma);

// Odrediti proizvod elemenata celobrojnog niza

let pro = 1; 

for (let i = 0; i < niz.length; i++) {
    pro*= niz[i];    
}
console.log(pro);

// Odrediti srednju vrednost elemenata celobrojnog niza 

suma = 0;

for (let i = 0; i < niz.length; i++) {
    suma += niz[i];
}
let arsr;
if (niz.length == 0) {
    srvr = 0;
} 
else {
    arsr = suma / niz.length;
}
console.log (arsr);

// Odrediti maksimalnu vrednost u celobrojnom nizu.

let max = niz[0];

for (let i = niz[1]; i < niz.length; i++){
    if ( niz[i] > max) {
        max = niz[i];
        
    }
}
console.log (max); 

// Odrediti minimalnu vrednost u celobrojnom nizu

let min = niz[0];

for (let i = niz[1]; i < niz.length; i++){
    if ( niz[i] < min) {
        min = niz[i];
        
    }
}
console.log (min);

// Napisati arrow funkciju koja vraca minimalni element niza

let minArrow = niz => {
    let min = niz[0];

    for (let i = 1; i < niz.length; i++){
        if ( niz[i] < min) {
            min = niz[i];
            
        }
    } 
    return min;
}
console.log (minArrow(niz));

// Odrediti indeks maskimalnog elementa celobrojnog niza

let maxIndex = niz => {
    let max = niz[0];
    let index = 0;

    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max) {
            max = niz[i];
            index = i;
        }
    }
    return index ;
}

console.log(maxIndex(niz));

// Napisati arrow funkcijju koja vraca broj elemenata koja vraca broj
// elemenata celobrojnog niza  koji su veci od srednje vrednosti niza.
let arSr = niz => {
    let suma = 0 ;
    for (let i = 0; i < niz.length; i++){
        suma += niz[i];
    }
    return suma / niz.length;
}

let brojSrVr = niz => {
    let srvr = arSr(niz);
    let broj = 0;
    for (let i = 0; i < niz.length; i++){
        if (niz[i] > srvr) {
            broj++;
        }
    }
    return broj;
}

console.log(brojSrVr(niz));


// Izracunati zbir pozitivnih elemenata celobrojnog niza
let zbirPoz = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > 0){
            suma += niz[i];
        }
    }
    return suma;
}

console.log(zbirPoz(niz));

// Odrediti broj parnih elemenata u celobrojnom nizu

let brPar = niz => {
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {
            br++;
        }
    }
    return br;
}
console.log (brPar(niz));

// Odrediti broj parnih elemenata sa neparnim indeksom

let brParNepInd = niz => {
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0 && i % 2 != 0) {
            br++;
        }
    }
    return br;
}

console.log(brParNepInd(niz));

//  promeni znak svakom elementu celobrojnog niza

let promeniZnak = niz => {
    for (i = 0; i < niz.length; i++){
        niz[i] *= -1;
    }
}

console.log(niz);
promeniZnak(niz);
console.log(niz);

// 16. Formirati ul listu

let lista = niz => {
    // Elementi niza su stringovi
    let result = "";
    result +="<ul>";
    for ( let i = 0; i < niz.length; i++) {
        result += `<li>${niz[i]}</li>`;
    }
    result += "</ul>";
    return result;
}
let div = document.getElementById('blabla');
div.innerHTML = lista(["Jaja", "Mleko", "Jogurt"]);

// 17. zadatak

let nizTimova = ["Tim A", "Tim BBC", "Tim"];


/* <table>
        <tr><td> Tim A </td></tr>
        <tr><td> Tim B </td></tr>
        <tr><td> Tim C </td></tr>
    </table>
*/

let tabela = "<table><tr>";

for (let i = 0; i < nizTimova.length; i++) {
    tabela += `<td> ${nizTimova[i]}</td>` ;
}
tabela += "</tr></table>";
let divTabela = document.getElementById('tabela');
divTabela.innerHTML = tabela;

// 18. zadatak 

let nizSlika = ["0.png", "1.png", "2.png"];
let slike = "";

for (let i = 0; i < nizSlika.length; i++) {
    slike += `<img src="${nizSlika[i]}" alt="blabla">`;
}

div = document.getElementById('slike');
div.innerHTML = slike;

// 19.zadatak 

let  str = "Hello world";

// Duzina stringa 
console.log(str.length);

// Da li string sadrzi neki karakter  - INCLUDES

console.log(str.includes("w"));

if (str.includes("o")) {
    console.log ("String sadrzi slovo o");
}
else {
    console.log ("String ne sadrzi slovo o");
}

// Da li sadrzi karakter na odredjenoj poziciji
console.log(str.includes("H", 0));

// Prvi indeks unetog slova = indexOf
console.log(str.indexOf("l"));

// Poslednji indeks unetog slova = lastIndexOf
console.log(str.lastIndexOf("l"));

// Prvo slovo reci = startsWith
console.log (str.startsWith("H"));

// Poslednje slovo reci = endsWith
console.log (str.endsWith("m"));

// slice - odakle poceti podstring, gde zavrsiti podstring
console.log(str.slice(0,5));

// substr - odakle uzeti posatring, koliko elemenata od te pozicije na dalje uzeti
console.log(str.substr(3,5));

// replace
console.log(str.replace("l", "*"));

console.log(str.split("l").join("*"));

// 19. zadatak
for (let i = 0; i < nizTimova.length; i++) {
    let duzReci = nizTimova[i].length;
    console.log(duzReci);
}

// 20.
let najduzaRec = nizTimova => {
    let maks = nizTimova[0].length;
    let maksRec = nizTimova[0];
    for (let i = 1; i < nizTimova.length; i++) {
        if (maks < nizTimova[i].length) {
            maks = nizTimova[i].length;
            maksRec = nizTimova[i];
        }
    }
    return maksRec;
}

console.log(najduzaRec(nizTimova));

// Prosecna duzina stringova 

let prosecnaDuzina = niz => {
    let duzina = 0;
    for ( let i = 0; i < niz.length; i++){
        duzina += niz[i].length;
    }
    return duzina / niz.length;
}

console.log(prosecnaDuzina(nizTimova));
console.log(prosecnaDuzina(cars));

// 20. Ispisati natprosecno dugacke reci

let natprosecnoDugacke = niz => {
    let prosek = prosecnaDuzina(niz);
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].length > prosek) {
            console.log(niz[i]);
        }
    }
}
natprosecnoDugacke(nizTimova);
natprosecnoDugacke(cars);

//21. brojnatprosecno dugacke reci
let brNatProDug = niz => {
    let prosek = prosecnaDuzina(niz);
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].length > prosek) {
            br++;
        }
    }
    return br;
}

console.log(brNatProDug(nizTimova));
console.log(brNatProDug(cars));


// 21. Odrediti broj elemenata u nizu stringova koji sadrze slovo "a"

let brojElemenataSaKarakterom = (niz, slovo) => {
    let br = 0;
    for (let i = 0; i < niz.length; i++){
        if (niz[i].includes(slovo)) {
            br++;
        }
    }
    return br;
}

console.log (brojElemenataSaKarakterom(nizTimova, "T"));

// 22. Odrediti broj elemenata koji pocinju slovom 

let brojElemenataKojiPocinjuSlovom = (niz, slovo) => {
    let br = 0;
    for (let i = 0; i < niz.length; i++){
        // slovo.toUpperCase () - za pretvaranje slova u veliko slovo
        // slovo.toLowerCase () - za pretvaranje slova u malo slovo.
        if (niz[i].startsWith(slovo.toUpperCase()) || niz[i].startsWith(slovo.toLowerCase())) {
            br++;
        }
    }
    return br;
}

console.log(brojElemenataKojiPocinjuSlovom(nizTimova, "T"));
console.log(brojElemenataKojiPocinjuSlovom(nizTimova, "t"));
console.log(brojElemenataKojiPocinjuSlovom(nizTimova, "p"));

let proba = (niz, slovo) => {
    let br = 0;
    for (let i = 0; i < niz.length; i++){
        if (niz[i].slice(0, 1).toLowerCase() == slovo.toLowerCase()) {
            br++;
        }
    }
    return br;
}
console.log(proba(nizTimova, "t"));


// 24. zadatak

let a = [2, 5, 7];
let b = ["a", "b", "c"];
let c = [];


for(let i = 0; i < a.length; i++) {
    c.push(a[i]);
    c.push(b[i]);
}

console.log(c);
console.log(c.pop());
console.log(c);

// 25. zadatak 

let d = [-3, -6, 29];

let proizvodElemenata = (a,b) => {
    let c =[]; 
    for (let i = 0; i < b.length; i++) {
        c.push(a[i]*b[i]);
    }   
    return c;
}

console.log(proizvodElemenata(a, d));

// 26. zadatak 
a = [ 2, 4, 6, 8, 10, 12];
b = [];
let n = a.length / 2;
for ( let i = 0; i < n; i++) {
    i_pom = a.length - 1 - i;
    b.push((a[i] + a[i_pom]) / 2);
}
console.log(b);