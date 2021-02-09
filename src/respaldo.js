
const validator = {

  isValid: function (creditCard) {

    let digits = creditCard.split("");
    let sum = 0;

    for (let i = 0; i < creditCard.length; i++) {
      digits[i] = parseInt(digits[i]);
      console.log(digits[i])

      if (i % 2 === 0) {
        digits[i] *= 2
        if (digits[i] > 9) {
          digits[i] -= 9
        }
      }


      /*console.log(validator);*/

      /* interacción DOM (seleccionar, actualizar, manipular elementos y eventos). 
      Invocar las funciones isValid y maskify 
      para actualizar resultado en pantalla (UI).
      
      
      window.onload = iniciar;
      function iniciar() {
      let btnValidar = document.getElementById("btnValidar");
      btnValidar.addEventListener("click", clickbtnValidar);/*"clickbtnValidar" function created line 18
      };
      
      function clickbtnValidar(event) {
          event.preventDefault();
          let creditCard = document.getElementById("creditCard").value;
      
        console.log(creditCard);
          let detalle = document.getElementById("detalle");
          detalle.innerHTML = creditCard;
      
          let digits = creditCard.toString().split("").map(Number);
          if (digits.length % 2 === 0) {
              digits = digits.map((digit, idx) => idx % 2 === 0 ? digit * 2 : digit);
            } else {
              digits = digits.map((digit, idx) => idx % 2 === 1 ? digit * 2 : digit);
            }
            console.log(digits) 
      
            digits = digits.map(digit => digit > 9 ? digit - 9 : digit); 
            console.log(digits);
      
            const sum = digits.reduce((acc, digit) => acc += digit, 0);
            console.log(sum);
      
            const isValid =  sum % 10 === 0;
            console.log(isValid);
          }
      
          //mensaje status tarjeta//
      
      
      
      
      
      window.onload = iniciar;
      function iniciar() {
      let btnValidar = document.getElementById("btnValidar");
      btnValidar.addEventListener("click", clickbtnValidar);/*"clickbtnValidar" function created line 18*/
    };

    function clickbtnValidar(event) {
      event.preventDefault();
      let creditCard = document.getElementById("creditCard").value;

      console.log(creditCard);
      let detalle = document.getElementById("detalle");
      detalle.innerHTML = creditCard;

      let digits = creditCard.toString().split("").map(Number);
      if (digits.length % 2 === 0) {
        digits = digits.map((digit, idx) => idx % 2 === 0 ? digit * 2 : digit);
      } else {
        digits = digits.map((digit, idx) => idx % 2 === 1 ? digit * 2 : digit);
      }
      console.log(digits)

      digits = digits.map(digit => digit > 9 ? digit - 9 : digit);
      console.log(digits);

      const sum = digits.reduce((acc, digit) => acc += digit, 0);
      console.log(sum);

      const isValid = sum % 10 === 0;
      console.log(isValid);
    }

/* por si aca de nuev copiado AQUI
import validator from './validator.js';
/*console.log(validator);*/

/* interacción DOM (seleccionar, actualizar, manipular elementos y eventos).
Invocar las funciones isValid y maskify
para actualizar resultado en pantalla (UI).


window.onload = iniciar;
function iniciar() {
let btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", clickbtnValidar);/*"clickbtnValidar" function created line 18
};

function clickbtnValidar(event) {
    event.preventDefault();
    let creditCard = document.getElementById("creditCard").value;

  console.log(creditCard);
    let detalle = document.getElementById("detalle");
    detalle.innerHTML = creditCard;

    let digits = creditCard.toString().split("").map(Number);
    if (digits.length % 2 === 0) {
        digits = digits.map((digit, idx) => idx % 2 === 0 ? digit * 2 : digit);
      } else {
        digits = digits.map((digit, idx) => idx % 2 === 1 ? digit * 2 : digit);
      }
      console.log(digits)

      digits = digits.map(digit => digit > 9 ? digit - 9 : digit);
      console.log(digits);

      const sum = digits.reduce((acc, digit) => acc += digit, 0);
      console.log(sum);

      const isValid =  sum % 10 === 0;
      console.log(isValid);
    }



/*TEORIA 2//import validator from './validator.js';*/

/*let btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", clickbtnValidar);

function clickbtnValidar(event){
  event.preventDefault();
  let creditCard = document.getElementById("creditCard").value;
  console.log(creditCard);

  document.getElementById("detalle").innerText =  validator.isValid(creditCard);

}*/

/*console.log(validator);*/

/* interacción DOM (seleccionar, actualizar, manipular elementos y eventos).
Invocar las funciones isValid y maskify
para actualizar resultado en pantalla (UI).*/
    //mensaje status tarjeta//

    //Maskyfy//














/*console.log(validator);*/

/* interacción DOM (seleccionar, actualizar, manipular elementos y eventos).
Invocar las funciones isValid y maskify
para actualizar resultado en pantalla (UI).


window.onload = iniciar;
function iniciar() {
let btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", clickbtnValidar);/*"clickbtnValidar" function created line 18
};

function clickbtnValidar(event) {
    event.preventDefault();
    let creditCard = document.getElementById("creditCard").value;

  console.log(creditCard);
    let detalle = document.getElementById("detalle");
    detalle.innerHTML = creditCard;

    let digits = creditCard.toString().split("").map(Number);
    if (digits.length % 2 === 0) {
        digits = digits.map((digit, idx) => idx % 2 === 0 ? digit * 2 : digit);
      } else {
        digits = digits.map((digit, idx) => idx % 2 === 1 ? digit * 2 : digit);
      }
      console.log(digits)

      digits = digits.map(digit => digit > 9 ? digit - 9 : digit);
      console.log(digits);

      const sum = digits.reduce((acc, digit) => acc += digit, 0);
      console.log(sum);

      const isValid =  sum % 10 === 0;
      console.log(isValid);
    }

    //mensaje status tarjeta//














