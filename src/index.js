
/*import validator from"./validator.js"; */

/* 
Aqui interacción DOM (seleccionar, actualizar, manipular elementos y eventos). 
Invocar las funciones isValid y maskify 
para actualizar resultado en pantalla (UI).*/

for (let i= 0; i <= 16; i++ ) {
    console.log(i)
}




window.onload = iniciar;
function iniciar() {
let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", clickBtnCalcular);
};

function clickBtnCalcular(event) {
    event.preventDefault();
    let creditCard = document.getElementById("creditCard");
    let ccValue = creditCard.value;
    console.log(ccValue);
    alert("validando card nro:" + ccValue)
    
    }

    //que pasa si escribo un document write con el numero de la tarjeta?




