const validator = {

  isValid: function (creditCard) {

    let digits = creditCard.split("").reverse();
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
      console.log("is a valid card")
      return "This is a Valid Card"
    }
    else {
      /*console.error("Not Valid")*/
      console.log("Not Valid")
      return "Not Valid";
      
    }
  }
}

export default validator;



//MASKIFY
/*function maskify(creditCard) {
  let dd = creditCard.toString();
  let hash = creditCard.replace((/./g), '#');
  for (let i = (hash.length - 4); i < hash.length; i++) {
      hash[i] = dd[i];
  }
  return hash;}*/




















