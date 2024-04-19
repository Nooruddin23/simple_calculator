
 import inquirer from "inquirer";

 const anwser = await inquirer.prompt([
  {message:"Enter firstNumber", type:"number", name:"firstNumber"},
  {message:"Enter secondNumber", type:"number", name:"secondNumber"},
  {
    message:"Select one of the operator",
    type:"list",
    name:"operator",
    choices:["Addition", "Subtraction", "Multiplication", "Division"]
  }
 ])

 //Conditional Statement

 if (anwser.operator === "Addition") {
  console.log(anwser.firstNumber + anwser.secondNumber)
 }
 else if (anwser.operator === "Subtraction") {
  console.log(anwser.firstNumber - anwser.secondNumber)
 }
 else if (anwser.operator === "Multiplication") {
  console.log(anwser.firstNumber * anwser.secondNumber)
 }
 else if (anwser.operator === "Division") {
  console.log(anwser.firstNumber / anwser.secondNumber)
 }
 else {
  console.log("Please select a valid operator")
 }
