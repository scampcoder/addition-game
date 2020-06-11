let number1;
let number2;

number1 = Math.floor(Math.random() * 10 + 1); //(Math.floor)return largest integer that is <= the given number
number2 = Math.floor(Math.random() * 10 + 1); //(Random number * 10) & increase number by 1 each time
document.getElementById("number1").innerHTML = number1; //place the new variables in the HTML
document.getElementById("number2").innerHTML = number2;

let answer = number1 + number2;

const checkAnswer = document.querySelector("input[type=text]");
let value = checkAnswer.value;
const button = document.querySelector("input[type=button][value=CHECK]"); //make sure we are selecting the correct button with the value of 'CHECK'

btn.onclick = function () {
  value = checkAnswer.value;
  if (value == answer) {
    //if user answer is correct
    alert("You are correct!");
  } else {
    alert("Bummer! The right answer is " + answer + ".");
  }
  document.querySelector("input[type=text]").value = "";
  document.getElementById("number1").innerHTML = "";
  document.getElementById("number2").innerHTML = "";
  number1 = Math.floor(Math.random() * 10 + 1);
  number2 = Math.floor(Math.random() * 10 + 1);
  document.getElementById("number1").innerHTML = number1;
  document.getElementById("number2").innerHTML = number2;

  answer = number1 + number2;
};
