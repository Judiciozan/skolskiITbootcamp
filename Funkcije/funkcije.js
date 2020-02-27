// 11.zadatak

function suma (n, m) {
    let rez = 0 ;
    for (let i = n; i <= m; i++) {
        rez += i;
    }
    return rez ;
}

let p =  suma (6, 12);
console.log (p);
console.log (suma(5, 18));

// 12. zadatak 

function mnozi (n, m) {
    let rez = 1;
    for (let i = n; i <= m; i++) {
        rez *= i;
    }
    return rez ;
}

console.log(mnozi(3, 6));

// 13. zadatak 

function arsr(n, m) {
    let zbir = 0;
    let br = 0;
    

    for (i = n; i <= m; i++) {
        zbir += i;
        br++;
        
    }
    return zbir / br;
}

console.log(arsr (5, 10));

// 14. zadatak 

function arsr3(n, m) {
    let zbir = 0;
    let br = 0;
    

    for (i = n; i <= m; i++) {
        if (i % 10 == 3) {
            zbir += i;
            br++;
        }
    }
    if (br == 0) {
        return 0;
    }
    else {
        return zbir / br;
    }
    
}

console.log(arsr3(20, 22));

// 10. zadatak 

function deljivSaTri (n, m) {
    let broj = 0;
    for (let i = n; i <= m; i++){
        if (i % 3 == 0) {
            broj++;
        }
    }
    return broj;
}

console.log(deljivSaTri(10, 35));


// 4. zadatak

function slika (putanja) {
    return `<img src='${putanja}' alt='Blabla'>`;
}

let elem = document.getElementById("blabla");

elem.innerHTML = slika ("images/tiger.jpg");
elem.innerHTML += slika ("images/tiger2.jpg");

// 6. zadatak 

function paragraf (boja) {
    return `<p style=" color: ${boja}"> Neki tekst... </p>`;
}

elem.innerHTML += paragraf ("red") ;
elem.innerHTML += paragraf ("blue") ;

function paragraf2 (boja, tekst) {
    return `<p style=" color: ${boja}"> ${tekst}</p>`;
}

elem.innerHTML += paragraf2 ("green", "Lorem ipsum...");
elem.innerHTML += paragraf2 ("yellow", "Pera Peric");

//7. zadatak 

function paragraf3 (velicina, tekst) {
    return `<p style=" font-size: ${velicina}px"> ${tekst}</p>`;
}

elem.innerHTML += paragraf3 (36, "Elem belem buf");
elem.innerHTML += paragraf3 (24, "Eci peci pec");

// 8. zadatak 

function pisiPetParagrafa () {
    let rez = "";

    for (let i = 1; i <= 5; i++) {
        let j = i*10;
        rez += `<p style="font-size: ${j}px"> Neki tekst...</p>`;
    }
    return rez;
}

elem.innerHTML += pisiPetParagrafa();