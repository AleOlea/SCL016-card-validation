const validator = {

  isValid: function (creditCard) {

    let digits = creditCard.split("").reverse();  
    let sum = 0;

    for (let i = 0; i < creditCard.length; i++) {
      digits[i] = parseInt(digits[i]);
      console.log(digits[i])

    if (i % 2 !== 0) {
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
      console.log("TRUE")
      return "Valid Card"
    }

    else {
      console.log("FALSE")
      return " Not Valid";
    }
  },

  maskify(creditCard) {
    let maskDigits = creditCard.split("");
    for (let i = 0; i < maskDigits.length -4; i++) {
      maskDigits[i]= "#";
    }
    console.log(maskDigits)
    return maskDigits.join("");
  }
 
};

export default validator;






//FUNCION ORIGINAL//
/*const validator = {
  isValid: function (creditCard) {

    let digits = creditCard.split("");    //eliminé reverse() pues daba error en tarjetas validas//
    let sum = 0;

    for (let i = 0; i < creditCard.length; i++) {
      digits[i] = parseInt(digits[i]);
      console.log(digits[i])

    if (i % 2 === 0) {
        digits[i] *= 2

    if (digits[i] > 9) {
          digits[i] -= 9
          //testing adding digits
          /*let newDigit = digit.split("").map(Number);
          digit[i] = newDigit[0] + newDigit[1]
          console.log(newDigit)
        }
      }

      sum += digits[i];
      console.log(digits[i]);
      }

    console.log(sum);
    if (sum % 10 === 0) {
      console.log("TRUE")
      detalle.style.color = "#00ff00";
      return "Valid Card"
    }

    else {
      console.log("FALSE")
      detalle.style.color = "red";
      return " Not Valid";
    }

};

export default validator;*/











