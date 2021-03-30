# HTML

-   Elemento: Parte de una pagina web: `<p class="nice">Hello world!</p>`.
-   Elementos anidados: `<p>Viva <strong>Peron.</p></strong>`.
-   Elementos de bloque: Elementos estructurales de una pagina (encabezados, párrafos, listas, pie de pagina, etc.). Aparecen en una línea nueda despues de cualquier contenido anterior. Cualquier contenido posterios tambien aparecerá en una linea nueva.
-   Elementos en linea: Estan contenidos dentro de elementos de bloque. No hará que aparezca una linea nueva.
-   Elementos vacios (void elements): Consisten solo de una etiqueta única, sin etiqueta de cierre: `<img src="https://raw.githubusercontent.com/images/firefox-icon.png">`.

-   Etiqueta: Usada para crear un elemento: `<p> </p>`.
-   Atributos: Contienen informacion extra sobre el elemento que no se mostrara en el contenido. `<p class="editor-note"> Viva Peron</p>`.
-   Atributos booleanos: `<input type="text" disabled>`

### Anatomía basica de un documento HTML

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Mi página de prueba</title>
    </head>
    <body>
        <p>Esta es mi página</p>
    </body>
</html>
```

### Caracteres especiales

| Caracter linteral | Equivalente de referencia |
| :---------------: | :-----------------------: |
|         <         |           &lt;            |
|         >         |           &gt;            |
|         "         |          &quot;           |
|         '         |          &apos;           |
|         &         |           &amp;           |

### Comentarios

```html
<!--- Esto es un comentario --->
```

### Imágenes

Incrustar una imagen en la página

```html
<img src="images/firefox-icon.png" alt="Mi imagen de prueba" />
```

-   `src=`: Ruta de ubicacion del archivo.
-   `alt=`: Texto que describe la imagen.

### Encabezados

HTML posee 6 niveles de encabezados `<h1> - <h6>`

```html
<h1>Mi título principal</h1>
<h2>Mi título de nivel superior</h2>
<h3>Mi subtítulo</h3>
<h4>Mi sub-subtítulo</h4>
```

### Párrafos

Se utilizan para encerrar párrafos de texto.

```html
<p>Este es un simple parrafo</p>
```

### Listas

-   Listas desordenadas: Orden de los elementos no relevante. `<ul>` _unordered list_
-   Listas ordenadas: Orden relevante. `<ol>` _ordered list_
-   Cada elemento de la lista se coloca dentro de un elemento `<li>` _list item_.

```html
<p>En Peronia, somos una comunidad de:</p>

<ul>
    <li>Ladrones</li>
    <li>Mentirosos</li>
    <li>Mantenidos</li>
    <li>Mononeuronales</li>
</ul>

<p>pernoniando juntos...</p>
```

### Vínculos

`<a> </a>`: _"anchor"_

`href=`: _hypertext reference_

```html
<a href="https://www.mozilla.org/es-AR/about/manifesto/">Manifesto Mozilla</a>
```
