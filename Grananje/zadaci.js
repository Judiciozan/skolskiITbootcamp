let a = 5 ;
let b = 9 ;
let c = a ;

a = b ;
b = c ;

console.log (a, b);

//  Prvi zadatak

let poeni =  56 ;

if ( poeni <= 50) {
    console.log ("Student je pao ispit");
}
else if ( poeni <= 60 ) {
    console.log ("Student je dobio ocenu 6");
}
else if ( poeni <= 70 ) {
    console.log ("Student je dobio ocenu 7");
}
else if ( poeni <= 80 ) {
    console.log ("Student je dobio ocenu 8");
}
else if ( poeni <= 90 ) {
    console.log ("Student je dobio ocenu 9");
}
else {
    console.log ("Student je dobio ocenu 10");
}

// Drugi zadatak 

let datum = new Date ( );
let dan = datum.getDay () ;

if ( dan == 0) {
    console.log ("Vikend");
}
else if ( dan == 6) {
    console.log ("Vikend");
}
else {
    console.log ("Radni dan")  ;  
}


// deveti zadatak 

let vreme = datum.getHours ();
if ( vreme >= 18) {
    console.log ("Dobro vece");
}
else if ( vreme >= 12 ) {
    console.log ("Dobar dan");
}
else {
    console.log ("Dobro jutro");
}

// Deseti zadatak 

let dan1 = 7 ;
let mesec1 = 2;
let godina1 = 2020 ;
let dan2 = 7 ;
let mesec2 = 2;
let godina2 = 2020 ;

if (godina1 < godina2 ) {
    console.log ("Prvi datum je ranije");
}
else if (godina1 > godina2) {
    console.log ("Drugi datum se prvi desio") ;
}
else if( mesec1 < mesec2 ) {
    console.log ("Prvi datum je ranije");
}
else if ( mesec1 > mesec2) {
    console.log ("Drugi datum se prvi desio") ;
}
else if ( dan1 < dan2) {
    console.log ("Prvi datum je ranije");
}
else if ( dan1 > dan2 ) {
    console.log ("Drugi datum je ranije");
}
else {
    console.log ("Datumi su isti");
}


// Dvanesti zadatak

let p1 = 12;
let k1 = 21;
let p2 = 12 ;
let k2 = 21 ;

if ( p1 <= p2 && p2 <= k1) {
    console.log ("Preklapaju se") ;
}
else if ( p2 <= p1 && p1 <= k2) {
    console.log ("Preklapaju se") ;
}
else {
    console.log ("Ne preklapaju se") ;
}


if ((p1 <= p2 && p2 <= k1) || (p2 <= p1 && p1 <= k2) ) {
    console.log ("Smene se preklapaju") ;
}
else {
    console.log ("Smene se ne preklapaju") ;
}

// 13. zadatak 

let broj = 7 ;
let paran ;


if (broj % 2 == 0) {
    paran = true;    
    console.log ("Paran broj");
}
else  {
    paran = false ;
    console.log ("Neparan broj");
}
console.log (paran);

// SWITCH

let boja = "crvena";

switch (boja) {
    case "plava":
        console.log ("Odabrali ste plavu boju");
        break;
    case "zelena":
        console.log ("Odabrali ste zelenu boju");
        break;
    case "crvena":
        console.log ("Odabrali ste crvenu boju");
         break;
    default :
        console.log ("Nije dobra boja");
}

// 1. zadatak iz switch-a

switch (dan) {
    case 0:
        console.log("Nedelja");
        break;
    case 1:
        console.log("Ponedeljak");
        break;
    case 2:
        console.log("Utorak");
        break;
    case 3:
        console.log("Sreda");
        break;
    case 4:
        console.log("Cetvrtak");
        break;
    case 5:
        console.log("Petak");
        break;
    default:
        console.log ("Subota");

}
// 2.zadatak  switch-a

let ocena = 3;

switch (ocena) {
    case 1 :
        console.log ("Nedovoljan");
        break;
    case 2:
        console.log("Dovoljan");
        break;
    case 3:
        console.log("Dobar");
        break;
    case 4:
        console.log("Vrlo dobar");
        break;
    default :
        console.log("Odlican")
}

// 3. zadatak iz switch-a 

let brDo10 = 0;

if ( (brDo10 < 10) && (brDo10 >= 0)) {
    switch (brDo10) {
        case 0 :
            console.log ("Nula");
            break;
        case 2:
            console.log("Dvojka");
            break;
        case 4:
            console.log("Cetvorka");
            break;
        case 6:
            console.log("Sestica");
            break;
        case 8:
            console.log("Osmica");
             break;
        default :
            console.log("Unos je pogresan");
    }
}
else {
    console.log ("Broj nije manji od 10");
}


