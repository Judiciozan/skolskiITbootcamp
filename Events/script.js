let dugmeZdravo = document.getElementById('zdravo');
dugmeZdravo.addEventListener('click', () => {
    console.log('Zdravo Jelena!');
    let zdravoParagraf = document.getElementById('zdravoPara');
    zdravoParagraf.innerText += "ZDRAVO!!!";
});

//let zdravoParagraf = document.getElementById('zdravoPara');
//zdravoParagraf.innerHTML = "ZDRAVO!!!";

// 1.

let dugmeBrojac = document.getElementById('brojac');
let br = 1;
dugmeBrojac.addEventListener('click', () => {
    br++;
    console.log(br);
    let zdravoParagraf = document.getElementById('zdravoPara');
    zdravoParagraf.innerText = `Vrednost brojaca je ${br}`;
})

// 3.

let r = 0;
let spanRezultat = document.getElementById('rezultat');
spanRezultat.innerText = r;

let dugmePlus = document.getElementById('plus');
dugmePlus.addEventListener('click', () => {
    r++;
    spanRezultat.innerText = r;
});

let dugmeMinus = document.getElementById('minus');
dugmeMinus.addEventListener('click', () => {
    r--;
    if (r < 0) {
        r = 0;
    }
    spanRezultat.innerText = r;
});

//5. 
let bp = document.getElementById('buttonPozdrav');
bp.addEventListener('click', () => {
    let vrednost = document.getElementById('pozdrav').value;
    let pp = document.getElementById('paragrafPozdrav')
    pp.innerText = `Zdravo ${vrednost}`;
});

let rezRacunanja = document.getElementById('rez');
let bkv = document.querySelector('#buttonKv');
bkv.addEventListener('click', () => {
    let br = document.querySelector('#inputKv').value;
    let kv = br**2;
    rezRacunanja.innerHTML = `Rezultat je ${kv}`;
});

let bpr = document.querySelector('#buttonPr');

bpr.addEventListener('click', () => {
    let br = document.querySelector('#inputPr').value;
    let kv = br / 2;
    rezRacunanja.innerHTML = `Rezultat je ${kv}`;
});


let povrsina = document.querySelector('#buttonPovrsina');

povrsina.addEventListener('click', () => {
    let br = document.querySelector('#inputPovrsina').value;
    let kv = br**2*Math.PI;
    rezRacunanja.innerHTML = `Rezultat je ${kv}`;
});