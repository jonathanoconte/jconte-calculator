
//Get the elements
//result or output area
const result = document.getElementById("result");

//Store userinput
let output = [];

//update the calculator display
//if empty 0 else join the array and display
//sample output array ["1", "+", "2"], join("") converts it to "1+2" and display it
function updateDisplay(){
    //updated - to display with max of 14 characters
    if(output.length > 16){
        output.shift(); // remove the first element if max length
    }
        //Ternaty Operator
            // Syntax: condition ? expressionIfTrue : expressionIfFalse;
            result.innerText = output.length === 0 ? "0" : output.join("");
    
}

//add the number into a output array when the button is clicked
//after joining, it updates the displays
//sample, click btn1 twice and btn2 once it displays "112"
//unfortuante it includes the operators, if you click add twice it display "++"
function addNUmberToDisplay(num){
        output.push(num);
        updateDisplay();
}

//number buttons
//each buttons calls addNUmberToDisplay(sum) when clicked
const btn1 = document.getElementById("btn1").onclick = function() {
    addNUmberToDisplay("1");
};
const btn2 = document.getElementById("btn2").onclick = function() {
    addNUmberToDisplay("2");
};
const btn3 = document.getElementById("btn3").onclick = function() {
    addNUmberToDisplay("3");
};
const btn4 = document.getElementById("btn4").onclick = function() {
    addNUmberToDisplay("4");
};
const btn5 = document.getElementById("btn5").onclick = function() {
    addNUmberToDisplay("5");
};
const btn6 = document.getElementById("btn6").onclick = function() {
    addNUmberToDisplay("6");
};
const btn7 = document.getElementById("btn7").onclick = function() {
    addNUmberToDisplay("7");
};
const btn8 = document.getElementById("btn8").onclick = function() {
    addNUmberToDisplay("8");
};
const btn9 = document.getElementById("btn9").onclick = function() {
    addNUmberToDisplay("9");
};
const btn0 = document.getElementById("btn0").onclick = function() {
    addNUmberToDisplay("0");
};

//operator buttons
//each buttons calls addNUmberToDisplay(sum) when clicked
const btnPlus = document.getElementById("btnPlus").onclick = 
function(){
    output.push("+");
    updateDisplay();
};
const btnMinus = document.getElementById("btnMinus").onclick = 
function(){
    output.push("-");
    updateDisplay();
};
const btnMultiply = document.getElementById("btnMultiply").onclick = 
function(){
    output.push("*");
    updateDisplay();
};
const btnDivide = document.getElementById("btnDivide").onclick = 
function(){
    output.push("/");
    updateDisplay();
};

//other buttons
//clear func
//this resets output and clears the display
const btnClear = document.getElementById("btnClear").onclick = 
function(){
    output=[];
    updateDisplay();
};

//equal func
//The eval() function calculate the result of the joined string/stored as strings
//If the calculation fails (eg. 1++2), it shows Error
const btnEqual = document.getElementById("btnEqual").onclick = 
function(){
    try{
        output = [eval(output.join(""))];
        updateDisplay();
    }
    catch(error){
        result.innerText = "Error";
        output = [];
    }
    
};

//To update:
//Avoid displaying multiple operators
//Set character limits to display - working...


