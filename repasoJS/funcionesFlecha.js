//Function declaration

function add(a, b){
    return a + b
}

const num1 = 56, num2 = 89
let resultado = add(num1, num2)
console.log(`La suma de ${num1} + ${num2} es igual a ${resultado}`)


//Function expressions
const square = function(x, n){
    return Math.pow(x,n)
}

const num3 = 9
resultado = square(num2, num3)
console.log(`${num2} a la potencia ${num3} es igual a ${resultado}`)


//Arrow Functions
const subtract = (a, b) => (a - b)
resultado =  subtract(num2, num3)
console.log(`la resta de ${num2} menos ${num3} es igual a ${resultado}`)