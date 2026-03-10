//Escribe un programa que solicite al usuario un número mediante prompt, multiplique ese número por 2 y muestre el resultado en una alerta.


let numero = Number(prompt("Ingrese un número: "));

if (isNaN(numero) || numero === 0 && prompt === "") { 
    alert("Por favor, ingrese un número válido.");
} else {
    let resultado = numero * 2;
    const result = document.getElementById('resultado');
    result.textContent = `${numero} * 2 = ${resultado}`;

    alert(`El resultado de multiplicar ${numero} por 2 es: ${resultado}`);

    
}







