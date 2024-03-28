// Event Bubbling li event triggers ul & div event 

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function() {
    console.log("div clicked");
});

ul.addEventListener("click", function(event) {
    event.stopPropagation(); //stop event bubbling
    console.log("ul clicked");

});

for(li of lis) {
    li.addEventListener("click", function(event) {
        event.stopPropagation();
        console.log("div li clicked");
    });
}