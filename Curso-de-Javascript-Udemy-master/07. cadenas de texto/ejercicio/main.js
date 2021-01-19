/**
 * indexOf: regresa el índice de la primera ocurrencia del texto a buscar, PERO
 si no encuentra la cadena buscada, regresa -1ç
 
 Ejemplo de su uso:
 texto.indexOf(dos);

 * slice: extrae una parte del texto y lo devuelve, por lo que hay que definir una
 nueva variable para que contenga el resultado de aplicar slice y sea útil.
  
 ejemplo de su uso:
 let fragmento = texto.slice(7,12);
 


* substr: extrae una parte del texto basado en una cantidad de caracteres

 Ejemplo:
 texto.substr(0,4);
  
 Lo que hace en este ejemplo, es substraer 4 caracteres a partir de la posición 0,
 de la cadena de texto llamada 'texto'
 


 
  * replace: devuelve un texto reemplazando parte de él con otro.
  
 Ejemplo:
 texto.replace("a todos", "amigos");
 Reemplaza el fragmento 'a todos' por el fragmento 'amigos' en la variable 'texto'
 

 * upperCase: convierte un texto en mayúsculas
 
 * lowerCase: convierte un texto en minúsculas
 
 Estas dos sirven para la búsqueda de coincidencias de cadenas de caracteres. Se recomienda que al recibir
 las cadenas de texto, convertirlas a mayúsuculas o minúsuclas segun convenga y luego buscar las
 coincidencias.
 
 * Concat: permite unir dos o más cadenas de texto.
Ejemplo:
let texto = 'Bienvenidos';
texto.concat('al', ' ', 'curso');

* trim: permite quitar los espacios al inicio y al final de una cadena de texto.

* split: convierte una cadena de texto en un arreglo definido por un separador.
Ejemplo:
let text = 'Hola a todos';
text.split(' '); //dará como resultado un arreglo de 3 elementos -> ['Hola', 'a', 'todos'], puese se
le indicó que separe los caracteres cuando encontrase el separador 'espacio' (' ').
 Ejemplo2: 
text.split(''); // lo que hará es tomar cada caracter y lo convertirá en un elemento del nuevo arreglo.

*/

let mensaje = 'Hubo un error al procesar la solicitud';
console.log(mensaje);

for (let i = 0; i < mensaje.length; i++) {
    console.log(mensaje[i]);
    
}

//En el caso de las cadenas de caracteres NO se puede hacer uso dle forEach puesto que ese solo sirve para arreglos.


const valor = 150;
let texto = `Bienvenidos al curso ${valor == 15? 'cierto': 'falso'} ${2*3}
                Esto es un salto de línea`;
console.log(texto);

console.log(typeof '0'  == typeof 0);

//indexOf
let mensaje1 = 'curso de javascript para principiantes';

console.log(mensaje1.indexOf('javascript'));
console.log(mensaje1[mensaje1.indexOf('javascript')]);

console.log(mensaje1.indexOf('Javascript'));

//lastIndexOf

console.log(mensaje1.lastIndexOf('a'));

//slice
let nuevoTexto = mensaje1.slice(5,10);
console.log('slice:', nuevoTexto);

console.log('slice2:', mensaje1.slice(5,10));

//substr
console.log('subst:', mensaje1.substr(5,10));

//replace

res = mensaje1.replace('javascript', 'PHP');
console.log(res, mensaje1);

//toUpperCase
res = mensaje1.toUpperCase();
console.log(res);

//toLowerCase
res = mensaje1.toLowerCase();
console.log(res);

//concat
let primerNombre = 'Marcos';
let segundoNombre = 'Ezequiel';
let apellido = 'Herrera';

res = primerNombre.concat(segundoNombre, apellido, ' -', ' ', 'Ingeniero')
console.log(res);

//trimç
let mensajeHTTP = '        Transacción exitosa          ';
console.log(mensajeHTTP);
console.log(mensajeHTTP.trim());

//split
let creditCard = '4517-4054-8100-4578';
const arrayCreditCard = (creditCard.split('-');
console.log(arrayCreditCard);
