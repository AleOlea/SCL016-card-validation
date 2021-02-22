import validator from './validator.js';

//Getting # "btnValidar"
let btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", clickbtnValidar);//when"click" =>function "clickbtnValidar"


//Getting user input.
function clickbtnValidar(event) {
    event.preventDefault();
    let creditCardNumber = document.getElementById("creditCard").value;//let "creditCardNumber" to be used on validator.isValid
    console.log(creditCardNumber);

    //red-green "Results" 
    let detalle = document.getElementById("detalle");
    let validResult = validator.isValid(creditCardNumber);//result from validator
    detalle.innerText = validResult;

    if (validResult === true) {
        detalle.style.color = "#00ff00";
        detalle.innerText = "Valid Card"
    } else {
        detalle.style.color = "red";
        detalle.innerText = "NOT Valid Card"
    }

    //Refreshing box when "Start Again".
    let refresh = document.getElementById("refresh");
    refresh.addEventListener("click", function () {
        detalle.innerText = "Result";
        detalle.style.color = "black";


        //Restart creditCard box.
        let creditCard = document.getElementById("creditCard");
        creditCard.value = "";
    })

    //Return maskify.
    let maskD = validator.maskify(creditCardNumber)
    document.getElementById("creditCard").value = maskD;

    /*console.log(maskD)*/

}


