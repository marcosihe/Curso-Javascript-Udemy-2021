const boton = document.querySelector('#boton');

//Modificar estilos en línea con JS
boton.style.backgroundColor = 'blue';
boton.style.color = '#fff';
boton.style.paddingLeft = '50px';
boton.style.paddingTop = '50px';
boton.style.background = 'linear-gradient(270deg, rgba(14,54,78,9) 0%, rgba(145,41,25,95) 100%)';

//Modificar clases

const boton02 = document.querySelector('#boton02');
boton02.classList.add('boton');
boton02.classList.add('boton-estilo01');

//boton02.classList.remove('boton');

boton02.classList.toggle('boton-estilo02');

console.log(boton02.classList);