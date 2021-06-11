document.querySelector(".buttoms").onclick = function () {
    let target = event.target;
    let value = "";
    let input = document.querySelector("#expression");
    //дз 4
    let operators = ["÷", "x", "+", "-", ","];
  
    if (target.classList.contains("black")) {
      value = target.innerHTML;
        //дз 2
      if (input.value == "0") {
        input.value = value;
      } else {
        input.value += value;
      }
  
    } else if (target.classList.contains("yellow")) {
      //получаем выражение в input
      let expression = input.value;
      //получаем последний символ из этого выражения
      let lastChar = expression[expression.length - 1];
      value = target.innerHTML;
      //проверяем что последний символ - это один из операторов
      //если да, то заменим его на новый
      if (operators.indexOf(lastChar) != -1) {
        //заменяем последний символ в выражении на новый символ
        //.replace непосредственно заменяет
        //в скобках первый параметр - это регулярное выражение, я бы без объяснений дал
        //второй параметр - новое значение
        expression = expression.replace(/.$/, value);
        input.value = expression;
      } else {
        input.value += value;
      }
  
    } else if (target.classList.contains("calculation")) {
      let expression = input.value;
      let result = eval(expression);
        input.value = result;
    } 
    //Дз 3
    else if (target.classList.contains("ac")) {
      input.value = "0";
    }
  };
    