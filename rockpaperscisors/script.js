const userScoreSpan = document.getElementById("user_score");
const computerScoreSpan = document.getElementById("computer_score");
const scoreBoard = document.querySelector(".score");
const result = document.querySelector(".result > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
let userScore = 0;
let computerScore = 0;

function getComputerChoise(){
    const choises = ["r", "p", "s"];
    let randomNumber = Math.floor(Math.random()*3);
    return choises[randomNumber];
}
function convertToWord(letter){
    if(letter === "r") return "Камень";
    if(letter === "p") return "Бумага";
    if(letter === "s") return "Ножницы";
}
function win(userChoise, computerChoise){
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    result.innerHTML = convertToWord(userChoise) + " бьёт " + convertToWord(computerChoise) + ". Ты выиграл!";
}
function lose(userChoise, computerChoise){
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    result.innerHTML = convertToWord(userChoise) + " не бьёт " + convertToWord(computerChoise) + ". Ты проиграл!";
}
function tie(userChoise, computerChoise){
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    result.innerHTML = convertToWord(userChoise) + " не бьёт " + convertToWord(computerChoise) + ". Ничья!";
}
function game(userChoise){
    let computerChoise = getComputerChoise();
    switch(userChoise + computerChoise){
        case "rs":
        case "pr":
        case "sp":
            win(userChoise, computerChoise);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoise, computerChoise);
            break;
        case "ss":
        case "rr":
        case "pp":
            tie(userChoise, computerChoise);
            break;
    }
}
function main(){
    rock.addEventListener('click', function(){
        game("r");
    })
    paper.addEventListener('click', function(){
        game("p");
    })
    scissors.addEventListener('click', function(){
        game("s");
    })
}
main();