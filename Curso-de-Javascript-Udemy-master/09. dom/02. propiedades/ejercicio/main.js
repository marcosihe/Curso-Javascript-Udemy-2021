
const foto = document.querySelector('#foto');
console.log(foto.width, foto.getAttribute('width'));

console.table([
    {
        valor: foto.width,
        tipo: typeof foto.width
    },
    {
        valor: foto.getAttribute('width'),
        tipo: typeof foto.getAttribute('width')
    }
]

);

foto.width = 500; //acepta valores numéricos, por ende no acepta porcentajes
foto.setAttribute('width', '100%'); // En ambos casos espera parámetros de tipo string, por ese se le puede indicar con porcentajes

//---

console.log(boton.textContent);

boton.textContent = 'Hi evereyone'; //Puedo observar el cambio directamente en el boton
console.log(boton.textContent);

boton.setAttribute('class', 'boton-principal'); //se le puede asignar una clase para modificar atributos, si no la tenía
