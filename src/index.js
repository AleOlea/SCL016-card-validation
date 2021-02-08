
/*import validator from"./validator.js"; */

/* 
Aqui interacción DOM (seleccionar, actualizar, manipular elementos y eventos). 
Invocar las funciones isValid y maskify 
para actualizar resultado en pantalla (UI).*/


//load page and execute function
window.onload = iniciar;

function iniciar() {
let btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", clickbtnValidar);/*"clickbtnValidar" function created line 18*/
};

function clickbtnValidar(event) {
    event.preventDefault();
    let creditCard = document.getElementById("creditCard").value;

  


    console.log(creditCard);
    /*alert("validando card nro:" + creditCard)*/

//To see the number on screen//
    let detalle = document.getElementById("detalle");
    detalle.innerHTML = creditCard;


    let digits = creditCard.split("");
    if (digits.length % 2 === 0) {
        digits = digits.map((digit, idx) => idx % 2 === 0 ? digit * 2 : digit);
      } else {
        digits = digits.map((digit, idx) => idx % 2 === 1 ? digit * 2 : digit);
      }
      console.log(digits)  
}







//testing for masking//
/*for(let i = 0; i < creditCard.length; i++){
    let card = creditCard[i];
    /*console.log(i)*/


      /*export default validator;*/


