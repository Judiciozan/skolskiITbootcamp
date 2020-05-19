//Moduli
import {Chatroom} from "./chat.js";
import {ChatUI} from "./ui.js";

//DOM Elementi
let body = document.querySelector("body");
let chatList = document.querySelector('#ulMessages');

let formMessage = document.querySelector('#formMessage');
let inputMessage = document.querySelector("#inputMessage");

let formUsername = document.querySelector("#formUsername");
let inputUsername = document.querySelector("#inputUsername");

let rooms = document.querySelector("nav");
let updatedUsername = document.querySelector("#divUpdatedUsername")

let formFilter = document.querySelector('#formFilter');

let buttons = document.querySelectorAll('button');

let start = document.querySelector("#start");
let end = document.querySelector("#end");

let formBoja = document.querySelector('#formBoja');
let inputBoja = document.querySelector('#inputBoja');

//Provera username u lokalnoj memoriji
let checkUsername = () => {
    if(localStorage.usernameLS){
        return localStorage.usernameLS;
    }
    else {
        return "anonymous";
    }
}

let chatroom = new Chatroom ('js', checkUsername());
let chatUI = new ChatUI(chatList);
//console.log(chatroom);

// Provera prilikom ucitavanje stranice
// koja soba je bila poslednja posecena, nju ucitati
let checkRoom = () => {
    if(localStorage.roomLS){
        return localStorage.roomLS;
    }
    else {
        return "general";
    }
}

chatroom.updateRoom(checkRoom());

//Poslednjoj posecenoj sobi dodati klasu koja ce da oboji to dugme
buttons.forEach(b => {
    if(b.id == checkRoom()){
        b.classList.add('btn-selected');
    }
});

chatroom.getChats( data => {
    chatUI.templateLI(data);
});

//Kada je submit dugme Send pošalji poruku
formMessage.addEventListener('submit' , e => {
    e.preventDefault();
    
    let message = inputMessage.value;
    chatroom.addChat(message)
        .then( () => formMessage.reset())
        .catch( error => console.log(error));
        
    //Izbrisati sve poruke sa stanice
    chatUI.clear();

    //Učitati poruke za promenjenu sobu
    chatroom.getChats( data => {
        //console.log(data); //u konzoli
        chatUI.templateLI(data);
    });

});

// Kada je submit dugme Update izmeni korisnicko ime
formUsername.addEventListener( 'submit', e =>{
    e.preventDefault();
    let patternUsername =  /^[\S]*[\S]$/;
    let newUsername = inputUsername.value;

    if(patternUsername.test(newUsername)){
        chatroom.updateUsername(newUsername);
        
        //Osveziti cet
        chatUI.clear();
        chatroom.getChats(data => {
            chatUI.templateLI(data);
        });
        
        //Kada je Update ime prikazati poruku u trajanju od 3s
        updatedUsername.innerHTML = `Your username was updated to 
        <span id="spanNewUsername">${newUsername}</span>`;
        setTimeout(()=>{
            updatedUsername.innerHTML = ``;
        } , 3000);

    } else {
        alert('Username nevalidan. Polje ne sme biti prazno ili da sadrzi razmak.');
    }

    formUsername.reset();
    
});

// promena sobe
rooms.addEventListener('click', e => {
    if(e.target.tagName == "BUTTON") {
        // kada je kliknuto na dugme, dodeliti mu klasu da je bas ono selektovano
        
        
        //ocistiti dugme od btn-selected klase
        buttons.forEach(b =>{
            if(b.classList.contains("btn-selected")) {
                b.classList.remove('btn-selected');
            }
        });
        //selektovanom dugmetu dodati btn-selected
        let btnId = e.target.getAttribute('id');
        let btn = document.getElementById(btnId);
        btn.classList.add('btn-selected');

        // izbrisemo sve poruke sa stranice
        // promeniti sobu
        // ucitati poruke za promenjenu sobu
        chatUI.clear();

        let newRoom = e.target.getAttribute('id');
        chatroom.updateRoom(newRoom);
        localStorage.setItem('roomLS', newRoom);

        chatroom.getChats( data => {
            chatUI.templateLI(data);
        });
    }
});

formFilter.addEventListener('submit', e => {
    e.preventDefault();

    let filterStart = start.value;
    let filterEnd = end.value;

    chatUI.clear();
    chatroom.getChatsFilter(data => {
        chatUI.templateLI(data);
    },filterStart, filterEnd );
});


formBoja.addEventListener('submit', e => {
    e.preventDefault();
    let trenutnaBoja = inputBoja.value;

    setTimeout(() => {
        body.setAttribute("style", `background-color: ${trenutnaBoja}`)}, 500
    );
    localStorage.setItem('bojaLS', trenutnaBoja);
});


if(localStorage.bojaLS){
    body.setAttribute("style", `background-color: ${localStorage.bojaLS}`);
    inputBoja.value = `${localStorage.bojaLS}`;
}
else {
    body.setAttribute("style", `background-color: #ffffff`);
}


