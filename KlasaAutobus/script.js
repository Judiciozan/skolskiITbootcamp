import {Autobus} from "./autobus.js";

let a1 = new Autobus("NI-111AA", 64);
a1.stampaj();
let a2 = new Autobus("BG-222BB", 32);
let a3 = new Autobus("KG-333CC", 60);

let autobusi = [a1, a2, a3];
let ispisAutobusa = (autobusi) => {
    autobusi.forEach(elem => {
        elem.stampaj();
    });
}

ispisAutobusa(autobusi);

let ukupnaSedista = niz => {
    let ukupno = 0;
    niz.forEach(elem => {
        ukupno += elem.brSedista;
    });
    return ukupno;
}
console.log(`Ukupan broj sedista je: ${ukupnaSedista(autobusi)}`);

let ljudi = (brLjudi, niz) => {
    let uk = ukupnaSedista(niz);
    if(uk >= brLjudi){
        return true;
    }
    else {
        return false;
    }
}

ljudi(166, autobusi);
ljudi(76, autobusi);
console.log(ljudi(166, autobusi), ljudi(76, autobusi));