function mostrarMensaje(){
    console.log('Este es un mensaje a través de un evento.');
}
/*
const boton = document.querySelector('#boton');
boton.addEventListener('click', function(){
    mostrarMensaje();
});
*/
const boton = document.querySelector('#boton');
let contador = 0;
boton.addEventListener('click', function(e){
    console.log(e);
    contador++;
    e.target.textContent = `${contador} clicks`;
});
/** addEvenListener
 * Los respectivos parámetros dentro de esta función son:
 * nombre del evento, que está predefinido
 * función callback (o de respuesta), que le dice al elemento sobre el cual se hizo click, como debe actuar.
 * Dentro de la función callback se define un parámetro 'e' que contendrá la información del evento.
 * La función callback puede ser de tipo flecha, anónima o 'común'.
 */

 //Agregando un evento a la capa body

document.querySelector('body').addEventListener('mousemove', e => {
    document.querySelector('#respuesta').textContent = `${e.pageX} - ${e.pageY}`;
});

const edificio = document.querySelector('#edificio');
let pegado = false;

/**
 * En lo siguiente, al hacer referencia a window (el cual es el entorno global, ya no es necesario
 * especificar con document.querySelector)
 */
window.addEventListener('mousemove', e => {
    if (pegado) {
        const x = e.pageX - (edificio.width / 2);
        const y = e.pageY - (edificio.width / 2);

        edificio.style.position = 'absolute';
        edificio.style['left'] = x + 'px';
        edificio.style['top'] = y + 'px';

    }
});

edificio.addEventListener('click', e => {
    pegado = !pegado;
});