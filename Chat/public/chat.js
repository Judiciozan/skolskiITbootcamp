 export class Chatroom {
    constructor(r, u){
        this.room = r;
        this.username = u;
        this.chats = db.collection("chats");
        this.unsub;
    }

    set username (u) {
        this._username = u;
    }
    set room (r) {
        this._room = r;
    }
    get username () {
        return this._username;
    }
    get room () {
        return this._room;
    }
    async addChat(mess){
        //dohvatanje tekuceg datuma koji je poteban za timestamp
        let date = new Date();
        let docChat = {
            message : mess ,
            username : this.username,
            room : this.room,
            created_at : firebase.firestore.Timestamp.fromDate(date)  
        }   
        // da sacuvamo dokument u bazi
        let response = await this.chats.add(docChat);
        
        return response;
    }
    getChats(callback) {
        this.unsub = this.chats
                    .where("room", "==", this.room)
                    .orderBy("created_at")
                    .onSnapshot (snapshot => {
                        snapshot.docChanges().forEach( change => {
                            if(change.type === 'added') {
                                callback(change.doc.data());
                            }
                        });
                    }); 
    }
    
    updateUsername(uu) {
        this.username = uu;
        localStorage.setItem('usernameLS', uu);

    }

    updateRoom (ur) {
        this.room = ur;
        if(this.unsub){
            this.unsub();
        }
    }

    getChatsFilter(callback, a, b) {
        this.unsub = this.chats
                    .where("room", "==", this.room)
                    .where("created_at", ">", new Date(a))
                    .where("created_at", "<", new Date(b))
                    .orderBy("created_at")
                    .onSnapshot (snapshot => {
                        snapshot.docChanges().forEach( change => {
                            if(change.type === 'added') {
                                callback(change.doc.data());
                            }
                        });
                    }); 
    }
}
/*
let chatroom = new Chatroom('js',"PeraPeric");


chatroom.addChat('Zdravo!')
    .then( () => {
        console.log('Chat je dodat');
    })
    .catch((err) =>{
        console.log("Error:", err);
    });
*/
/*
setTimeout ( () => {
    chatroom.updateRoom('js');
    chatroom.updateUsername("Tina");
    chatroom.getChats( data => {
        console.log(data);
    });
    chatroom.addChat("Kako si, Milice?");
}, 3000);
*/
