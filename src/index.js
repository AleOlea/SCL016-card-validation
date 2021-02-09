import validator from './validator.js';

let btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", clickbtnValidar);

function clickbtnValidar(event){
  event.preventDefault();
  let creditCard = document.getElementById("creditCard").value;
  console.log(creditCard);

  document.getElementById("detalle").innerText =  validator.isValid(creditCard);
 

  };

//Where to put mskify?
//function maskify(creditCard){creditCard = creditCard.replace(/\d(?=\d{4})/g, "*")}

 












