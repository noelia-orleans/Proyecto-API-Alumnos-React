# Proyecto de Consumo de API con Node.js + Diseño en REACT
En este proyecto he utilizado una API REST en `Node.js` (puerto 3000) y el cliente `React` con Vite (puerto 5173), que muestra los alumnos (usuarios) de una clase al hacer click sobre el botón "Mostrar Usuarios".

En la **estructura** del proyecto he aplicado una división por componentes, aislando cada funcionalidad en una clase:
- `Boton.jsx`: dedicado a la lógica del botón: Cuando se hace click en el botón "Mostrar Usuarios", se ejecuta la función `cargarUsuarios()` 
- `Cargar.jsx`: realiza las funciones de consulta a la API mediante la función `cargarUsuarios()` y guarda los resultados JSON en una lista mediante la función `setUsuarios()`
- `Lista.jsx`: recorre los elementos de la lista anterior con `.map()` y devuelve un `<li>` por usuario.
- `App.jsx`: es la página principal que llama a la lógica anterior.

Para el **diseño**, he empleado funcionalidades de CSS que permiten mejorar la experiencia del usuario, como las transiciones de los componentes al pasar el ratón por encima (el color del botón se vuelve más clarito, mientras que los elementos de la lista, además de lo anterior, aumentan su tamaño) y los efectos al hacer click sobre un elemento (el color del botón se vuelve más oscuro, y disminuye su tamaño para crear sensación de hundimiento)

Para **ejecutar el proyecto**, primero debemos arrancar la API en el servidor local (terminal: `node api.js`), y luego debemos cargar el proyecto, también en un servidor local (terminal: `npm run dev`)


**¿Qué es CORS?**: CORS es una política del navegador que bloquea respuestas de otro origen (protocolo, dominio o puerto). El cliente (:5173) y la API (:3000) tienen puertos distintos, así que la API debe enviar Access-Control-Allow-Origin para ese origen, lo que se hace con app.use(cors({ origin: 'http://localhost:5173' })).
