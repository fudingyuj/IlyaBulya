document.querySelector(".add1").onclick = function(){
    let numA = getRandomInt(0, 10);
    let numB = getRandomInt(0, 10);
    let correctAnswer = numA + numB;
    let userAnswer = prompt(numA + "+" + numB + "=", ""); 
    checkAnswer(correctAnswer, userAnswer)
}
document.querySelector(".add2").onclick = function(){
    let numA = getRandomInt(0, 50);
    let numB = getRandomInt(0, 50);
    let correctAnswer = numA + numB;
    let userAnswer = prompt(numA + "+" + numB + "=", ""); 
    checkAnswer(correctAnswer, userAnswer)
}
document.querySelector(".add3").onclick = function(){
    let numA = getRandomInt(0, 499);
    let numB = getRandomInt(0, 499);
    let correctAnswer = numA + numB;
    let userAnswer = prompt(numA + "+" + numB + "=", ""); 
    checkAnswer(correctAnswer, userAnswer)
}
document.querySelector(".substract1").onclick = function(){
    let numA = getRandomInt(0, 10);
    let numB = getRandomInt(0, 10);
    let correctAnswer = numA - numB;
    let userAnswer = prompt(numA + "-" + numB + "=", ""); 
    checkAnswer(correctAnswer, userAnswer)
}
document.querySelector(".substract2").onclick = function(){
    let numA = getRandomInt(0,50);
    let numB = getRandomInt(0, 50);
    let correctAnswer = numA - numB;
    let userAnswer = prompt(numA + "-" + numB + "=", ""); 
    checkAnswer(correctAnswer, userAnswer)
}
document.querySelector(".substract3").onclick = function(){
    let numA = getRandomInt(0, 499);
    let numB = getRandomInt(0, 499);
    let correctAnswer = numA - numB;
    let userAnswer = prompt(numA + "-" + numB + "=", ""); 
    checkAnswer(correctAnswer, userAnswer)
}
document.querySelector(".multiply1").onclick = function(){
    let numA = getRandomInt(0, 10);
    let numB = getRandomInt(0, 10);
    let correctAnswer = numA * numB;
    let userAnswer = prompt(numA + "*" + numB + "=", ""); 
    checkAnswer(correctAnswer, userAnswer)
}
document.querySelector(".multiply2").onclick = function(){
    let numA = getRandomInt(0, 50);
    let numB = getRandomInt(0, 50);
    let correctAnswer = numA * numB;
    let userAnswer = prompt(numA + "*" + numB + "=", ""); 
    checkAnswer(correctAnswer, userAnswer)
}
document.querySelector(".multiply3").onclick = function(){
    let numA = getRandomInt(0, 499);
    let numB = getRandomInt(0, 499);
    let correctAnswer = numA * numB;
    let userAnswer = prompt(numA + "*" + numB + "=", ""); 
    checkAnswer(correctAnswer, userAnswer)
}
document.querySelector(".devide1").onclick = function(){
    let numA = getRandomInt(0, 10);
    let numB = getRandomInt(0, 10);
    let correctAnswer = numA / numB;
    correctAnswer = Math.round(correctAnswer);
    let userAnswer = prompt(numA + "/" + numB + "=", ""); 
    checkAnswer(correctAnswer, userAnswer)
}
document.querySelector(".devide2").onclick = function(){
    let numA = getRandomInt(0, 100);
    let numB = getRandomInt(0, 10);
    let correctAnswer = numA / numB;
    correctAnswer = Math.round(correctAnswer);
    let userAnswer = prompt(numA + "/" + numB + "=", ""); 
    checkAnswer(correctAnswer, userAnswer)
}
document.querySelector(".devide3").onclick = function(){
    let numA = getRandomInt(0, 999);
    let numB = getRandomInt(0, 99);
    let correctAnswer = numA / numB;
    correctAnswer = Math.round(correctAnswer);
    let userAnswer = prompt(numA + "/" + numB + "=", ""); 
    checkAnswer(correctAnswer, userAnswer)
}
function getRandomInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
function checkAnswer(correctAnswer, userAnswer){
     if (correctAnswer == userAnswer) {
        alert("???? ????????");
        correct++;
    } else {
        alert("???? ???? ????????. " + "???????????????????? ?????????? " + correctAnswer);
        mistake++;
    }  
}
let correct = 0;
let mistake = 0;
document.querySelector(".check").onclick = function(){
    alert("??????????:\n" + correct + " ???????????????????? ??????????????\n " + mistake + " ???????????????????????? ??????????????");
    switch(correct){
        case 3:
            alert("???????? ???????????????????? ??????????????\n" + "???????????????????????? ??????");
            break;
        case 5:
            alert("?????????????????? ?? ?????? ???? ????????");
            break;
        case 10:
            alert("??????????????");
            break;
    }
}
document.querySelector(".reset").onclick = function(){
    correct = 0; 
    mistake = 0;
}
    