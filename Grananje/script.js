let a = 5 ;
let b = 8 ;

if ( a > b)
 {
    console.log ( `${a} je vece od ${b}`)
}

console.log ("komanda posle if") ;

a = 6 ;
b = "6" ;

if ( a == b)
{
    console.log ( `${a} je jednako ${b}`)
}

if ( a === b ) {
    console.log (`${a} je jednako ${b} po tipu i vrednosti`)
}

if ( a != b ) {
    console.log (`${a} nije jednako ${b}`)
}

if ( a !== b ) {
    console.log (`${a} nije jednako ${b} po tipu i vrednosti`)
}


a = 5 ;
b = 12 ;

if ( a > b )
{
    console.log (`${a} je vece od ${b}`);
}
else
{
    console.log (`${a} nije vece od ${b}`)
}

if ( a == b)
{
    console.log ( `${a} je jednako ${b}`)
}
else {
    console.log (`${a} nije jednako ${b}`)
}

if ( a === b ) {
    console.log (`${a} je jednako ${b} po tipu i vrednosti`)
}
else {
    console.log (`${a} nije jednako ${b} po tipu i vrednosti`)
}


// Zadaci

//2. zadatak

let tem = 25 ;

if ( tem >= 0)
{
    console.log ( "Temperatura je u plusu") ;
}
else 
{
    console.log ( "Temperatura je u minusu" ) ;
}

// 3. zadatak

let pol = "Z";
let div = document.getElementById('blabla')

if ( pol == "m")
{
    console.log ( "Pol je muski");
    div.innerHTML = "<img src='male.jpg' alt='Muski'>";
}
else 
{
    console.log ( "Pol je zenski");
    div.innerHTML = "<img src='female.png' alt='Zenski'>";
}

// 4. zadatak 

let datum = new Date ();
let sati = datum.getHours ();

if (sati < 12)
{
    console.log ( "Jutarnje vreme");
}
else 
{
    console.log ( "Popodnevno vreme");
}   

// 5. zadatak

let godRod = 1992 ;
let god = datum.getFullYear ();

if (god - godRod >= 18 )
{
    console.log ("Punoletna osoba");   
}
else 
{
    console.log ("Maloletna osoba");
}

// 6. zadatak

a = 78 ;
b = 9 ;
let c = 56;

let max = a ;

if ( b > max )
{
    max = b ;
}
if ( c > max )
{
    max = c ;
}


console.log (`Najveci od tri broja je ${max}`);


