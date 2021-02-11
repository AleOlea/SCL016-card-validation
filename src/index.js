import validator from './validator.js';

let btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", clickbtnValidar);

function clickbtnValidar(event) {
  event.preventDefault();
  let creditCard = document.getElementById("creditCard").value;

  console.log(creditCard);
  let validResult = validator.isValid(creditCard);

  document.getElementById("detalle").innerText = validResult;

  if (validResult === "Valid Card") {
    detalle.style.color = "#00ff00";
  } else {
    detalle.style.color = "red";
  }


  if (creditCard.length < 13) {
    alert("Please enter a card number");
  }

  //how to refresh the box?

  
    let refresh = document.getElementById("refresh");
    refresh.addEventListener("click", function(){
    document.getElementById("detalle").innerText= "Result";
    })
  
    /*let maskD = validator.maskify(creditCard);
    
    console.log(maskD)*/

};






























