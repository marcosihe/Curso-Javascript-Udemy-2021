//set: toma como índice el mismo valor que se agrega a la casilla
//Normalmente se usa set cuando se quiere evitar tener valores repetidos entre sí
//set usa el método add para agregar elementos al conjunto de elementos

let calificaciones = new Set();
calificaciones.add(10);
calificaciones.add(8);
calificaciones.add(7);
calificaciones.add(10);

//entries: permite obtener los elementos, haciendo uso de generadores

let elementos = calificaciones.entries();
elementos.next().value; //Devolverá =[10,10]
elementos.next().value; //Devolverá = [8,8]
elementos.next().value; //Devolverá = [7,7]
elementos.next().value; //Devolverá = undefined

//-------------------------------------------------------


const propiedades = new Set();

propiedades.add('peso');
propiedades.add('color');
propiedades.add('forma');

console.log(propiedades);

propiedades.add('color');
propiedades.add('color');
propiedades.add('color');

//Lo coloco repetido para hacer notar que como tienen el mismo nombre de índice, no los vuelve a agregar

const iterator = propiedades.entries();

//console.log(iterator.next());

/*
for(let item of iterator) {
    console.log(item);
}
*/

/*
for(let item of iterator) {
    console.log(item[0]);
}*/


let item = iterator.next();
while (item.done === false) {
    console.log(item.value[0]);
    item = iterator.next();
}