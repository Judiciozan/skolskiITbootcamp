let suma = function(a, b) {
    return a + b;
}

console.log(suma(2, 3));
console.log(suma(9, 4));

// Anonimna funkcija

let suma2 = (a, b) => {
    return a + b;
}

console.log(suma2(9, 4));
console.log(suma2(33, 4));


// 1.primer
let hello = () => {
    return console.log("Hello world");
}

hello();

// 2. primer 

let echo = (s1, s2) => {
    let s = s1 + ',' + s2;
    console.log (s);
}

echo ("bla", "bka");


// 3. zadatak funkcije
let neparan = (n) => {
    if (n % 2 == 0) {
        return false;
    }
    else {
        return true;
    }
}

console.log(neparan(9));


// 4. zadatak funkcije

let maks2 = (n, m) => {
    if (n > m) {
        return n;
    }
    else {
        return m;
    }
}
let maks4 = (a, b, c, d) => {
    let pr1 = maks2(a, b);
    let pr2 = maks2(c, d);
    return maks2(pr1, pr2);
}

console.log(maks4(1, 2, 3, 4));

// 10. zadatak funkcije 
let deljivSaTri = (n, m) => {
    let br = 0;
    for (i = n; i <= m; i++){
        if (i % 3 == 0) {
            console.log(i);
            br++;
        }
    }
    console.log(`Broj brojeva od n do m koji su deljivi sa tri je: ${br}`);
}


deljivSaTri(1, 20);

// obicna funkcija 

function slika(putanja) {
    return `<img src="${putanja}" alt = "bklala">`;
}

// Arrow funkcija 

let slika2 = (putanja) => {
    return `<img src="${putanja}" alt = "bklala">`;
}

// 1) Telo arrow funkcije se sastoji samo od return naredbe

let slika3 = (putanja) => `<img src="${putanja}" alt = "bklala">`;


let div = document.getElementById('blabla');
div.innerHTML = slika3('2.png');

// 2) drugo ubrzanje. Arrow funkcija prima JEDAN parametar

let slika4 = putanja => `<img src="${putanja}" alt = "bklala">`;
div.innerHTML += slika4('2.png');