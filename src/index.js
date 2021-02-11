import validator from './validator.js';

let btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", clickbtnValidar);

function clickbtnValidar(event) {
  event.preventDefault();
  let creditCardNumber = document.getElementById("creditCard").value;

  console.log(creditCardNumber);
  let validResult = validator.isValid(creditCardNumber);

  document.getElementById("detalle").innerText = validResult;

  if (validResult === "Valid Card") {
    detalle.style.color = "#00ff00";
  } else {
    detalle.style.color = "red";
  }

  if (creditCardNumber.length < 13) {
    alert("Please enter a card number");
  }

  //refresh the box



    let refresh = document.getElementById("refresh");
    refresh.addEventListener("click", function(){
    document.getElementById("detalle").innerText= "Result";
    detalle.style.color = "black";
    document.getElementById("creditCard").value = "";//empty input field
    })
  
    let maskD = validator.maskify(creditCardNumber);
    document.getElementById("creditCard").value= maskD;
    console.log(maskD)

};






























