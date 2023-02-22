/* Seleccionando el elemento con la clase de izquierda. */
const left = document.querySelector('.left');

/* Seleccionando el elemento con la clase de derecho. */
const right = document.querySelector('.right');

/* `c` es una variable que almacena el valor del elemento con la clase de `contenedor`. */
const container = document.querySelector('.container');

/* Agregar un detector de eventos al elemento con la clase de `izquierda`. Cuando el mouse ingresa al
elemento, agrega la clase de `hover-left` al elemento con la clase de `container`. */
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
/* Eliminando la clase de `hover-left` del elemento con la clase de `container`. */
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))


/* Agregando la clase de `hover-right` al elemento con la clase de `container`. */
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
/* Eliminando la clase de `hover-right` del elemento con la clase de `container`. */
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))