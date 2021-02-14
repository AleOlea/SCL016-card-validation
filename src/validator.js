const validator = {

  isValid: function (creditCardNumber) {

//split and reverse input string. 
    let digits = creditCardNumber.split("").reverse();  

//Declare let for addition.   
    let sum = 0;

//iterating the array for Luhn formula.

    for (let i = 0; i < creditCardNumber.length; i++) {
      digits[i] = parseInt(digits[i]); // parseInt returns an integer.
      console.log(digits[i])

    if (i % 2 !== 0) {
        digits[i] *= 2

    if (digits[i] > 9) {
          digits[i] -= 9
        }
      }

//adding results.

    sum += digits[i];
    console.log(digits[i]);
      }
    console.log(sum);

//rendering results of the final addition.

    if (sum % 10 === 0) {
      console.log("TRUE")
      return "Valid Card"
    }else {
      console.log("FALSE")
      return "NOT Valid";
    }
  },

//Iteration to return a maksify as "#" input numbers but last four.

  maskify(creditCardNumber) {
    let maskDigits = creditCardNumber.split("");
    for (let i = 0; i < maskDigits.length -4; i++) {
      maskDigits[i]= "#";
    }
    console.log(maskDigits)
    return maskDigits.join("");  //to return a number less extense.
    }
    };

  export default validator;









