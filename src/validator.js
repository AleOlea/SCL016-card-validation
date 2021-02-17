const validator = {

  isValid: function (creditCardNumber) {

//split and reverse input string. 
    let digits = creditCardNumber.split("").reverse();  

//Declare let for addition.   
    let sum = 0;

//iterating the array for Luhn algorithm.

    for (let i = 0; i < creditCardNumber.length; i++) {
      digits[i] = parseInt(digits[i]);      
      console.log(digits[i]);

      if (i % 2 !== 0) {
        digits[i] *= 2

      if (digits[i] > 9) {
          digits[i] -= 9
        }
      }
      sum += digits[i];
      }
      console.log(sum);

//Operating results.

       if (sum % 10 === 0) {
       console.log("TRUE")
       return "Valid Card"
       } else {
       console.log("FALSE")
       return "NOT Valid";
       }
     },

//Iteration to return maksify as "#" all input numbers but last four.

  maskify(creditCardNumber) {
    let maskDigits = creditCardNumber.split("");
    for (let i = 0; i < maskDigits.length -4; i++) {
      maskDigits[i]= "#";
    }
/*console.log(maskDigits)*/

    return maskDigits.join("");  //to return less extended number.
    }
    };

  export default validator;









