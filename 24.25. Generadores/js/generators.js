function* nombres() {
    yield 'Juan';
    yield 'Tomas';
    yield 'Marcos';
    yield 'Carla';
    yield 'Lucia';

    return 'Lourdes';
}

const iterator = nombres();
/*
console.log(iterator.next()); // muestra false además del valor del nombre (false es el valor actual de 'done')
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value); //muestra hasta Lourdes
console.log(iterator.next().value); //Muestra todos y como hay un console.log de más, muestra 'undefined'
*/

let valor = iterator.next();

/**
 * Con el siguiente bloque de código (while)
 * El navegador entra en un bucle infinito,
 * algo que no le pasa al profesor
 * con exactamente el mismo
 * código:
 * 
 * while(valor.done != true){
 *  console.log(valor.value);
 *  valor = iterator.next;
 *  }
*/
for(const item of iterator){
    console.log(item);
}

/**
 * Observo que muestra todos los elementos que le siguen a la palabra 'yield'
 * y no así el nombre 'Lourdes', pues este es el valor de retorno que
 * tiene la función, y no lo cuenta como elemento a mostrar en el
 * ciclo del 'for of'.
 */

 // A continuación una función con generador para mostrar números consecutivos:

 function* numero(){
     let contador = 1;
     while(true){
         yield contador;
         contador*=2;
     }
 }

 const iterator02 = numero();

 console.log(iterator02.next().value);
 console.log(iterator02.next().value);
 console.log(iterator02.next().value);
 console.log(iterator02.next().value);


 /**
  * Con esta función, se hacen cálculos de manera indefinida,
  * a medida que se la manda a llamar a la misma.
  * Observo que el while de esta, es un bucle
  * infinito porque la condición que se
  * evalúa siempre es 'true'. Por otro
  * lado, al usarla como generador,
  * solo muestra cuando se la
  * invoca.
  */