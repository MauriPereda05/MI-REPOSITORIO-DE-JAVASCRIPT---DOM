// DOM

// getElements

let element = document; 

// document

element = document; // document representa el documento HTML. Es la interfaz que permite interactuar con el contenido de la página web.

// head

element = document.head; // document.head asigna el elemento <head> del documento HTML. Ahora element contiene una referencia al elemento <head> permitiendo que accedas a él y manipules su contenido.

// body

element = document.body; // document.body hace referencia al elemento <body> al igual que head podemos acceder y manipular su contenido utilizando la variable element.

// console.log(element);

// getElementById : Agarra un elemento mediante el atributo ID 

const elementos = document.getElementById('titulo'); // document.getElementById('titulo') busca y selecciona un elemento en el documento HTML que tiene el atributo id y este elemento se asigna a la variable elementos lo que te permite trabajar con él en tu código.

// console.log(elementos);

// querySelector 

const Navigation = document.querySelector('#titulo'); // document.querySelector('#titulo') Este método busca y selecciona el primer elemento del documento HTML que coincide con el selector CSS especificado ya sea un selector de id,clase,etiqueta,etc en CSS válido. al igual que document.getElementById('titulo'); pero Si encuentra un elemento que cumple con esta condición lo devuelve. Si no encuentra ningún elemento devuelve null.

// console.log(Navigation);

// ¿Cual es la diferencia de getElementById y querySelector? // getElementById selecciona un elemento específico utilizando su atributo id. Es más rápido y directo y querySelector selecciona un elemento utilizando cualquier selector CSS válido lo que incluye selectores de id,clases,etiquetas,atributos,etc. Es más flexible pero ligeramente más lento que getElementById.

// querySelectorAll

const navegador = document.querySelectorAll('nav a'); // querySelectorAll selecciona todos los elementos <a> que se encuentran dentro de un elemento <nav>. Esto devuelve una lista de todos los elementos que coinciden con el selector es decir,todos los enlaces <a> que están dentro de un elemento de navegación <nav>.

// console.log(navegador);

// modifiedElements 

// textContent 

titulo.textContent = 'Modifica el titulo mediante JS'; // textContent es una propiedad que te permite modificar el texto dentro de un elemento omo un párrafo <p>,un encabezado <h1>, <h2>, etc. o un div <div>,etc.

// innerHTML

titulo.innerHTML = `<h1>hola mundo</h1>` // innerHTML te permite acceder al contenido HTML dentro de un elemento y agregar o modificar dicho contenido si es necesario. 

// ¿cual es la diferencia en textContent y innerHTML? textContent accede y modifica solo el texto dentro de un elemento HTML sin interpretar ni afectar las etiquetas HTML y innerHTML accede y modifica tanto el contenido de texto como las etiquetas HTML dentro de un elemento HTML. Te permite agregar,modificar o eliminar tanto texto como elementos HTML dentro del elemento seleccionado.

// Styles

// property style

titulo.style.backgroundColor = 'orange'; // Usa estilos en Javascript y aqui estamos cambiando el color de fondo del elemento con el id "titulo" a naranja.

// property classList.add

titulo.classList.add('card', 'card-red'); // Añade las clases como por ejemplo "card" y "card-red" al elemento con el id "titulo" en tu HTML. Si tienes estilos CSS definidos para estas clases se aplicarán al elemento.

// property classList.remove

titulo.classList.remove('card'); // classList.remove es un método en JavaScript que elimina una clase específica de un elemento HTML.

// Dom Traversing

const menuNavigation = document.querySelector('nav');

const listItem = document.querySelector('nav ul li');

// parentElement

console.log(listItem.parentElement.parentElement); // listItem.parentElement.parentElement accede al elemento abuelo del elemento referenciado por listItem. Es una forma de navegar llegar a un nivel superior en la jerarquía de elementos.

// nextElementSibling

const siguienteElemento = document.getElementById('elemento1').nextElementSibling; // nextElementSibling es una propiedad que te permite acceder al siguiente elemento hermano. Esto significa que puedes seleccionar el elemento HTML que está justo después del elemento actual en la misma jerarquía.

console.log(siguienteElemento)

// children

console.log(menuNavigation.children[0].children[1]); // children te da acceso a los elementos secundarios directos de un elemento HTML.

// Create element 

// Crear elementos 

const create = document.createElement('p');
const container = document.getElementById('container');

// Agregar contenido 

create.textContent = 'Fui creado por createElement';

// Agregar atributos(Opcional)
create.classList.add('FierstClass', 'SecondClass');
create.setAttribute('id', 'firstID');

// Renderizar elemento

container.appendChild(create);

console.log(create);

