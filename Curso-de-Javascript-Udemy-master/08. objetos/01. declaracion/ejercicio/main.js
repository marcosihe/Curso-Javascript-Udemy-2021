let objeto = {
    nombre: 'Marcos',
    edad: 30,
    bilingue: true,
    habilidades: ['Programacion', 'disenio', 'deportes'] //en el último elemento se puede dejar o no la coma. No tira error
};

console.log(objeto);

console.log(objeto.habilidades);

console.table(objeto);

let post = {
    fecha: '2021/01/18',
    titulo: 'Aprendiendo JS',
    author: {
        nombre: 'MARCOS',
        rol: 'publicador',
        foto: 'perfil1.jpg'
    },
    comentarios: [
        {
            id: 1,
            texto: 'Nice content',
            author: {
                nombre: 'Rocio',
                rol: 'usuario',
                foto: 'perfil12.jpg'
            }
        },
        {
            id: 2,
            texto: 'I want more videos like that',
            author: {
                nombre: 'Lucia',
                rol: 'usuario',
                foto: 'perfil21.jpg'
            }
        }
    ]
}

console.table(post);
console.table(post.author);
console.table(post.comentarios[0].author);
console.log(post.comentarios[0].author.nombre);
//Otra forma de obtener lo mismo mediante otros comandos es la siguiente:
console.log(post['comentarios'][0]['author']['nombre']);

//Agregando propiedades que no existían en los objetos

post['likes'] = 50;
console.table(post);

//Otra forma de agregar propiedades es con el operador punto . 
post.shares = 100;
console.table(post);

//For in: sirve exclusivamente para recorrer objetos

for (const propiedad in post) {
    console.log(propiedad);
        
}

for (const propiedad in post) {
    const clave = propiedad;
    const valor = post[clave];
    console.log(clave, valor);
}