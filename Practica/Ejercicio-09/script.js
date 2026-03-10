//Diseña una lista con tres elementos (<li>). Usa un evento mouseover en cada elemento para cambiar su color de fondo al pasar el mouse sobre ellos.

const uvas = document.getElementById('uva');
const uvaColor = document.getElementById('uva-color');

const fresas = document.getElementById('fresa');
const fresaColor = document.getElementById('fresa-color');

const arandanos = document.getElementById('arandano');
const arandanoColor = document.getElementById('arandano-color');

uvas.addEventListener('mouseover', function(){

    uvas.style.background = '#6C2856';
    uvas.style.color  = 'white';

    uvaColor.style.setProperty('background-color', 'white', 'important');
    uvaColor.style.setProperty('color', '#6C2856', 'important');

    
} );

fresas.addEventListener('mouseover', function(){
    fresas.style.background = '#C11C84';
    fresas.style.color = 'white';

    fresaColor.style.setProperty('background-color', 'white', 'important');
    fresaColor.style.setProperty('color', '#C11C84', 'important');

} );

arandanos.addEventListener('mouseover', function(){
    arandanos.style.background = '#002F6C';
    arandanos.style.color = 'white';

    arandanoColor.style.setProperty('background-color', 'white', 'important');
    arandanoColor.style.setProperty('color', '#002F6C', 'important');

} );


uvas.addEventListener('mouseout', function(){
    uvas.style.backgroundColor = '';
    uvas.style.color = '';
    
    uvaColor.style.backgroundColor = '';
    uvaColor.style.color = '';
});

fresas.addEventListener('mouseout', function() {

    fresas.style.background = '';
    fresas.style.color = '';


    fresaColor.style.background = '';
    fresaColor.style.color = '';

} );

arandanos.addEventListener('mouseout', function(){
    arandanos.style.background = '';
    arandanos.style.color = '';

    arandanoColor.style.background = '';
    arandanoColor.style.color = '';

} );