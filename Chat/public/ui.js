export class ChatUI{
    constructor(l){
        this.list = l;
    }
    set list (l) {
        this._list = l;
    }
    get list () {
        return this._list;
    }

    formatDate(date){
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear()
        let h = date.getHours();
        let min = date.getMinutes();
        

           // Pravi string duzine prvog parametra,
           // a ako string nije dovoljno veliki, 
           //drugu vrednost dopunjava(stavlja ih ispred)
        
        let danasnji = new Date();
        let trenutniDan = danasnji.getDate();
        let trenutniMesec = danasnji.getMonth() + 1;
        let trenutnaGodina = danasnji.getFullYear();

        //Dodavanje 0 ispred jednocifrenih vrednosti
        d = String(d).padStart(2,"0");
        m = String(m).padStart(2,"0");
        h = String(h).padStart(2,"0");
        min = String(min).padStart(2, "0");

        trenutniDan = String(trenutniDan).padStart(2,"0");
        trenutniMesec = String(trenutniMesec).padStart(2,"0");

        
        if(d==trenutniDan && m==trenutniMesec && y==trenutnaGodina){
            let strDate = h + ":" + min;
            return strDate;
        }
        else{
            let strDate = d + "." + m + "." + y + ". - " + h + ":" + min;
            return strDate;
        }
        
    }

    templateLI (data) {
        
        let date = data.created_at.toDate();
        let strDate = this.formatDate(date);
        
        

        let htmlLI = `<li `;
        if(data.username == localStorage.usernameLS){
            htmlLI += `class="me">`;
        }
        else {
            htmlLI += `class="not-me">`;
        }
        htmlLI +=
        `   <span class="username">${data.username}</span> :
            <span class="message">${data.message}</span> 
            <div class="date"> ${strDate} </div>
        </li>`;
        this.list.innerHTML += htmlLI;
        this.list.scrollTop = this.list.scrollHeight;
    }
    
    clear(){
        this.list.innerHTML = ``;
    }
}