let prosek = [0.4, 3.9, 5.6, 11, 18.1, 20.1, 22.1, 21.4, 18.5, 11.4, 4.5, 2.4];

let dan = {
    datum : "2020/02/24",
    kisa : false,
    sunce : true,
    oblacno : true,
    temperature : [ -2, 3, 7, 12, 12,  6, 2, -1],
    prosek : function() {
        suma = 0;
        this.temperature.forEach(t => {
            suma += t;
        });
        return suma / this.temperature.length;
    },
    brNatProsek : function () {
        let p = this.prosek();
        let br = 0;
        this.temperature.forEach (t => {
            if ( t > p){
                br++;
            }
        });
        return br;
    },
    brojMaksimalnih : function (){
        let temp = this.temperature;
        let max = temp[0];
        for ( let i = 1; i < temp.length; i++) {
            if (temp[i] > max) {
                max = temp[i];
            }
        }
        let broj = 0;
        temp.forEach(t => {
            if (t == max) {
                broj++;
            }
        });
        return broj;
    },
    brojMaksimalnih2 : function (){
        let temp = this.temperature;
        let max = temp[0];
        let broj = 1;
        for ( let i = 1; i < temp.length; i++) {
            if (temp[i] == max) {
                broj++;
            }
            if (temp[i] > max) {
                max = temp[i];
                broj = 1;
            }    
        }
        return broj;
    },
    brojIzmedju : function(t1, t2) {
        let broj = 0;
        if ( t1 > t2) {
            let t3 = t1;
            t1 = t2;
            t2 = t3;
        }
        this.temperature.forEach( t =>{ 
            if ( t >= t1 && t <= t2) {
                broj++;
            }
        });
        return broj;
    },
    iznadProsek : function() {
        let p = this.prosek();
        let temp = this.temperature;
        let brIznad = 0;
        let brIspod = 0;
        temp.forEach(t => {
            if(t >= p) {
                brIznad++;
            }
            else {
                brIspod++
            }

        });
        if (brIznad > brIspod) {
            return true;
        }
        else {
            return false;
        }
    },
    danLeden : function(){
        let temp = this.temperature;
        for (let i = 0; i <= temp.length; i++) {
            if (temp[i] >= 0){
                return false;
            }
        }
        return true;
    },
    tropskiDan : function() {
        let temp = this.temperature;
        let tropski = true;
        temp.forEach( t => {
            if (t < 24) {
                tropski = false;
            }
        });
        return tropski;
    },
    pogodan : function() {
        let temp = this.temperature;
        for (let i = 0; i <= temp.length - 1; i++){
            if ( Math.abs(temp[i+1] - temp[i]) > 8) {
                return false;
            }
        }
        return true;
    },
    //Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano.

    neuobicajan : function() {
        let temp = this.temperature;
        let iznad25 = false;
        let minus5 = false;
        temp.forEach(t => {
            if(t > 25) {
                iznad25 = true;
            }
            if ( t < -5){
                minus5 = true;
            }
        });
        if ( this.kisa == true && minus5 == true || this.oblacno == true && iznad25 == true || this.kisa && this.oblacno && this.sunce ){
            return true;
        }
        return false;
    },
    iznadProsekZaMesec : function(){
        let mesecString = this.datum.slice(5,7);
        let mesecCeoBroj = parseInt(mesecString);
        let p = prosek[mesecCeoBroj - 1] ;
        let p1 = this.prosek();
        if(p1 > p){
            return true;
        }
        else {
            return false;
        }
    }
        
    }


console.log(dan.prosek());
console.log(dan.brNatProsek());
console.log(dan.brojMaksimalnih());
console.log(dan.brojMaksimalnih2());
console.log(dan.brojIzmedju(4, 9));
console.log(dan.brojIzmedju( 12 , 5));
console.log(dan.iznadProsek());
console.log(dan.danLeden());
console.log(dan.pogodan());
console.log(dan.neuobicajan());
console.log(dan.iznadProsekZaMesec());



let dan1 = {
    datum : "2020/02/20",
    kisa : false,
    sunce : true,
    oblacno : true,
    temperature : [ -5, -3, 1, 5, 7,  5, 3, 2]
}

let dan2 = {
    datum : "2020/03/20",
    kisa : true,
    sunce : false,
    oblacno : true,
    temperature : [ 5, 7, 10, 13, 16, 12, 10, 8, 5,]
}

let dan3 = {
    datum : "2020/07/20",
    kisa : false,
    sunce : true,
    oblacno : false,
    temperature : [ 15, 17, 22, 28, 30, 28, 26, 24, 22]
}

let dani = [dan1, dan2, dan3];

//Napisati arrow funkciju koja ispisuje datum u kome je naviše puta izmerena temperatura. Ukoliko ima više takvih datuma, ispisati:
//prvi takav,

let prviNajviseMerenja = dani => {
    let max = dani[0].temperature.length;
    let index = 0;
    dani.forEach((dan, i) =>{
        if (dan.temperature.length > max) {
            max = dan.temperature.length;
            index = i;
        }
    });
    console.log(dani[index].datum);
}
let poslednjiNajviseMerenja = dani => {
    let max = dani[0].temperature.length;
    let index = 0;
    dani.forEach((dan, i) =>{
        if (dan.temperature.length >= max) {
            max = dan.temperature.length;
            index = i;
        }
    });
    console.log(dani[index].datum);
}
prviNajviseMerenja(dani);
poslednjiNajviseMerenja(dani);




//poslednji takav.
