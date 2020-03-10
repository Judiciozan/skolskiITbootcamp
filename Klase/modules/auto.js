class Auto {
    // polja: marka, boja, imaKrov
    // konstruktor:
    constructor (m, b, ik) {
        this.marka = m;
        this.boja = b;
        this.imaKrov = ik;
    }
    sviraj () {
        let m = this.marka;
        console.log(`Auto marke ${m} svira: Beep! Beep!`);
    }
    get aMarka () { // Geter = u klasi je metoda, ali im se pristupa kao polju
        return this.marka;
    }
    set aMarka (m) { // Seter = u klasi je metoda, ali im se pristupa kao polju
        this.marka = m;
    }
    get aBoja (){
        return this.boja;
    }
    set aBoja(b) {
        this.boja = b;
    }
    get aBoja (){
        return this.imaKrov;
    }
    set aBoja(ik) {
        this.imaKrov = ik;
    }
}

export default Auto;