let number1;
let number2;

number1 = Math.floor((Math.random() * 10) + 1); //(Math.floor)return largest integer that is <= the given number
number2 = Math.floor((Math.random() * 10) + 1); //(Random number * 10) & increase number by 1 each time
document.getElementById('number1').innerHTML = number1; //place the new variables in the HTML
document.getElementById('number2').innerHTML = number2;

const answer = number1 + number2;

const checkAnswer = document.querySelector('input[type=text]');
const value = checkAnswer.value;
const button = document.querySelector('input[type=button][value=CHECK]'); //make sure we are selecting the correct button with the value of 'CHECK'
