//Crea un programa que permita al usuario ingresar un número y determine si es primo, perfecto, o ambos. Muestra el resultado en una alerta.

function esPrimo(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function esPerfecto(num) {
    let suma = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            suma += i;
        }
    }
    return suma === num;
}

 const validandoNumero = document.getElementById("validarNumero");
    validandoNumero.addEventListener('click', function() {
        const numeroInput = document.getElementById("inputNumerico");
        const numero = parseInt(numeroInput.value);
    if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }
        const primo = esPrimo(numero);
        const perfecto = esPerfecto(numero);

        if (primo && perfecto) {
            alert(`${numero} es un número primo y perfecto.`);
        } else if (primo) {
            alert(`${numero} es un número primo.`);
        } else if (perfecto) {
            alert(`${numero} es un número perfecto.`);
        } else {
            alert(`${numero} no es ni primo ni perfecto.`);
        }
        alert(mensaje);
        
    } );

    


   


