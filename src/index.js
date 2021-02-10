import validator from './validator.js';

let btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", clickbtnValidar);

function clickbtnValidar(event){
  event.preventDefault();
  let creditCard = document.getElementById("creditCard").value;
  console.log(creditCard);

  //if (creditCard < 10) {
    alert("Please, Enter a Credit Card Number");
  //


  document.getElementById("detalle").innerText =  validator.isValid(creditCard);
};
 
  






  /*function maskify(creditCard) {
    let dd = creditCard.toString();
    let hash = creditCard.replace((/./g), '#');
    for (let i = (hash.length - 4); i < hash.length; i++) {
        hash[i] = dd[i];
    }
    return hash;}


  /*function maskify(creditCard) {
    return cr.replace(/.(?=.{4})/g, "#");*/


 



 












