let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "blue"]

let started = false;
let level = 0;
let score = 5; //let 5 is initial high score

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

// start game
document.addEventListener("keypress", function() {
    if(started == false){
        // console.log("game is started");
        started = true;
        
        levelUp();
    }
    
});


// flash btn & level up
function levelUp() {
    userSeq = [];
    level++;
    
    // highest score
    if(score < level) {
        score = level;
    }
    h3.innerHTML = `Highest Score is <b>${score}</b>`;

    h2.innerText = `Level ${level}`;

    // random btn choose
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randBtn);
    // console.log(randColor);
    gameSeq.push(randColor);
    // console.log(gameSeq);
    gameFlash(randBtn);
    
}

// flash btns
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

// btn event listner
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
    
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

// matching sequence
// add color in gameSequence, which is random
// add color in userSeq, which is pressed by user

function checkAns(idx) {
    // console.log("level", level);
    // let idx = level-1;
    
    if(userSeq[idx] === gameSeq[idx]) {
        // console.log("same value");
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        
        
        reset();
    }

}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
