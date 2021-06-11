let secretNumber=getRandomInt(1,10);
    console.log(secretNumber);
    function getRandomInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
let attempts=3



document.querySelector(".check").onclick=function(){
    let userNumber=document.querySelector(".number").value;
    if(userNumber==secretNumber){
        console.log("Вы угадали");
        document.querySelector(".hint").innerHTML=" Вы угадали";
        document.querySelector(".number").disabled=true;
        document.querySelector(".check").disabled=true;
    }

    if(userNumber!=secretNumber){
        console.log("Вы проиграли");
    }
    if(userNumber<secretNumber){
        console.log("Секретное чисто больше");
        document.querySelector(".hint").innerHTML=" Секретное число больше";
        attempts=attempts-1;
        document.querySelector(".attempts").innerHTML=attempts;
    }
    if(userNumber>secretNumber){
        console.log("Секретное число меньше");
        document.querySelector(".hint").innerHTML=" Секретное число меньше";
        attempts=attempts-1;
        document.querySelector(".attempts").innerHTML=attempts;
    }
    if(attempts==0){
        document.querySelector(".hint").innerHTML="Вы проиграли";
        document.querySelector(".number").disabled=true;
        document.querySelector(".check").disabled=true;
    }
}
    
document.querySelector(".start").onclick=function(){
    secretNumber=getRandomInt(1,10);
    attempts= 3;
    document.querySelector(".attempts").innerHTML=attempts;
    document.querySelector(".number").disabled=false;
    document.querySelector(".check").disabled=false;
}
