
let i;

// 1. Zadatak : Ispisati brojeve od 0 do 10
/*
for (i = 0; i <= 10; i++){
    console.log (i);
}

// 2. Zadatak 

for (i = 20; i >= 1; i--){
    console.log (i);
}


// 3. Zadatak ispitati parne brojeve od 1 do 20

for (i=1; i<=20; i++) {
    if (i%2 == 0) {
        console.log(i);
    }
}
*/


// 5. zadatak: Odrediti sumu od 1 do 100

let s = 0;

for ( i = 1; i <= 100; i++) {
    s += i;
}

console.log (s);

// 6.zadatak


s = 0;
let n = 50;

for ( i = 1; i <= n; i++) {
    s += i;
}

console.log (s);

// 7. zadatak

s = 0;
n = 25;
let m = 50;

for ( i = n ; i <= m ; i++) {
    s += i;
}

console.log (s);

// 12. odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100.

let p = 1;

for ( i = 20 ; i <= 100 ; i++ ) {
    if ( i % 11 == 0) {
        console.log (i)
        p *=i;
    }
}

console.log (p);

//13. zadatak

let num = 0;

for ( i = 5 ; i <= 150 ; i++ ) {
    if ( i % 13 == 0) {
        num ++;
    }
}

console.log (num);



// 14. zadatak Ispisati aritmeticku sredinu brojeva od n do m.
 

n = 5;
m = 10;
let sum = 0;
num = 0;

for (i=n; i <= m; i++) {
    sum +=i;
    num ++;
}
console.log(sum/num);

// drugi nacin
n = 5;
m = 10;
sum = 0;


for (i=n; i <= m; i++) {
    sum +=i;
}
num = m - n + 1;
console.log(sum/num);




// 15. zadatak 

n = - 9;
m = 15;

let poz = 0;
let neg = 0;

for ( i=n ; i <= m; i++) {
    if (i >= 0)
    { poz += 1;}
    else {
        neg +=1;
    }
}

console.log (poz);
console.log (neg);


// 16. zadatak 

num = 0;

for  (i = 5; i <=50; i++) {
    if ( i % 3 == 0 || i % 5 ==0) {
        num++;
    }
}

console.log (num);

// 17.


n = 10;
m = 45;

num = 0;
rez = 0;

for (i = n; i <= m; i++) {
    if ( i % 10 == 4){
        rez+= i;
        num++;
    }
}

console.log (rez);
console.log (num);

// 21. zadatak

n = 11;
m = 30;
let a = 10;
rez = 1;

for (i = n; i <= m; i++) {
    if ( i % a == 0) {
        rez *= i;

    }
}

console.log (rez);

// 10. zadatak  Slicice naizmenicno

// a) varijanta

let div = document.getElementById("slika") ;
let r ;


for (i = 1; i <= 16; i++) {
    r = i % 3;
    div.innerHTML += `<img src=${r}.png>`;
}



console.log("bla");
console.log("testPoruka");