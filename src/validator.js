const validator = {

  isValid: function (creditCardNumber) {
   //divides the String into ordered list of substrings. Delcare varaible for the addition.
    let digits = creditCardNumber.split("").reverse();  
    let sum = 0;

  //iterating over substring
    for (let i = 0; i < creditCardNumber.length; i++) {
      digits[i] = parseInt(digits[i]); // returns an integer.
      console.log(digits[i])

    if (i % 2 !== 0) {
        digits[i] *= 2

    if (digits[i] > 9) {
          digits[i] -= 9
        }
      }
//adding the resulted digits operations
    sum += digits[i];
    console.log(digits[i]);
      }
    console.log(sum);

//rendering results
    if (sum % 10 === 0) {
      console.log("TRUE")
      return "Valid Card"
    }else {
      console.log("FALSE")
      return "NOT Valid";
    }
  },


  maskify(creditCardNumber) {
    let maskDigits = creditCardNumber.split("");
    for (let i = 0; i < maskDigits.length -4; i++) {
      maskDigits[i]= "#";
    }
    console.log(maskDigits)
    return maskDigits.join("");}

};

export default validator;


//Código de cami 
/*


maskify(creditCardNumber) {
  let maskD = "";
  let maskDigits = creditCardNumber.split("");
  for (let i = 0; i < maskDigits.length -4; i++) {
    if(i< maskDigits.length -4){
      maskDigits[i]= "#";
}
maskD = maskD + maskD[i]; 
}
return maskD;
 }
--------------

 
  let maskD = validator.maskify(creditCardNumber);
  document.getElementById("creditCard").value = maskD;
  console.log(maskD)
*/







