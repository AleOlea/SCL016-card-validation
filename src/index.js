import validator from './validator.js';

//Getting # "btnValidar" button "Validate"
let btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", clickbtnValidar);//when"click" =>function "clickbtnValidar" //


//Getting user input value for Luhn al.
function clickbtnValidar(event) {
    event.preventDefault();
    let creditCardNumber = document.getElementById("creditCard").value;//let "creditCardNumber" to be used on validator
    console.log(creditCardNumber);

//red/green button "Results" 
let detalle = document.getElementById("detalle");
let validResult = validator.isValid(creditCardNumber);//result from validator
detalle.innerText = validResult;
    if (validResult === "Valid Card") {
    detalle.style.color = "#00ff00";
    } else {
    detalle.style.color = "red";
    }

//Refresh box "Credit Card" by clicking "Start Again".
let refresh = document.getElementById("refresh");
   refresh.addEventListener("click", function () {
   detalle.innerText = "Result";
   detalle.style.color = "black";


//creditCard box clear/
let creditCard = document.getElementById("creditCard")
   creditCard.value = "";
})
   
//Return maskify "Credit Card" box.
let maskD = validator.maskify(creditCardNumber) 
document.getElementById("creditCard").value = maskD;    
/*console.log(maskD)*/
  }


