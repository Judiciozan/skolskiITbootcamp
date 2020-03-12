export class Autobus {
    constructor(rb, bs) {
        this.regBr = rb;
        this.brSedista = bs;
    }
    set regBr (rb) {
        this._regBr = rb;
    }
    set brSedista(bs){
        this._brSedista = bs;
    }
    get regBr() {
        return this._regBr;
    }
    get brSedista() {
        return this._brSedista;
    }
    stampaj () {
        console.log(`Autobus: ${this.regBr}, ${this.brSedista}`);
    }
}