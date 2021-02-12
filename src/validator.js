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
      return "Not Valid";
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


//Código de cami

/*
maskify(creditCard) {
  let maskD = "";
  let maskDigits = creditCard.split("");
  for (let i = 0; i < maskDigits.length -4; i++) {
    if(i< maskDigits.length -4){
      maskDigits[i]= "#";
}
maskD = maskD + maskD [i]; 
}
return maskD;
 }
*/







