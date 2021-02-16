import validator from './validator.js';

//Getting element´s item event "btnValidar" to trigger funtion
let btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", clickbtnValidar);//when"click" function "clickbtnValidar2 //


//Defining "clickbtnValidar" function to get user input value(text).
function clickbtnValidar(event) {
    event.preventDefault();//prevents form from submiting.
    let creditCardNumber = document.getElementById("creditCard").value;//user input text//
    console.log(creditCardNumber);


//UI red/green results in box "Results" from "validator.isValid(creditCardnumber)" function is in validator.js.line 1 and 3.
let validResult = validator.isValid(creditCardNumber);
    document.getElementById("detalle").innerText = validResult;
    if (validResult === "Valid Card") {
    detalle.style.color = "#00ff00";
    } else {
    detalle.style.color = "red";
    }

//Refresh box "Credit Card" by clicking "Start Again".
let refresh = document.getElementById("refresh");
   refresh.addEventListener("click", function () {
   document.getElementById("detalle").innerText = "Result";
   detalle.style.color = "black";


//Empty #creditCard input*/
/*document.getElementById("creditCard").value = "";*/
   creditCard.value=""; 
   })
   

//Return maskify input on"Credit Card" box.
let maskD = validator.maskify(creditCardNumber);  
    document.getElementById("creditCard").value = maskD;
    console.log(maskD)
  };


