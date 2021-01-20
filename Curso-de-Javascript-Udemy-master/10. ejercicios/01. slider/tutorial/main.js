const bPrev = document.querySelector('#bPrev');
const bNext = document.querySelector('#bNext');
const items = document.querySelectorAll('#slider-container .item');

let index = 0;
const total = items.length - 1;

//showItem(index);

bPrev.addEventListener('click', e => {
    if (index > 0) {
        index--;
        ocultarItems();
        mostrarItem(index);
    }
});

bNext.addEventListener('click', e => {
    if (index < total) {
        index++;
        ocultarItems();
        mostrarItem(index);
    }
});

function mostrarItem() {
    items[index].classList.add('item-active');
}

function ocultarItems() {
    items.forEach( item => {
        item.classList.remove('item-active');
    });
}