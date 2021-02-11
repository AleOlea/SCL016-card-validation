import validator from './validator.js';

let btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", clickbtnValidar);

function clickbtnValidar(event) {
  event.preventDefault();
  let creditCard = document.getElementById("creditCard").value;

  console.log(creditCard);

  document.getElementById("detalle").innerText = validator.isValid(creditCard);


  if (creditCard.length < 13) {
    alert("Please enter a card number");
  }

 //how to refresh the box?

/*
  let refresh = document.getElementById("refresh");
  refresh.addEventListener("click", )

  /*let maskD = validator.maskify(creditCard);
  
  console.log(maskD)*/

};




























