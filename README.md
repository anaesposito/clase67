# Clase 67: Práctica

Hoy pondremos en práctica lo visto en el módulo para hacer una web dinámica con filtros y arrays de objetos. 

El HTML y el CSS ya están listos. Tu tarea es lograr que los filtros sean funcionales. 

En `index.js` tenés un array de objetos que representan productos. Tu tarea es lograr que el usuario pueda filtrar los productos que le interesan siguiendo el formulario disponible en HTML. 

Te recomendamos comenzar primero por los `select` y una vez que ellos esten funcionales, seguir por el `input`. 

### Resultado esperado:

1. Al seleccionar un color en el primer select y enviar el formulario, se ven solo los productos de ese color. 
2. Al seleccionar un tipo en el segundo select y enviar el formulario, se ven solo los productos de ese tipo. 
3. Al seleccionar tipo y color se ven los productos donde coincidan ambos. 
4. Si no hay productos disponibles, aparece un cartel anunciandolo (con darle la etiqueta `<h2>` ya se verá estilado)
5. Al escribir algo en el input, se deberán mostrar los productos en donde `nombre`, `tipo` o `color` coincidan con la busqueda. Si ademas hay algún `select` seleccionado, se debe tomar en cuenta para la búsqueda. 
