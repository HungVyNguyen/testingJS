console.log("jeg er i guessthenumber")



const lblMessage = document.querySelector(".message");
console.log(lblMessage);
console.log(lblMessage.textContent);

const lblNumber = document.querySelector(".number");
console.log(lblNumber);

const lblScore = document.querySelector(".score");

console.log(lblScore);

let inpGuess = document.querySelector(".guess");

let secretnumer = (Math.floor(Math.random()*20)) + 1;
let guessesLeft = 5;
let score = 0;

function out(text){
    console.log(text);
}

function youWin(){
    score += 1;
    document.querySelector(".score").textContent = `${score}`
}

function newgame(){

    document.querySelector(".number").textContent = "?";


    document.querySelector(".message").textContent = "Start guessing...";


    secretnumer = Math.floor(Math.random() * 20) + 1;
    console.log("New secret number:", secretnumer);


    guessesLeft = 5;
    document.querySelector(".guessesleft").textContent = `${guessesLeft}`;



    game();
}
function guesses(){
     guessesLeft -= 1;
     document.querySelector(".guessesleft").textContent = `${guessesLeft}`
    if (guessesLeft <= 0) {
        document.querySelector(".guessesleft").textContent = "No more guesses!";
        document.querySelector(".message").textContent = "Game Over 💀💀💀"

        //highscore ting
        HS = document.querySelector(".highscore").textContent;
        score = document.querySelector(".score").textContent;

        HS = Number(HS); // Convert to number
        score = Number(score); // Convert to number

        let now = new Date();
        let hours = now.getHours();    // Hours (0-23)
        let minutes = now.getMinutes(); // Minutes (0-59)
        let seconds = now.getSeconds(); // Seconds (0-59)

        if (HS < score) {
            document.querySelector(".highscore").textContent = `${score}, time: ${hours}:${minutes}:${seconds}`;
        }
        score = 0;
        document.querySelector(".score").textContent = `${score}`




    }
}


console.log(secretnumer);

function game(){
    document.querySelector(".btn.again").onclick = function (){
        newgame()
    }
    document.querySelector(".btn.check").onclick = function (){
        inpGuess = document.querySelector(".guess");
        const guess = parseInt(inpGuess.value,10);
        console.log(typeof guess , guess);
        if(guess === secretnumer){
            document.querySelector(".message").textContent = "you guessed right!!";
            console.log("your guess was:", guess , "and the number was" , secretnumer);
            document.querySelector(".number").textContent = `${secretnumer}`
            youWin();
            //newgame(); kan godt gøres, men new game fjerner vinder tekst
        }else {
            guesses();
        }


    }


}

game();
