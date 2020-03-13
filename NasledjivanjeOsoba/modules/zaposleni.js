import {Osoba} from "./osoba.js";

export class Zaposleni extends Osoba {
    constructor(i, p, gr, plata, pozicija){
        super(i, p, gr);
        this.plata = plata;
        this.pozicija = pozicija;
    }
    set plata (pl) {
        this._plata = pl;
    }
    set pozicija (po) {
        this._pozicija = po;
    }
    get plata (){
        return this._plata;
    }
    get pozicija () {
        return this._pozicija;
    }
    ispisiZaposlenog (){
        this.ispisiOsobu();
        console.log(`plata: ${this.plata} pozicija: ${this.pozicija}`);
    }
    ekonomista() {
        if(this.pozicija == "ekonomista") {
            console.log(`Zaposlen u ekonomskom sektoru`);
        }
    }
    natprosecnaPlata(prosek) {
        if(this.plata > prosek) {
            return true;
        }
        else {
            return false;
        }
    }
}
