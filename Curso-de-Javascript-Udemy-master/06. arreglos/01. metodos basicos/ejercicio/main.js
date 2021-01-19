let nombre = new Array(5);

nombre[0] = 'Juan';
nombre[1] = 'Maria';
nombre[2] = 'Sergio';
nombre[3] = 'Juancito';
nombre[4] = 'Marcos';

console.log(nombre);

//

let nombres2 = new Array(5);

nombres2[0] = 'Albert';
nombres2[1] = 'Mario';
nombres2[2] = 'Serrano';
nombres2[3] = 'Juana';
nombres2[6] = 'Marcia';

console.log(nombres2);

//

let calificaciones = [34, 34, 12, 65, 99, 100];

console.log(calificaciones);
console.log(calificaciones[4]);
console.log(calificaciones[18]);

console.log(calificaciones.length);

//Uso del for tradicional para mostrar los elementos del arreglos
for (let i = 0; i < calificaciones.length; i++) {
  console.log(calificaciones[i]);
}

//Uso del for of para mostrar los elementos del arreglo
for (calificacion of calificaciones) {
    console.log(calificacion);
}
/**
* Una convención al usar el for of es que el nombre del arreglo (u objeto)
* se encuentra en plural, mientras que para nombrar a los elementos
* del mismo se utiliza el 'mismo' nombre pero en singular.
*/

console.log('_______________________');

//Métodos básicos
//variable.metodo(parametros)

/*
* Método para insertar un valor en una 'casilla' del arreglo. MÉTODO PUSH
* Con este método se inserta el valor deseado al final del arreglo
*/


calificaciones.push(65.5);
console.log(calificaciones); //para ver al arreglo completo y observar el nuevo valor introducido
console.log(calificaciones[calificaciones.length - 1]); // para ver solo el valor ingresado

console.log('push', calificaciones);
/**
* Método indexof
* Permite ver a qué 'casilla' del arreglo corresponde el valor especificado.
* Si el dato que se busca aparece repetido, la función indexOf nos regresa
* la posición de la primera coincidencia. Obersvar esto al buscar
* mediante 'indexOf' el valor 34, a continuación.
*/

console.log(calificaciones.indexOf(12));
console.log(calificaciones.indexOf(65.5));
console.log(calificaciones.indexOf(34));

const position = calificaciones.indexOf(99);
console.log(position);
  

/** indexOf
 * Qué sucede si el valor que buscamos no se encuentra en el arreglo?
 * En este caso, la función nos retorna el valor '-1'. Y acá podemos
 * ver la utilidad, para validar si un valor se encuentra
 * o no en un determinado arreglo.
*/

console.log(calificaciones.indexOf(13));


/**
* Método shift
* Este método nos permite eliminar el primer elemento del arreglo especificado
*/

calificaciones.shift();
console.log(calificaciones);

/**
* Método unshift
* Agrega un elemento especificado al inicio del arreglo
*/

calificaciones.unshift(21);
console.log(calificaciones);

/**
* Método join
* Sirve para unir arreglos, ya sea para formar números o cadenas de texto
* El parámetro que recibe join es de tipo string
*/

let palabras = ['Curso', 'de', 'Javascript'];
let palabras2a = ['Curso', 'de', 'Javascript'];
let palabras3a = ['Curso', 'de', 'Javascript'];
console.log(palabras);

const texto = palabras.join(" ");
console.log(texto);

const texto2 = palabras2a.join("-");
console.log(texto2);

const texto3 = palabras3a.join("*");
console.log(texto3);

/**
 * Método split
 * permite convertir una cadena de caracteres en un arreglo, suprimiendo un elemento
 * especificado. Ejemplo a continuación:
 */
let creditCard = '4006-1501-4578-1054';

const arrayCreditCard = creditCard.split("-");
console.log(arrayCreditCard);
