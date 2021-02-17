import validator from './validator.js';

//Getting # "btnValidar".
let btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", clickbtnValidar);//when"click" start function "clickbtnValidar" //


//To get input value.
function clickbtnValidar(event) {
    event.preventDefault();//prevents form from submiting.
    let creditCardNumber = document.getElementById("creditCard").value;
/*console.log(creditCardNumber);*/

    let detalle = document.getElementById("detalle");
    /*let creditCard = document.getElementById("creditCard")*/
    

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
let creditCard = document.getElementById("creditCard")//change after spec
  creditCard.value="";
  document.getElementById("creditCard").value = "";
})
   
//Return maskify input on"Credit Card" box.
let maskD = validator.maskify(creditCardNumber) 
    document.getElementById("creditCard").value = maskD; 

/*console.log(maskD)*/
  }


