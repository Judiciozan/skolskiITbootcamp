/* 7. zadatak 

let n = 10 ;
let i = 1 ;
let rez = 0 ;

while ( i <= n ) {
    rez +=i;
    i++;
}

console.log (rez);

*/ 
/*
let n = 5 ;
let m = 10 ;
let i = n;
let rez = 0;

while (i <= m) {
    rez += i;
    i++;
}
console.log (rez);
*/
/*
// 9. zadatak 

let n = 1;
let m = 5;
let i = n;
let rez = 1;

while ( i <= m) {
    rez *= i;
    console.log (i, n, m, rez);
    i++;
}
console.log (i);
console.log (rez);
*/
/*
// 9.1 Odrediti proizvod drugog broja od n do m

let n = 1;
let m = 5;

let i = n;
let rez = 1;

while ( i <= m) {
    rez *= i;
    i+= 2;
}
console.log(n);
console.log (rez);
*/
/*
// 10.  Suma kvadrata brojeva od n do m

let n = 1;
let m = 7;

let i = n ;
let rez = 0 ;

while ( i <= m) {
    rez += i**2 ;
    i++;
}

console.log (rez);
*/

// 11. Sa koliko je brojeva je deljiv uneti broj k

let k = 12 ;

let i = 1;
let j = 0;

while ( i <= k) {
    if ( k % i == 0) {
        j++;
    }
    i++;
}

console.log (j);