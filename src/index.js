import validator from './validator.js';

//Getting element istens event and triggers action (funtion)
let btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", clickbtnValidar);

//Defining function gets user input value(text).
function clickbtnValidar(event) {
  event.preventDefault();//prevents form from submiting
  let creditCardNumber = document.getElementById("creditCard").value;
  console.log(creditCardNumber);

  //variable to trutn red and green results in box Results.
  let validResult = validator.isValid(creditCardNumber);
  document.getElementById("detalle").innerText = validResult;//repeat the result of the function of validator js.
  if (validResult === "Valid Card") {
    detalle.style.color = "#00ff00";
  } else {
    detalle.style.color = "red";
  }

//Shall I create an alert?if (creditCardNumber.length < 13) {alert("Please enter a card number")};
  
  //To refresh the box "Credit Card" by clicking "Start Again".
  let refresh = document.getElementById("refresh");
  refresh.addEventListener("click", function () {
    document.getElementById("detalle").innerText = "Result";
    detalle.style.color = "black";

    //to have an empty input field*/
    /*document.getElementById("creditCard").value = "";//to have an empty input field*/
    //IMPORTANT: probar poner solo : 
    creditCard.value=""; //al parecer funciona igual.
    
  })

  //Maskify  number input on the box "Credit Card"
  let maskD = validator.maskify(creditCardNumber);
  document.getElementById("creditCard").value = maskD;
  console.log(maskD)
};































