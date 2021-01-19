const usuario = {
    id: 5,
    nombre: 'Sara',
    edad: 26,
    saludo: function(){
        return 'Hola, bienvenido al curso!';
    }
};

console.log(usuario.saludo());

const viaje = {
    tiempo: function(distancia, velocidad) {
        return distancia/velocidad;
    }
};

console.log(viaje.tiempo(4000,60));

const viaje02 = {
    distancia: 4000,
    velocidad: 60,
    tiempo: function(distancia, velocidad){
        return this.distancia/this.velocidad;  //Al usar 'this' se hace referencia a una propiedad dentro del objeto
    }
}

console.log(viaje02.tiempo());