export class Film {
    constructor (n, r, god, o) {
        this.naslov = n ;
        this.reziser = r;
        this.godinaIzdanja = god;
        this.fOcene = o;
    }
    stampaj () {
        console.log(`Film "${this.naslov}" iz ${this.godinaIzdanja}. rezirao je ${this.reziser}`);
    }
    set aGodina (g){
        if(g < 1800) {
            
            this.godinaIzdanja = 1800;
        }
        else {
            this.godinaIzdanja = g;
        }
    }
    set aNaslov(n) {
        this.naslov = n;
    }
    set aReziser (r){
        this.reziser = r;
    }
    get aGodina (){
        return this.godinaIzdanja;
    }
    get aNaslov() {
        return this.naslov;
    }
    get aReziser (){
        return this.reziser;
    }
    set fOcene(o){
        this.ocene = o;
    }
    get fOcene (){
        return this.ocene;
    }
    prosecnaOcena () {
        let s = 0;
        let bla =this.fOcene;
        bla.forEach(elem => {
            s += elem;
        });
        return s / this.ocene.length;
    }
}