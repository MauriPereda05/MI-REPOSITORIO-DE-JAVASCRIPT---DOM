# JAVASCRIPT - DOM 

## ¿Que es DOM en javascript?

El DOM o Document Object Model (Modelo de Objetos del Documento) es una representación en forma de árbol de la estructura de un documento HTML.

# getElements

## getElementById

getElementById es un método en JavaScript que te permite seleccionar un elemento HTML utilizando su ID único.

```javascript
const elementos = document.getElementById('titulo');
```

## querySelector

querySelector es un método que te permite seleccionar un elemento HTML utilizando cualquier selector CSS válido.

```javascript
const Navigation = document.querySelector('#titulo');
```

## querySelectorAll

querySelectorAll selecciona todos los elementos a que se encuentran dentro de un elemento nav. Esto devuelve una lista de todos los elementos que coinciden con el selector

```javascript
const navegador = document.querySelectorAll('nav a');
```

# modifiedElements

## textContent

textContent es una propiedad que te permite acceder al contenido de texto de un elemento HTML y modificarlo

```javascript
titulo.textContent = 'Modifica el titulo mediante JS';
```

## innerHTML

innerHTML te permite acceder al contenido HTML dentro de un elemento y agregar o modificar dicho contenido si es necesario.

```javascript
titulo.innerHTML = `<h1>hola mundo</h1>`
```

# styles

## property style

Usa estilos en Javascript

```javascript
titulo.style.backgroundColor = 'orange';
```

## property classList.add

Añade las clases como por ejemplo "card" y "card-red" y estas clases se ejecutan si tienes un estilo CSS.

```javascript
titulo.classList.add('card', 'card-red');
```

## property classList.remove

classList.remove es un método que elimina una clase específica de un elemento HTML

```javascript
titulo.classList.remove('card');
```

# Dom Traversing

## parentElement

parentElement es una propiedad que te permite acceder al elemento padre de un elemento HTML

```javascript
const menuNavigation = document.querySelector('nav');

const listItem = document.querySelector('nav ul li');

console.log(listItem.parentElement.parentElement);
```

## nextElementSibling

nextElementSibling es una propiedad que te permite acceder al siguiente elemento hermano

```javascript
const siguienteElemento = document.getElementById('elemento1').nextElementSibling;
```

## children

children es una propiedad que accede a una colección de los elementos secundarios (hijos)

```javascript
console.log(menuNavigation.children[0].children[1]);
```

# Create element

## Crear elementos 

Document.createElement es un metodo que crea un nuevo elemento HTML según el nombre de la etiqueta proporcionado como argumento.

```javascript
const create = document.createElement('p');
```

## Agregar contenido

```javascript
create.textContent = 'Fui creado por createElement';
```

## Agregar atributos(Opcional)

```javascript
create.classList.add('FierstClass', 'SecondClass');
```

setAttribute se utiliza para establecer el valor de un atributo en un elemento HTML. Permite asignar un valor específico a un atributo dado del elemento.

```javascript
create.setAttribute('id', 'firstID');
```

## Renderizar elemento

appendChild es un método en JavaScript que se utiliza para agregar un hijo al final de la lista de hijos de un padre.

```javascript
container.appendChild(create);
```