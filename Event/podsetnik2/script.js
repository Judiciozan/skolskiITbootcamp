let ulZadaci = document.querySelector("ul");
let liZadaci = document.querySelectorAll('li');

liZadaci.forEach(elem => {
    elem.addEventListener('click', (e) => {
        //console.log(e.target);
        if (e.target.style.textDecoration == 'line-through') {
        e.target.style.textDecoration =  'none';
        }
        else {e.target.style.textDecoration =  'line-through';}
    });
});