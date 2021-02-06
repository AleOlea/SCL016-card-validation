
export default validator;
const validator = {

isValid: function (n) {
    const digits = n.toString().split(" ").map(Number);
    if (digits.length % 2 === 0) {
      digits = digits.map((digit, idx) => idx % 2 === 0 ? digit * 2 : digit);
    } else {
      digits = digits.map((digit, idx) => idx % 2 === 1 ? digit * 2 : digit);
    }
    //double digits
    digits = digits.map(digit => digit > 9 ? digit - 9 : digit);
    //sum all the digits
    const sum = digits.reduce((acc, digit) => acc += digit, 0);
    return sum % 10 === 0;
  }

};







/*function maskify(n) 
 let ccNumber = n.split(" ");
 for(let i = 0; i < n.length-4; i++) {
   number[i] = "#";
 }

 console.log(n);

/*console.log(validator.isValid(n));
console.log(validator.maskify(n));*/

/*Acá escribirás las funciones necesarias para que el usuario pueda verificar 
la tarjeta de crédito y ocultar los dígitos de su número de tarjeta. 
 Esta función debe ser pura e independiente del DOM.

Para esto debes implementar el objeto validator,el cual ya se encuentra exportado en 
el boilerplate. Este objeto (validator) contiene dos métodos (isValid y maskify):

validator.isValid(creditCardNumber): 
creditCardNumber es un string con el número de tarjeta que se va a verificar.
Esta función debe retornar un boolean dependiendo si es válida de acuerdo al algoritmo de Luhn.

const validator = {
  // ...
}  
/* 1.-convert to string. 2.-split numbers in "card" into digit 3.-Map() to convert them to number*/




/* https://www.youtube.com/watch?v=mHMda7RQFr8&t=667s 
/*  modified  version
function isValid (n) {
  //convert number to an array of digits
  const digits = n. toString().split(" ").map(Number);

  const sum = digits
  //Double every other digit(from right to left)
  .map((digit, idx) => idx % 2 === digits.length % 2 ? fixDouble(digit * 2): digit) 

  //add the digits
  .reduce((acc, digit) => acc += digit, 0);
   return sum % 10 === 0;
 }

function fixDouble(number){
   return number > 9? number - 9 : number;
}


HOW OTHERS DIDI IT TO LEARN SOME MORE

function isValid(n) (
   let sum = 0;

   while (n > 0) {
      let a = n % 10;
      n = Math.floor (n/10);

      let b = (n % 10 ) * 2;
      n= Math.floor(n/10);

      if (b > 9) {
         b -= 9;
      }
      sum+= a + b;
   }
   return sum % 10 === 0;
)
*/









 
 

