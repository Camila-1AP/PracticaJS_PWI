/*Escribe un programa que use addEventListener para cambiar el color de fondo de una página al hacer clic en un botón. */


const boton = document.getElementById("cambiarColor");
const color = document.getElementById("elegirColor");

boton.addEventListener("click", function() {
    document.body.style.backgroundColor = color.value;
});
