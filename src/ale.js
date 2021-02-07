
/*const timesToSayHello = prompt("ingrese la cantidad de Saludos");
for (let i= 0; i < timesToSayHello; i++ ) {
    /*console.log(i)
    alert("hello world");
}*/

/*for(let current = 20;;current++) {
    if(current % 7 === 0)
    break;
    console.log(current);
}*/

/*for(let number = 1; number <= 100; number++){
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("Fizz-Buzz");
    }
     else if (number % 3 === 0) {
        console.log("Fizz"); 
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
}*/

/*let number = 1
while(number <= 10) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("Fizz-Buzz");
    }
     else if (number % 3 === 0) {
        console.log("Fizz"); 
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
    console.log(number);
    number ++;
}*/

//tamaño

/*let size = parseInt(prompt ("cual sera el tamaño de tu cuadricula"));

//crear cuadricula

let result = " ";

for(let row = 1; row <= size; row++) {
    for (let column = 1; column <= size; column ++ ){
        if ((column + row) % 2 === 0 ) {
            result += " "; 
        } else { 
            result += "#"; 
        }
    }

         result += " \n "; 
        
       
        
      console.log(result);
}
*/


    /*const drawMultipleTimes = function(howManyTimes, whatToDraw) {  

        for (let i = 1; i <= howManyTimes; i++) {

            console.log(i + " "  + whatToDraw);
        }
    }
    drawMultipleTimes( 3, "hola" );
    drawMultipleTimes( 3, "chau" );
    drawMultipleTimes( 3, " :) " );*/



/*const medalForScore = function (score) {
    if(score < 3) {
        return "bronze";
    }
    if(score < 7) {
        return "silver";
    }

    return "gold"
}
medalForScore(10);
console.log(medalForScore() );*/
 
/*x= "hola";
function id (x){
    return x;
    console.log(id)
}
id();
console.log(id(x))*/


/*const add = function (x, y) {
    return x + y
};

console.log(add(2, 3));*/

const factorial = function fact(number) {
    if (number <= 1) {
        return 1
    }
    return number * fact(number -1);   
};
console.log(factorial(3));