/**
 * Map
 * el Map, a diferencia de los arreglos, los índices dejan de ser implícitos
 * y hay que asignarles nombres para poder referirse a los mismos.
 * Es decir, que con Map, se define inicialmente tanto el valor
 * de los elementos que conforman el mapa, así como también
 * sus correspondientes índices. Para agregar elementos
 * se usa el método set. Primero se instancía un 
 * nuevo objeto 'mapa' (Map()). Para acceder
 * a los valores dentro del mapa, se usa el
 * método get.
 */

//Instanciando un nuevo objeto de tipo Map
 let calificaciones = new Map();

 //set: agregar nuevos elementos al mapa
calificaciones.set = ("Juan", 10);
calificaciones.set = ("Alicia", 8);
calificaciones.set = ("Marcos", 9);

//get: obtiene los valores de los elementos del mapa, indicándoles el índice

calificaciones.get("Juan");
calificaciones.get("Marcos");

//has: recibe como parámetro un índice, y nos devuelve true or false de acuerdo a si ese índice se encuentra en el mapa o no

calificaciones.has("Juan");
calificaciones.has("Alberto");

//delete: permite eliminar un elemento, el parámetro que recibe es el índice de dicho elemento, y además nos dice el valor que contenía el mismo.

calificaciones.delete("Alicia");

//clear: elimina todo el mapa
calificaciones.clear();

//______________

console.log('--------');

const mapa = new Map();
mapa.set("Juana", 10);
mapa.set("Maria", 8);
mapa.set('Raquel', 1);
mapa.set("Marcos", 7);
console.log(mapa);

const maria = mapa.get('Maria');
console.log(maria);

//for of: para hacer el recorrido del mapa

for (const elemento of mapa) {
    console.log(elemento);
}

for (const elemento of mapa) {
    console.log(elemento[1]);
}

for (const elemento of mapa) {
    console.log(elemento[0], elemento[1]);
}