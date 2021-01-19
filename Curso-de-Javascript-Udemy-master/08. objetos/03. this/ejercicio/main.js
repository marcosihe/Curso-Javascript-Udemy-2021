//this
/** 1º USO
 * En un objeto, this, hace referencia al mismo objeto
 * con el cual se puede acceder a sus propiedades
 * y métodos.
 */

 let post = {
     likes: 160,
     getLikes: function(){
         return this.likes + ' likes';
     }
 };
 console.log(post.getLikes());

 /** 2º USO
  * This en una función o en un contexto donde se manda a llamar sin estar en
  * ningún objeto, representa al objeto global.
  */

  this;
  function prueba(){
      return this;
  }

console.log(prueba());

/** 3º USO
 * Cuando se trata de eventos, this, contiene al elemento HTML
 * que activó el evento.
 */

 /** 4º USO
  * This no funciona bajo el contexto de las funciones de flecha, por lo tanto
  * al querer obtener la propiedad, retornará 'uindefined'.
  * This por sí solo, en una función de flecha hace
  * referencia al objeto global.
  */
let tuit = {
    likes: 10,
    rt: 20,
    getLikes: function(){return this.likes;},
    getRT: () => {return this.rt;}
};

console.log(tuit.getLikes());
console.log(tuit.getRT());