const boton = document.querySelector("#boton");
const input = document.querySelector("#input");

let dato = 50;
/*
boton.addEventListener('click', e  => {
    dato = 100;
    console.log('callback dato = ', dato);
}); 
console.log('normal Dato = ', dato);
*/
function calcularSuma(valores, callback){
    const res = valores.reduce((acc, value) => acc += value, 0);
    callback();
    console.log('ya se mandó a llamar el callback');
    return res;
}

console.log(calcularSuma([1,2,3,4,5], function(){
    console.log('Aquí termina la función');
}));