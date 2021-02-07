
/*import validator from"./validator.js"; */

/* 
Aqui interacción DOM (seleccionar, actualizar, manipular elementos y eventos). 
Invocar las funciones isValid y maskify 
para actualizar resultado en pantalla (UI).*/


//load page and execute function
window.onload = iniciar;


function iniciar() {
let btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", clickbtnValidar);/*"clickbtnValidar" function, created line 21*/
};

function clickbtnValidar(event) {
    event.preventDefault();
    let creditCard = document.getElementById("creditCard").value;
    console.log(creditCard);
    /*alert("validando card nro:" + creditCard)*/

    
 
    let digits = creditCard.split("");
    if (digits.length % 2 === 0) {
        digits = digits.map((digit, idx) => idx % 2 === 0 ? digit * 2 : digit);
      } else {
        digits = digits.map((digit, idx) => idx % 2 === 1 ? digit * 2 : digit);
      }
      
    console.log(digits)
    
   
}


/*
for(let i = 0; i < creditCard.length; i++){
    let card = creditCard[i];
    /*console.log(i)*/












    
    
    // function to display card number on screen, it is not escential
    /*function showCard() {
        let numbers = document.getElementById("numbers");
        let html = " ";
        for (let creditCard of digits) {
            html += creditCard;
            
        }
        showCard.innerHtml = html;
        
    }*/
    


        
   


    

//Codigo que me dio domi para que  no se fuera función, la palabra "event" y la linea event.preventDefault()"
/*function clickbtnValidar(event) {
    event.preventDefault();" */


/* OBJECTIVE:
HOW I GET THE INPUT NUMBER.
HOW DO I WORK WITH THAT NUMBER TO TRANSFORM IN STRING, SPLIT, INVERSE?.


/*PSEUDO CODIGO
   //BOILER PLATE//
    const validator = {
 //BOILER PLATE// 

    isValid(ccValue) {

    let digits = ccValue.split("").

        const ccSplit= function (ccValue) {
        ccValue.toString()
        ccSplit()
        inverse()
        map() with luhn function
    }

      };
      
      export default validator;
      */




