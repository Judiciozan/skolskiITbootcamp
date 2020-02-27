let blog1 = {
    title : "Blog 1!",
    content : "Tekst 1",
    likes : 5 ,
    dislikes : 10
};

let blog2 = {
    title : "Blog 2!!",
    content : "Tekst 2",
    likes : 20 ,
    dislikes : 20
};

let blog3 = {
    title : "Blog 3!?",
    content : "Tekst 3",
    likes : 50 ,
    dislikes : 0
};

let user = {
    username : 'JohnDoe' ,
    age : 30 , 
    blogs : ["Title 1", "Title 2", "Title 3"],
    login : function() {
        console.log ("Ulogovani ste");
    },
    logBlogs : function (){
        this.blogs.forEach( b => {
            console.log(b);
        })
    }
}

let user1 = {
    username : "JelenaMatejic",
    age : 25,
    blogs: [blog1, blog2, blog3],

    logBlogs: function(){
        this.blogs.forEach( b => {
            console.log(b);
        });
    },

    logTitleBlogs: function(){
        this.blogs.forEach (b => {
            console.log(b.title);
        });
    }

};
let user2 = {
    username : "PeraPeric",
    age : 16,
    blogs: [blog1, blog2]
};
let user3 = {
    username : "MileKitic",
    age : 29,
    blogs: [blog1, blog3]
};

console.log(user.username);

let arrBlogs = user.blogs;
// Ispis niza blogova 

for (let i = 0; i < arrBlogs.length; i++){
    console.log (`Naslov bloga je: ${arrBlogs[i]}`);
}

// Ispis niza bloga foreach metodom
user.blogs.forEach(blog => {
    console.log(blog);
}  );

// Poziv metode
user.login();

// Poziv unutar metoda
user.logBlogs();

// Niz objekata
let blogs = [blog1, blog2, blog3];

// Iteracija for petljom nizom objekata
for(let i = 0; i < blogs.length; i++) {
    //console.log(blogs[i].title);
    console.log(blogs[i]["title"]);
}



// Iteracija foreach nizom objekata
blogs.forEach( blog => {
    console.log(blog);
})

// Iteracija foreach nizom objekata - ispisivanje naslova
console.log(blog1.title);

blogs.forEach( blog => {
    console.log(blog.title);
});


// Napraviti arrow funkciju kojoj se prosledjuje niz objekata, a ona vraca ukupan broj lajkova
let ukupnoLajkova = blogs => {
    let ukupno = 0;
    blogs.forEach(elem => {
    ukupno += elem.likes;
    });
    return ukupno;
};
console.log(ukupnoLajkova(blogs));

//

let prosecnoLajkova = niz => {
    let ukupno = ukupnoLajkova(niz);
    let broj = niz.length;
    let avg = ukupno/broj;
    return avg;
}
console.log(prosecnoLajkova(blogs));

let prosekL = niz => ukupnoLajkova(niz) / niz.length;

console.log(prosekL(blogs));

let prosekD = niz => {
        let ukupno = 0;
        niz.forEach(elem => {
            ukupno += elem.dislikes;
            });
        let broj = niz.length;
        let avg = ukupno/broj;
        return avg;
    }



// 
let visePozitivnih = niz => {
    niz.forEach( item => {
        let poz = item.likes;
        let neg = item.dislikes;
        if (poz > neg) {
            console.log(item.title);
        }
    });
}

visePozitivnih(blogs);

// Napisati arrow funkciju kojoj se prosledjuje niz objekata.

let uzvicnik = niz => {
    blogs.forEach(blog => {
        let naslov = blog.title;
        if(naslov.endsWith("!")) {
            console.log(naslov);
        }
    });
}
uzvicnik(blogs);


// 

console.log (user1);
user1.logBlogs();
user1.logTitleBlogs();

// Niz korisnika

let users = [user1, user2, user3];

// Ispisati imena onih autora koji imaju manje od 18god

let maloletni = niz => {

niz.forEach(elem => {
    let god = elem.age;
    if (god < 18) {
        console.log(elem.username);
    }
});
}
maloletni(users);

// vise od 50 lajkova 

let popularniBlogovi = korisnici => {
    korisnici.forEach( k => {
        k.blogs.forEach( b => {
            if (b.likes > 50){
                console.log(b.title);
            }
        });
    });
}

popularniBlogovi(users);

// Ispisati sve blogove autora ciji je username "JelenaMatejic"
let blogoviAutora = ( korisnici, imeKorisnika) => {
    korisnici.forEach( k => {
        if(k.username == imeKorisnika) {
            k.blogs.forEach( b => {
                console.log(b.title);
            });
        }
    });
}
blogoviAutora(users, "MileKitic");

// Ispisati imena autora koji imaju vise od n broja za blogove koje su napisaki

let popularniAutori = (autori, n) => {
    autori.forEach( a => {
        let sumLikes = 0;
        a.blogs.forEach( b => {
            sumLikes += b.likes;
        });
        if (sumLikes > n) {
            console.log(a.username);
        }
    });
}
popularniAutori(users, 200);

// 

let superBlog = niz => { 
    let br = 0;
    let sumDis = 0;
    let sum = 0;

    niz.forEach(a => {
        let nizBlogova = a.blogs;
        nizBlogova.forEach(b => {
            br++;
            sum += b.likes;
            sumDis += b.dislikes;

        });
    });
    let avgLikes = sum / br;
    let avgDislikes = sumDis / br;

    niz.forEach( a => {
        a.blogs.forEach(b => {
            if( avgLikes < b.likes && avgDislikes > b.dislikes) {
                console.log(b.title);
            }
        });
    });
}

superBlog(users);