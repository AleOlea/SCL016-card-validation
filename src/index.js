
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
    alert("validando card nro:" + creditCard)


    

//a partir de este elemento que agregue voy a crear un objeto



//trying to display cc card number entered.
/*let showDigits = document.getElementById("digits")
showDigits.addTextContent(creditCard);*/
    
    
    }












    
    
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




