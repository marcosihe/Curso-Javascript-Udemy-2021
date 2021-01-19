// Flat
/**
 * Devuelve un nuevo arreglo, como resultado de eliminar
 * arreglos anidados.
 */

 let calificaciones = [[9,7],[6,5],[8,10]];
 let resultado = calificaciones.flat();


 console.log(resultado);

 let arrayOfRandomNumbers = [1,2,4,[[[3,4]]]]; //array con 3 niveles de anidación
 console.log(arrayOfRandomNumbers);

 let result2 = arrayOfRandomNumbers.flat(2);
 console.log(result2);

 let result3 = arrayOfRandomNumbers.flat(3);
 console.log(result3);


 // Sort

 /**
  * Regresa un arreglo ordenado basado en una función de comparación
  */

  let array2 = [1,8,10,0,9,3];

  let resultado3 = array2.sort();
  console.log(resultado3);

  /**
   * Lo que hace sort en este caso es ordenar de mayor a menor, teniendo en cuenta
   * el valor de los correspondientes caracteres ASCII de cada numero del array2
   * 0 -> 30
   * 1 -> 31
   * 10 -> 31
   * 3 -> 33
   * 8 -> 38
   * 9 -> 39
   */

// Foreach

/** Funciona para arreglos. Tiene que ser un objeto iterable.
 * Recorre el arreglo y trabaja a través  de una
 * función anónima.
 */
console.log("------");
 let calificaciones2 = [12,23,76,67,98,54];
 let mensajes = ['Hola', 'al', 'curso', 'de', 'JS'];


 //Una forma: función flecha
 
 calificaciones2.forEach((value, index) => {
     console.log(value, index);
 });

 console.log('Imprimiendo solo los valores');

 calificaciones2.forEach(valor => {
    console.log(valor);
});

console.log('Imprimiendo solo los índices');

calificaciones2.forEach ( (_, indice) => {
    console.log(indice);
} );

 //Otra forma
 console.log('-----');

 calificaciones2.forEach(function(valor, indice) {
     console.log(valor, indice);
 });

 //Otra forma
 console.log('-----');

 function recorrido(value, index) {
     console.log(value, index);
 }

 calificaciones2.forEach(recorrido);


 // map
 /**
  * map regresa un arreglo 'respuesta', para lo cual se hace necesario
  * definir una variable de respuesta. Es decir, devuelve un nuevo arreglo
  * y de esta forma, el arreglo original queda intacto.
  */

  const respuestaMap = calificaciones2.map((valor, indice) => {
      return valor * 10;
  });

  console.log(respuestaMap);

  let respuestaMapMensajes = mensajes.map( valor => '**' + valor + '**');

  console.log(respuestaMapMensajes);

  // reduce

/**
 * Permite tomar cada uno de los elementos del arreglo
 * y realizar una operación, y por último, acumularlo
 * en un único valor o elemento.
 */

/*
const suma = calificaciones2.reduce( (acumulador, valor) => {
     return acumulador += valor;
 }, 0 );
*/

const suma = calificaciones2.reduce( (acumulador, valor) =>  acumulador += valor, 0 );
 console.log('reduce', suma);

 /**
  * La sintaxis de colocar la coma (,) y luego el valor 0, hace
  * que la variable acumulador se inicialice en ese valor de 0.
  * En el siguiente caso, de cadena de texto, se inicializa
  * a la variable acum en un caracter vacío.
  */

  const mensajeFinal = mensajes.reduce ( (acum, valor) => acum += valor + ' ', '');

  console.log(mensajeFinal);

  // filter

  /**
   * Sirve para filtrar un arreglo, basado en una condicional. Esto quiere decir que
   * la función anónima o de flecha retornarán un valor de verdadero o falso
   * por cada elemento que se recorre, teniendo en cuenta si cumplen o no
   * con  la condicional impuesta. Aquellos elementos que cumplan con la
   * condición, se agregarán al arreglo de respuesta.
   * 
   * Obs: regresa todas las coincidencias que cumplan con la condición
   */

const arregloFilterCalificaciones = calificaciones2.filter( calificacion => calificacion < 50 );
console.log('filter', arregloFilterCalificaciones);

// find
/**
 * Trabaja de manera similar a filter, con la salvedad de la siguiente observación:
 * 
 * Obs: regresa solo la primera coincidencia que cumple con la condición impuesta.
 */

const resultadoFindCalificaciones = calificaciones2.find( calificacion => calificacion > 50);
console.log('find', resultadoFindCalificaciones);

// some

/**
 * Regresa un valor booleano: true or false, dependiendo
 * si se cumple o no la condición impuesta,
 * respectivamente.
*/

const resultadoSomeMensajes = mensajes.some( mensaje => mensaje === 'JS' );
console.log('some', resultadoSomeMensajes);

// flat

/**
  * Permite aplanar un arreglo (en el caso de tener arrelos bidimensionales,
  * por ejemplo)
*/

const parciales = [[10, 8], [7,5],[10,10]]; // Array Bidimensional que consta de 3 elementos
const output = parciales.flat();
console.log('flat', output);

console.log('flat', [[[[10,5]], [[2,3,4]]], [1,4]].flat());
console.log('flat', [[[[10,5]], [[2,3,4]]], [1,4]].flat(3));

/**Al pasarle el parámetro '4' al método flat, se le indica cuántos
 * niveles de 'aplanamiento' se desea. Esto se lo hace teniendo en
 * cuantas el número máximo niveles que se tienen (si así se quiere).
*/

// sort

const arregloSort = calificaciones2.sort();
console.log(arregloSort);

let otrasCalificaciones = [3, 2 , 10, 6, 7];
const arregloSort2 = otrasCalificaciones.sort();
console.log(arregloSort2);

   /**
    * Observo que en este caso parece no ordenarlos de manera correcta de menor a mayor,
    * pero lo que sucede es que toma dígito a dígito para ir ordenándolos, y al evaluar
    * el número '10', toma el dígito '1' de ese número. Esto se soluciona con una
    * función de comparaicón de la siguiente manera:
    */

let arregloSort3 = otrasCalificaciones.sort( (a, b) => {
    if(a < b) return -1;

    if(a > b) return 1;
        
    return 0;
} );
//el método sort usa por sí mismo un algoritmo de comparación, por lo cual solo fue necesario indicarle los parámetros y las condicones del return
console.log(arregloSort3);

//Para ordenar de mayor a menor, se invierten los signos de mayor y menos en la función de comparación:

let arregloSort4 = otrasCalificaciones.sort( (a, b) => {
    if(a > b) return -1;

    if(a < b) return 1;
        
    return 0;
} );

console.log(arregloSort4);

// Ordenar de menor a mayor de acuerdo a la primera letra de cada elemento del array:
let arregloSortMensaje = mensajes.sort( (a, b) => {
    if(a < b) return -1;

    if(a > b) return 1;
        
    return 0;
} );

console.log(arregloSortMensaje);

//Ordenar el arreglo de mensajes de acuedo a la segunda letra de cada elemento o palabra del array:
let arregloSortMensaje2 = mensajes.sort( (a, b) => {
    if(a[1] < b[1]) return -1;

    if([1] > b[1]) return 1;
        
    return 0;
} );

console.log(arregloSortMensaje2);
