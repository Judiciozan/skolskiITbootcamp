export class Knjiga{
    constructor (n, a, gi, bs, c) {
        this._naslov = n;
        this._autor  = a;
        this._godIzdanja = gi;
        this._brojStrana = bs;
        this._cena = c;
    }
    set naslov(n) {
        this._naslov = n;
    }
    set autor(a) {
        this._autor = a;
    }
    set godIzdanja(gi) {
        this._godIzdanja = gi;
    }
    set brojStrana(bs) {
        if (bs < 0){
            this._brojStrana = 0;
        }
        else {
            this._brojStrana = bs;
        }
        
    }
    set cena(c) {
        if ( c < 0){
            this._cena = 0;
        }
        else {
            this._cena = c;
        }
    }

    get naslov (){
        return this._naslov;
    }
    get autor () {
        return this._autor;
    }
    get godIzdanja () {
        return this._godIzdanja;
    }
    get brojStrana () {
        return this._brojStrana;
    }
    get cena () {
        return this._cena;
    }
    stampaj () {
        console.log (`Knjiga: "${this.naslov}" ${this.autor} ${this.godIzdanja}.god Broj strana: ${this.brojStrana} Cena: ${this.cena}din` );
    }
    obimna () {
        if(this.brojStrana > 600) {
            return true;
        }
        else {
            return false;
        }
    }
    skupa () {
        if ( this.cena > 8000) {
            return true;
        }
        else {
            return false;
        }
    }
    dugackoIme () {
        if (this.autor.length > 18) {
            console.log("Dugacko ime");
        }
        else {
            console.log('Nije dugacko ime');
        }
    }

}    