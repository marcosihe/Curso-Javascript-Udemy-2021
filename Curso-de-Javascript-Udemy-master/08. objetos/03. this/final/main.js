let edad = 10;
let nombre = 'John';

this.nombre = 'Jessica';
this.edad = 40;

console.log(this.nombre, this.edad);

const usuario = {
    id: 5,
    nombre: 'Sarah',
    edad: 38,
    saludo: function(){
        return `Hola ${this.nombre}!`;
    },

    getEdad: () =>{
        return this.edad;
    },
    getEdad2: function() {
        return this.edad;
    }
};

console.log(usuario.saludo());
console.log(usuario.getEdad()); //Obs 1
console.log(this);
console.log(usuario.getEdad2());

/**
 * Obs 1
 * Observo que muestra '40' dado que hace referencia al objeto global, dado que 'this'
 * no funciona bajo el contexto de las funciones de flecha, es decir, no pueden
 * reerencias a propiedades o métodos del objeto que contienen a esa función
 * de flecha
 */