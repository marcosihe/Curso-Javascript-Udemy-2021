function suma(num1){
    return function(num2){
        return num1 + num2;
    }
}

let res = suma(10);
console.log(res(5));


/*****************/

let name = 'Julia';

function one(){
    console.log('Function 1');
    let name = 'Marcos';
    console.log(name);

    return function two(){
        console.log('Function 2');
        name = 'Lena';
        console.log(name);

        return function three(){
            console.log('Function 3');

            return function four(){
                //let name = 'Mara';  //Observación 2
                console.log(name);
            }
            //four();
        }
        //three();
    }
    //two();
    //three(); //Observación 1
}
//one();

const resultado01 = one();
const resultado02 = resultado01();
const resultado03 = resultado02();
const resultado04 = resultado03();

/**
 * Se tiene que entender que la función 'two', puede acceder a la variable 'nombre'
 * por pertenecer a la función 'one' que es donde ambas viven
 */

 /**
  * En observación 1: al correr el código, el navegador muestra un mensaje de que la función
  * 'three' no está definida. Esto es porque dicha función vive dentro de la función 'two'
  * y la función 'one' no la reconoce. Solo reconoce a la función 'two', por contenerla.
  */

  /**
   * Obersvación 2: al no declar o cambiar el valor de la variable 'name'
   * esta continúa con el último que se le asignó: Lena, en este caso.
   * Estas funciones 'anidadas' siguen reconociendo a las variables
   * que se declararon en sus funciones 'contenedoras'.
   */


//Pregunta1

  const sumat = function(n1, n2){
    return n1 + n2;
}
 
function sumat2(n1, n2){
    return () => n1 + n2;
}

console.log(sumat(3,2));
console.log(sumat2(3,4));


//Pregunta 2

let i = 0;
function* generadorIndice(){
    while(true){
        yield i;
        i++;
    }
}

/** Respuesta: cada vez que se mande a llamar generará un número infinitamente */

//Pregunta 3: Por qué no se muestran los valores dentro del console.log en el siguiente código?

function operacion3(){
    console.log('3');
}
function operacion(...args){
    args[0]();
    args[1]();
    args[2]();
}
 
console.log(() =>{
    console.log('1');
}, function(){
    console.log('2');
}, operacion3);

/**
 * Las 3 funciones que están dentro del console.log solo están definidas,
 * para poder invocarlas es necesario agregar () al final de la
 * definición para ejecutarlas
 */