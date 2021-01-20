
const body = document.querySelector('body');
const container = document.createElement('div');

container.id = "mainContainer";
container.style.backgroundColor = "#003366";
container.style.color = "white";
container.style['padding'] = "50px";
container.textContent = "Bienvenidos al curso";

body.appendChild(container);

const texto = document.createTextNode(' de Javascript');
container.append(texto);

console.log(container.textContent);

const link = document.createElement('a');
link.setAttribute('href', 'http://www.google.com');
link.textContent = 'Ir a Google';

const boton = document.createElement('button');
boton.textContent = 'Click aquí';

container.append(' ', link, ' ', boton, ' ');

//Eliminar elementos
boton.remove();

container.append(boton);
container.append(link);


//innerHTML

const html = `
    <div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
`;

//Quiero transformar la cadena de texto anterior en código html (opción para crear html dinámico)

//container.innerHTML = html; //Probar de esta forma (sin el signo +)
container.innerHTML += html;
