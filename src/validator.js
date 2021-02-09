
const validator = { 
 
  isValid: function(creditCard){
    let digits = creditCard.split("");
    let sum = 0;

    for (let i= 0; i < creditCard.length; i++) {
      digits[i] = parseInt(digits[i]);
      console.log(digits[i])

      if( i % 2 === 0) {
        digits[i] *= 2
        if (digits[i] > 9) {
          digits[i] -= 9
        }
      }

      sum += digits[i];
    }
    
    if(sum % 10 ===0) {
    console.log("is a valid card")
   return "This is a Valid Card"
    }
    else {
      console.error("Not Valid")
      return "Not Valid";
    }
  } 
}

export default validator;




















