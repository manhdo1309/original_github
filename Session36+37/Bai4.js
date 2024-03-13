let number1= document.getElementById("number1");
let number2= document.getElementById("number2");
let sum = document.getElementById("sum");
function myFunction(){
    let value1 = parseInt(number1.value) ;
    let value2 = parseInt(number2.value) ;
    let total = value1 + value2;
    sum.value = total;
}