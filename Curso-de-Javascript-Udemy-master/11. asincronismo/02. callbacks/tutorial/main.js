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

function calcularSuma2(valores, callback){
    const res = valores.reduce((acc, value) => acc += value, 0);
    callback(res);
    console.log('ya se mandó a llamar el callback');
}

calcularSuma2([2,4,6,8], res => {
    console.log('el resultado es: ', res);
});

function calcularSuma3(valores, callback, errorCallback){
    const res = valores.reduce((acc, value) => {
        if(isNaN(value)){
            errorCallback(`El valor ${value} no es numérico`);
            return false;
        }else{
            return acc+= value;
        }
    });
    callback(res);
}

calcularSuma3([1,1,1,5], res => {
    if(res) console.log('resultado de calcularSuma3 =', res);
}, error => {
    console.error(error);
});