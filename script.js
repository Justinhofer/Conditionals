var numberoneEle = document.body.querySelector(".numberone");
var operatorEle = document.body.querySelector(".operator");
var numbertwoEle = document.body.querySelector(".numbertwo");
var sumEle = document.body.querySelector(".sum");

var numberonePrompt = Number(prompt("Enter the first number"));
var operatorPrompt = prompt("Enter an operator");
var numbertwoPrompt = Number(prompt("Enter the second number"));

var summation = numberonePrompt + numbertwoPrompt;

numberoneEle.innerHTML= "The number " + numberonePrompt;
operatorEle.innerHTML= operatorPrompt
numbertwoEle.innerHTML= "and the number " + numbertwoPrompt;
sumEle.innerHTML= "Equals " + summation;

if(!isNaN(numberonePrompt)){
  numberoneEle.innerHTML= numberonePrompt;
}else{
  numberoneEle.innerHTML="You didn't enter a number! Re run program";
}

if(!isNaN(numbertwoPrompt)){
  numbertwoEle.innerHTML= numbertwoPrompt
}else{
  numbertwoEle.innerHTML= "You didn't enter a number! Re run program";
  sumEle.innerHTML="The equation is unsolvable. Please try again"
}