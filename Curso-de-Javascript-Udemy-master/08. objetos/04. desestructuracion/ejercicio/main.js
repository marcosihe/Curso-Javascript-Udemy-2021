const usuario = {
    id: 5,
    nombre: 'Marcos',
    edad:23,
    habilidades: [
        {
            id: 0,
            nombreHabilidad: 'programacion'
        },
        {
            id: 1,
            nombreHabilidad: 'canto'
        }
    ]
};

/*
const id = usuario.id;
const nombre = usuario.nombre;
cons habilidad01 = usuario.habilidades[0].nombreHabilidad;
*/

//Para hacer lo anterior de una manera más eficiente, conviene desestructurar:

const {id, nombre, habilidades} = usuario;
console.log(id, nombre, habilidades);

const [habilidad01, habilidad02] = habilidades;
console.log(habilidad01, habilidad02);

// -----

const elementos = [
    {id: 0, nombre: 'KK'},
    {id: 0, nombre: 'Canelita'},
    {id: 0, nombre: 'nook'}
];

const [ kk, canelita, nook] = elementos;
console.log(kk, canelita, nook);