import validator from './validator.js';

//Getting # "btnValidar".

let btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", clickbtnValidar);//when"click" start function "clickbtnValidar" //


//Getting user input value.
function clickbtnValidar(event) {
    event.preventDefault();
    let creditCardNumber = document.getElementById("creditCard").value;
    console.log(creditCardNumber);

//UI red/green "Results" 
let detalle = document.getElementById("detalle");
let validResult = validator.isValid(creditCardNumber);
/*document.getElementById("detalle").innerText = validResult;/*Probando acortar variable deberia ser lo mismo*/
detalle.innerText = validResult;
    if (validResult === "Valid Card") {
    detalle.style.color = "#00ff00";
    } else {
    detalle.style.color = "red";
    }

//Refresh box "Credit Card" by clicking "Start Again".
let refresh = document.getElementById("refresh");
   refresh.addEventListener("click", function () {
   /*document.getElementById("detalle").innerText = "Result";*//*Probando acortar variable, deberia ser lo mismo*/
   detalle.innerText = "Result";
   detalle.style.color = "black";


//creditCard box clear/
let creditCard = document.getElementById("creditCard")//changed after spec
  creditCard.value = "";
  /*document.getElementById("creditCard").value = "";*/

})
   
//Return maskify input on"Credit Card" box.
let maskD = validator.maskify(creditCardNumber) 
document.getElementById("creditCard").value = maskD;    
console.log(maskD)
  }


