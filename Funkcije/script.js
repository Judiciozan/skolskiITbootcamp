/*

function zdravoSvete () {
    console.log("Hello world");
}

zdravoSvete();
/*
for (let i = 1; i <=10; i++){
    zdravoSvete();
}


function ispisi (tekst) {
    console.log (tekst);
}

ispisi ("blablablaH") ;

let ime = "Ana";

ispisi (ime) ;
ispisi (17.3);

function ispisKorisnika (ime, prezime, godRodj) {
    console.log (`Korisnik je ${ime} ${prezime} rodjen ${godRodj}.`);
}

ispisKorisnika ("Ana", "Antic", 1999);
ispisKorisnika ("Miki", "Mikic", 2005);

let a = "Antonio" ;
let b = "Horhe Ignacio Valverde";
let c = 1532;

ispisKorisnika (a, b, c);

function zbir (a,b) {
    let rez = a + b;
    console.log (rez);
}

zbir (2,3) ;


//digitron 

function digitron (a, b, o) {
    let rez;
    if (o == "+") {
        rez = a + b;
    } else if (o == "-"){
        rez = a - b;
    } else if (o == "*") {
        rez = a * b;
    } else {
        if ( b == 0) {
            rez = "Nije dozvoljeno deliti nulom";
        }
        else {
            rez = a / b;
        }
    }
    console.log (rez);
}


digitron (6, 0, "+");
digitron (6, 0, "-");
digitron (6, 0, "*");
digitron (6, 0, "/");



function saberi (a, b) {
    let c = a + b;
    return c;
}

zbir = saberi (1, 5);

console.log (zbir);

console.log (saberi(1,5));


// Zadaci za vezbanje

// 4. Naisati funkciju maks2 koja vraca veci od dva prosledjena realna broja. Zatim napisati funkciju maks4 koja vraca najveci od cetiri prosledjena realna broja.

function maks2 (a, b) {
    if (a > b) {
        return a;
    } else {
        return b ;
    }
}


let m = maks2 (2, 5);
console.log (m);

function maks4 (a, b, c, d) {
    let max = maks2(maks2(a,b), maks2(c,d))
    return max;
}

let najveci = maks4(2, 6, 101, 3) ;

console.log (najveci);

// 3. zadatak  Napisati funkciju neparan koja za uneti broj n vraca tacno ukoliko je neparan ili netacno ukoliko nije paran.

function neparan (n) {
    if  ( n % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}


let parNepar = neparan (43);

console.log (parNepar);

if (parNepar == true) {
    console.log ("Broj je neparan");
} else {
    console.log ("Broj je paran");
}


// 9. dan

function sedmiDan (dan) {
    let pomDan = dan % 7;
    switch (pomDan) {
        case 0:
            return "Nedelja";
            break;

        case 1:
            return "Ponedeljak";
            break;
        
        case 2:
            return "Utorak";
            break;

        case 3:
            return "Sreda";
            break;

        case 4:
            return "Cetvrtak";
            break;

        case 5:
            return "Petak";
            break;

        case 6:
            return "Subota";
            break;

        default :
            return "Los unos"
    }

    
}


let dan = sedmiDan (14);
console.log  (dan);
*/

if  ( 4==4) {
    let t = 3;
    console.log (t);
}

function f1 () {
    let i = 3;
    console.log (i);
}

function f2 () {
    console.log (i);
}

f1 ();

