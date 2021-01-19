const logo = document.getElementById('logo');
console.log(logo);

const logov2 = document.querySelector('#logo');
console.log(logov2);

const item = document.getElementsByClassName('item');
console.log(item);

const itemv2 = document.querySelectorAll('.item');
console.log(itemv2);

console.log(Array.isArray(item), Array.isArray(itemv2));
console.log(Reflect.has(item, 'forEach'), Reflect.has(itemv2, 'forEach'));

//Forma de validar de que una variable sea un iterador
console.log(Reflect.has(item, Symbol.iterator), Reflect.has(itemv2, Symbol.iterator));

//Conclusión: se usa querySelector para obtener Id y Colecciones de elementos o iteradores, pues así es mucho más eficiente.


//-----

const links = document.getElementsByTagName('a');
const linksv2 = document.querySelectorAll('a');

console.log(links, linksv2);

//---

const header = document.querySelector('header');
const hijosHeader = header.children;
console.log(hijosHeader);

const hijosHeader2 = header.childNodes;
console.log(hijosHeader2);

//---

console.log('padre', logo.parentElement, logo.parentNode);

//---

console.log('Hermano', logo.parentElement.children);
console.log('hermano', logo.nextElementSibling);