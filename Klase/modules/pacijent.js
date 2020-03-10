

export class Pacijent {
    constructor (i, v, t) {
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }
    Stampaj() {
        console.log(`Ime: ${this.ime}; Visina: ${this.visina}; Tezina: ${this.tezina}`)
    }
    Bmi () {
        let bmi = this.tezina / (this.visina/100)**2;
        return bmi;
    }
    Kritican(){
        if(this.Bmi() < 15 || this.Bmi() > 40){
            return true;
        }
        else {
           return false;
        }
    }
    get pIme () {
        return  this.ime;
    }
    set pIme (i) {
        this.ime = i;
    }
    get pVisina() {
        return this.visina;
    }
    set pVisina (v) {
        if (v < 0) {
            this.visina = 0 ;
        }
        else if (v <= 250) {
            this.visina = v;
        }
        else {
            this.visina = 250;
        }
    }
    get pTezina (){
        return this.tezina;
    }
    set pTezina (t) {
        if (t < 0) {
            this.tezina = 0;
        }
        else if (t <= 550) {
            this.tezina = t;
        }
        else {
            this.tezina = 550;
        }
    }
}