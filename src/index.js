import validator from './validator.js';

let btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", clickbtnValidar);

function clickbtnValidar(event) {
  event.preventDefault();
  let creditCard = document.getElementById("creditCard").value;

  console.log(creditCard);

  document.getElementById("detalle").innerText = validator.isValid(creditCard);

  //1. improve
  /*if (creditCard.length < 13) {
    alert("Please, enter a credit Card number");
  }*/
/*
  let maskD = validator.maskify(creditCard);
  
  console.log(maskD)*/

};




























