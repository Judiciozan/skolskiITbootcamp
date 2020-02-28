// query selektor po imenu taga
let paragraf = document.querySelector('p');   // Selektuje samo prvi element sa odgovarajucem tagom
console.log(paragraf);
let div = document.querySelector('div');
console.log(div);


// query selektor po imenu klase
let klasaTest = document.querySelector(".test"); 
console.log(klasaTest);

let klasaTestParagraf = document.querySelector("p.test"); 
console.log(klasaTestParagraf);

let treciParagraf = document.querySelector("#treci_paragraf");
console.log(treciParagraf);


// Querry selektor za sve <p> tagove
let sviParagrafi = document.querySelectorAll('p');
console.log(sviParagrafi);

// Pristupanje elementu Node liste
console.log(sviParagrafi[0]);

// Kretanje kroz Node listu

sviParagrafi.forEach(elem =>{
    console.log(elem);
});

//
let klasaTestDoc = document.getElementsByClassName('test');
console.log(klasaTestDoc);
// neuspelo kretanje kroz forEach petljom kroz HTML koleciju
//klasaTestDoc.forEach(elem => {
  //  console.log(elem);
//});

console.log(klasaTestDoc[0]);
// ovde je kretanje HTML kolekcijom FOR petljom
for (let i = 0; i < klasaTestDoc.length; i++) {
    console.log (klasaTestDoc[i]);
}

// InnerText 
paragraf.innerText += "Zdravo ";
paragraf.innerText += "Svete";

paragraf.innerHTML += "<span> Kako si? </span>";

//Vezbanje 
// Selektovati sve paragrafe i  u svakom od njih pridodati tekst "Vazno!"

sviParagrafi.forEach(elem => {
    elem.innerHTML += " " +"<b>VAZNO!</b>";
});

// 
sviParagrafi.forEach((elem, index) => {
    let kv = (index + 1) ** 2;
    elem.innerText += `${kv}`;
});

/* Napraviti niz od najmanje tri imena.
Proći nizom i imena ispisati:
    1. Svako u novom paragrafu
    2. U listi kao stavke liste
    3. U jednoj koloni tabele*/
//1.
let imena = ["Jovana", "Miljana", "Milena"];
sviParagrafi.forEach((elem, index) => {
    elem.innerText += imena[index];
});
//2.
let lista = document.querySelector('ul');
imena.forEach(elem => {
    let item = `<li> ${elem} </li>`;
    lista.innerHTML += item;

});
// 3.
let tabela =  document.querySelector('table');
let sadrzaj = "";
imena.forEach (ime => {
    let item =`<tr><td>${ime}</tr></td>`;
    sadrzaj += item;
});
tabela.innerHTML += sadrzaj;

// Dohvatamo svu decu (direktne potomke) body taga
let potomci= document.body.children;
console.log(potomci);
//HTML kolekcija = ne moze direktna forEach petlja
//Za forEach petlju, moramo HTML kolekciju da konvertujemo u Niz
let niz = Array.from(potomci);
niz.forEach(elem => {
    console.log(elem);
});

// Dohvatimo svu decu ul liste
let decaListe= lista.children;
let nizDecaListe = Array.from(decaListe);
nizDecaListe.forEach(elem => {
    console.log(elem);
});



