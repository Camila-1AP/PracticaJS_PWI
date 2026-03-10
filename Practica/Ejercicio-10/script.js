//Agrega un campo de entrada (<input>) en tu página. Usa un evento keydown para mostrar en la consola cada tecla que el usuario presione mientras escribe en el campo.


alert('Abre la consola para que puedas ver lo que escribes en el input.')
const input = document.getElementById('inputTeclado');

input.addEventListener('keydown', function(event) {

    console.log(`%c Tecla presionada: ${event.key} (${event.code})`, 
        "color: white; background-color: #9e196d; padding: 5px, border-radius: 5px; border: 2px solid #cc3d98")
});

 