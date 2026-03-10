/*Crea una función que reciba dos números como parámetros,
los sume y devuelva el resultado. Muestra el resultado en la consola llamando
a la función con dos valores.*/

function sumar(a, b) {
    return a + b;
}

let num1 = 5;
let num2 = 7;
console.log(` Consola: ${num1} + ${num2} =  ${sumar(num1, num2)}`);

//Adicional
const resultado = document.getElementById('resultado');
resultado.textContent = ` ${num1} + ${num2} =  ${sumar(num1, num2)}`;


