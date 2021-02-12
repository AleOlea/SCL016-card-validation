import validator from './validator.js';

//Getting the element that listen to the event to triger the action (funtion)
let btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", clickbtnValidar);

//Defining the function that gets the user input value.
function clickbtnValidar(event) {
  event.preventDefault();
  let creditCardNumber = document.getElementById("creditCard").value;

  console.log(creditCardNumber);
  //variable created to deliver colors red and green for the results.
  let validResult = validator.isValid(creditCardNumber);
  document.getElementById("detalle").innerText = validResult;
  if (validResult === "Valid Card") {
    detalle.style.color = "#00ff00";
  } else {
    detalle.style.color = "red";
  }
  //To ask the user for an appropiated credit card number//

  /*if (creditCardNumber.length < 13) {
    alert("Please enter a card number");
  }*/

  //To refresh the box "Credit Card" using "Start Again".

  let refresh = document.getElementById("refresh");

  refresh.addEventListener("click", function () {
  document.getElementById("detalle").innerText = "Result";
  detalle.style.color = "black";

  document.getElementById("creditCard").value = "";//to have an empty input field
  })

  //To maskify the credit card number input on the box "Credit Card"


  let maskD = validator.maskify(creditCardNumber);
  document.getElementById("creditCard").value = maskD;
  console.log(maskD)

};































