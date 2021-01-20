
//Utilizaré un arreglo donde almacenaré todas las respuestas
let respuestas = {
    nombre: '',
    lenguajes: [],
    nivel: '',
    pais: ''
};

const boton = document.querySelector('#boton');

boton.addEventListener('click', e =>{
    e.preventDefault(); //anula el funcionamiento nativo de este botón (de enviar los datos a la pág sobre la cual estoy trabajando)
    console.log(respuestas);
    const respuesta = document.querySelector('#respuesta');
    respuesta.innerHTML = ''; //Recordando el funcionamiento del innerHTML, le indico que 'limpie' las repsuestas con ''
    for(propiedad in respuestas){
        respuesta.innerHTML += `${propiedad}: ${respuestas[propiedad]}<br/>`;
    }
});

//input
const nombre = document.querySelector('#nombre');
nombre.addEventListener('input', e =>{
    respuestas.nombre = nombre.value;
});


//checkbox
//const lenguajes = document.querySelectorAll('input[type=checkbox]:checked');
const lenguajes = document.querySelectorAll('input[type=checkbox]');
lenguajes.forEach(lenguaje =>{
    lenguaje.addEventListener('click', e =>{
        getLenguajes();
    });
});

function getLenguajes(){
    respuestas.lenguajes = [];
    const items = document.querySelectorAll('input[type=checkbox]:checked');
    items.forEach(item =>{
        respuestas.lenguajes.push(item.value);
    }); 
}

//radios
const niveles = document.querySelectorAll('input[type=radio]');
niveles.forEach(nivel => {
    nivel.addEventListener('click', e => {
        respuestas.nivel = e.target.value;
    });
});

//select
const pais = document.querySelector('#pais');
pais.addEventListener('change', e =>{ //change hará que se active cada vez que se seleccione una nueva opción dentro del select
    respuestas.pais = e.target.value;
});

//Select: agregar país
const bPais = document.querySelector('#bPais');
bPais.addEventListener('click', e => {
    e.preventDefault(); //soluciona el inconveniente de no poder agregar paises, pues se actualiza la página automáticamente al hacer click sin esta línea de código
    const texto = document.querySelector('#itPais').value;
    if(texto == '') return false; //sirve para evitar agregar opciones vacias al hacer click en 'añadir'
    const option = document.createElement('option');
    option.value = texto;
    option.text = texto;
    pais.add(option);
});