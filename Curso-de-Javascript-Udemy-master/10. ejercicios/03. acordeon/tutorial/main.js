const items = document.querySelectorAll('.acordeon .item .header button');

items.forEach(item => {
    item.addEventListener('click', e => {
        const content = e.target.parentElement.nextElementSibling; //obs 1
        content.classList.toggle('show');
    });
});

/** obs 1
 * Lo que hago es posicionarme en la capa padre de button y luego con 'nextElementSibling'
 * posicionarme en el siguiente elemento (hermano de ese padre, el cual contiene la info
 * que deseo desplegar o mostrar)
 */