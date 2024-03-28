let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    // console.log(inp.value);
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn); //add delete button inside li

    ul.appendChild(item); //add li inside ul
    inp.value = "";

});


// this code works only for existing li elements, not for newly added li elements

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function() {
//         // console.log("deleted");;

//         let parent = this.parentElement;
//         console.log(parent);
//         parent.remove(); //delete activity
//     });
// }


// Event Delegation using event bubbling
ul.addEventListener("click", function(event) {
    // console.log(event.target); //target element
    // console.log("button clicked");
    console.log(event.target.nodeName); //it can be button, input, or anything clicked

    if(event.target.nodeName == "BUTTON") {
       let listItem = event.target.parentElement;
    //    console.log(listItem);
        listItem.remove();
    }
});

