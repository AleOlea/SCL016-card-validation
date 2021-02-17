const validator = {
   
    isValid: function (creditCardNumber) {
      
      let digits = creditCardNumber.split("").reverse();  

// add:   
      let sum = 0;

//iterating over "creditCardNumber2 declare on line 11 index js.

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

//Results.

       if (sum % 10 === 0) {
       console.log("TRUE")
       return true
       } else {
       console.log("FALSE")
       return false
       }
     },


//maksify "#" but last 4.
  maskify(creditCardNumber) {
    let maskDigits = creditCardNumber.split("");
    for (let i = 0; i < maskDigits.length -4; i++) {
      maskDigits[i]= "#";
    }
/*console.log(maskDigits)*/

    return maskDigits.join("");  
    }
    };

  export default validator;









