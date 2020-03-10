export class Film {
    constructor (n, r, god) {
        this.naslov = n ;
        this.reziser = r;
        this.godinaIzdanja = god;
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
    

}