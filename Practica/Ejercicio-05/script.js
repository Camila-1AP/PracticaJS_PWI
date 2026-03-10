//Diseña un programa que genere todos los números primos entre 1 y 1,000. Muestra los números primos en la consola.



function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function generarPrimos(limite) {
    const primos = [];
    for (let i = 2; i <= limite; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }
    return primos;
}


const primos = generarPrimos(1000);
console.log(`Números primos entre 1 y 1,000: ${primos}`);