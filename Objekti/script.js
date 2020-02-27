let blog = {
    title : "Moj prvi blog",
    content : "Neki tekst...",
    author : "AP"
};

console.log(blog);
console.log(typeof blog);

// Pristupanje osobini 
// 1. nacin 
console.log(blog.title);
// 2. nacin
console.log(blog['title']);

blog.title = "Moj prvi blog!124";

console.log(blog);

