let ulZadaci = document.querySelector("ul");
let liZadaci = document.querySelectorAll('li');
let btnDodaj = document.querySelector('button');
let inputUnos = document.querySelector('#unesi');

/*
liZadaci.forEach(elem => {
    elem.addEventListener('click', (e) => {
        e.target.remove();
        console.log('kliknuto na li');
        e.stopPropagation();//  ne poziva roditeljski element
    });
});
*/
let dodavanjeItema = () => {
    let noviZadatak = document.querySelector('input').value;
    let rbDodajNaPoc = document.querySelector('#dodajNaPocetak');

    if(noviZadatak == "") {
        alert("morate uneti neki tekst");
    }
    else {
        let noviItem = document.createElement('li');
        noviItem.textContent = noviZadatak;

        if (rbDodajNaPoc.checked) {   
            ulZadaci.prepend(noviItem);
        } else {
            ulZadaci.append(noviItem);
        }
    }    
    document.querySelector('input').value = "";


}

btnDodaj.addEventListener('click', () => {
    dodavanjeItema();
});

ulZadaci.addEventListener('click', (e)=> {
    //console.log('kliknuto na Ul');
    //console.log(e.target.tagName);
    if(e.target.tagName == 'LI') {
        e.target.remove();
    }
});


inputUnos.addEventListener('keyup', (e)=> {
    // Za enter je "kljuc" broj 13
    if(e.keyCode == 13) {
        dodavanjeItema();
    }
})