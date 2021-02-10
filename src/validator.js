const validator = {

  isValid: function (creditCard) {

    let digits = creditCard.split("")     //eliminé reverse() pues daba error en tarjetas orobadas que eran validas//
    let sum = 0;

    for (let i = 0; i < creditCard.length; i++) {
      digits[i] = parseInt(digits[i]);
      console.log(digits[i])

      // NO ESTA FUNCIONANDO
      if (creditCard.value < 10) {
        alert("Please, enter a Credit Card Number");
      }

      if (i % 2 === 0) {
        digits[i] *= 2
        if (digits[i] > 9) {
          digits[i] -= 9
        }
      }

      sum += digits[i];
      console.log(digits[i]);
    }
    console.log(sum);
    if (sum % 10 === 0) {
      console.log("Valid card")
      detalle.style.color = "#00ff00";
      return "Valid Card" 
     }
    else {
      console.log("Not Valid")
      detalle.style.color = "red";
      return " Not Valid";
       }
  
      }
    }
export default validator;



//MASKIFY
/*
let digitsToHide= creditCard.value;
let lastDigit = digitsToHide.slice(-4);
let mask_symbol = "#";
let masked_str = mask_symbol.repeat() + lastDigit;*/




















