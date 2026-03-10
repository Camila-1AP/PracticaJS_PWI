//Escribe una función que determine si un número es perfecto. La función debe recibir un número como parámetro y devolver true si es perfecto y false si no lo es. Debe de mostrarlo en consola.

function esPerfecto(num) {
    let suma = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            suma += i;
        }
    }
    return suma === num;
}

const validarNumero = document.getElementById('validarNumero');

validarNumero.addEventListener('click', function() {
    const resultado = document.getElementById('resultado');
    const inputNumerio = document.getElementById('inputNumerico');

    const numero = parseInt(inputNumerio.value);
    console.log(esPerfecto(numero));

    resultado.textContent =  `¿El número ${numero} es perfecto?: ${esPerfecto(numero)}`;

});


