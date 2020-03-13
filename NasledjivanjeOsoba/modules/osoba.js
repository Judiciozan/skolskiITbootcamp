export class Osoba {
    constructor(ime, prezime, godinaRodjenja) {
        this.ime = ime;
        this.prezime = prezime;
        this.godRodj = godinaRodjenja;
    }
    set ime(i){
        this._ime = i;
    }
    set prezime(p) {
        this._prezime = p;
    }
    set godRodj(gr) {
        if(gr < 0){
            this._godRodj = 0;
        }
        else {
            this._godRodj = gr;
        }
    }
    get ime (){
        return this._ime;
    }
    get prezime (){
        return this._prezime;
    }
    get godRodj (){
        return this._godRodj;
    }

    ispisiOsobu(){
        console.log(`Osoba: ${this.ime} ${this.prezime} (${this.godRodj})`);
    }
} 