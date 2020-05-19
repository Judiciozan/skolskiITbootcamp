import {hello, niz} from "./pozdrav";

let greet = name => {
    console.log(`Hello, ${name}`);
}

greet('Petar');
greet('Mika');
greet("Laza");

hello();
console.log(niz);