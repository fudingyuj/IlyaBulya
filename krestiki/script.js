let area = [
  ["*", "*", "*"],
  ["*", "*", "*"],
  ["*", "*", "*"],
];
let turn = 1;
let char = "X";
let column;
document.querySelector("table").onclick = function(){
  let cell = event.target;
  cell.innerHTML = char;
  let column = cell.cellIndex;
  let row = cell.parentElement.rowIndex;
  if(area[row][column] != "X" && area[row][column] != "0"){
    area[row][column] = char;
    cell.innerHTML = char;
  
    if(char === "X"){
        cell.style.backgroundColor = "gray"
        cell.style.color = "white";
    }
    else if(char === "0"){
        cell.style.backgroundColor = "brown"
        cell.style.color = "white";
    }
    if (checkWinner() === "X") {
        alert("Крестики победили");
    }
  
    if (checkWinner() === "0") {
        alert("Нолики победили");
    }
    turn = turn + 1
    changeChar();
  }
}
function changeChar(){
  if (turn % 2 === 1){
    char = "X";
  }else{
    char = "0";
  }
  document.querySelector("span").innerHTML = char;
}
function checkWinner(){
  if (area[0][0] == "X" && area[0][1] == "X" && area[0][2] == "X") {
      return "X";
    }
    if (area[1][0] == "X" && area[1][1] == "X" && area[1][2] == "X") {
      return "X";
    }
    if (area[2][0] == "X" && area[2][1] == "X" && area[2][2] == "X") {
      return "X";
    }
    if (area[0][0] == "X" && area[1][0] == "X" && area[2][0] == "X") {
      return "X";
    }
     if (area[0][1] == "X" && area[1][1] == "X" && area[2][1] == "X") {
      return "X";
    }
    if (area[0][2] == "X" && area[1][2] == "X" && area[2][2] == "X") {
      return "X";
    }
    if (area[0][0] == "X" && area[1][1] == "X" && area[2][2] == "X") {
      return "X";
    }
    if (area[0][2] == "X" && area[1][1] == "X" && area[2][0] == "X") {
      return "X";
    }
  if (area[0][0] == "0" && area[0][1] == "0" && area[0][2] == "0") {
      return "0";
    }
    if (area[1][0] == "0" && area[1][1] == "0" && area[1][2] == "0") {
      return "0";
    }
    if (area[2][0] == "0" && area[2][1] == "0" && area[2][2] == "0") {
      return "0";
    }
    if (area[0][0] == "0" && area[1][0] == "0" && area[2][0] == "0") {
      return "0";
    }
     if (area[0][1] == "0" && area[1][1] == "0" && area[2][1] == "0") {
      return "0";
    }
    if (area[0][2] == "0" && area[1][2] == "0" && area[2][2] == "0") {
      return "0";
    }
    if (area[0][0] == "0" && area[1][1] == "0" && area[2][2] == "0") {
      return "0";
    }
    if (area[0][2] == "0" && area[1][1] == "0" && area[2][0] == "0") {
      return "0";
    }
    return false;
}
function newGame(){
  let rows = document.querySelectorAll("tr");
  for(let i = 0; i < rows.length; i++){
    let row = rows[i];
    let cells = row.querySelectorAll("td");
    for(let j = 0; j < cells.length; j++){
      cells[j].innerHTML = "";
      area[i][j] = "";
      cells[j].style.backgroundColor = "white";
    }
  }
  turn = 1;
  char = "X";
  document.querySelector(".row").value = "";
  document.querySelector(".column").value = "";
  document.querySelector("span").innerHTML = char;
}
document.querySelector(".start").onclick = function(){
  newGame();
}