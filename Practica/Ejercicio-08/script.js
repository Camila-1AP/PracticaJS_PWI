//Crea un botón en tu página HTML. Usa JavaScript para agregar un evento click que muestre un mensaje en la consola cuando el botón sea presionado.

const btn = document.getElementById('mensajeConsola');

btn.addEventListener('click', function(){


    console.log(
    "%c ¡Este es un mensaje en la consola.! ", 
    "color: white; background-color: #002F6C; padding: 5px; border-radius: 5px; border: 2px solid #3572c1;"
);

    alert('Mensaje listo en la consola!')

} );