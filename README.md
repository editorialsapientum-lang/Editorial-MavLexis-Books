# Editorial MavLexis Books — Sitio web

Sitio web estático (no requiere programación) para Editorial MavLexis Books,
listo para publicarse gratis en **Netlify**.

---

## 1. Cómo subir el sitio a Netlify (5 minutos, sin código)

1. Entra a [https://app.netlify.com](https://app.netlify.com) y crea una cuenta gratuita (puedes usar tu correo o tu cuenta de Google).
2. En el panel principal busca el recuadro que dice **"Deploy manually"** / **"Arrastra tu carpeta aquí"** (drag and drop).
3. Abre la carpeta de este proyecto en tu computadora y **arrastra TODA la carpeta** (la que contiene `index.html`, `css`, `js`, `assets`, etc.) hacia ese recuadro.
   - Importante: arrastra la carpeta que contiene `index.html` directamente, no una carpeta que la contenga por dentro.
4. Netlify subirá los archivos y en unos segundos te dará una dirección tipo `https://nombre-al-azar.netlify.app`. ¡Tu sitio ya está en línea!
5. (Opcional) En **Site settings → Change site name** puedes cambiar el nombre a algo como `mavlexisbooks.netlify.app`.
6. (Opcional) Si más adelante compran un dominio propio (ej. `mavlexisbooks.com`), en **Domain settings** pueden conectarlo siguiendo el asistente de Netlify.

### ¿Cómo actualizo el sitio después?
Cada vez que quieras cambiar algo (agregar un libro, cambiar un texto), edita los archivos en tu computadora y vuelve a arrastrar la carpeta completa al mismo panel de Netlify ("Deploys" → arrastra de nuevo). Netlify reemplaza el sitio anterior por la versión nueva.

> **Alternativa recomendada a futuro:** conectar el sitio a una cuenta de GitHub para que las actualizaciones sean automáticas. Si en algún momento quieren dar ese paso, contáctenme y les preparo esa configuración.

---

## 2. Los formularios (contacto y postulación de libros)

Las páginas **Contacto** y **Publica tu libro** usan **Netlify Forms**, que ya viene incluido gratis:

- No necesitas configurar nada: apenas subas el sitio, Netlify detecta los formularios automáticamente.
- Los mensajes que envíen los visitantes llegarán al panel de Netlify: **Site → Forms**.
- Para recibir los mensajes también por correo: **Site settings → Forms → Form notifications → Add notification → Email notification**, y coloca `mavlexisbooks@gmail.com` (el correo oficial de la editorial) para recibir ahí tanto los mensajes de contacto como las postulaciones de autores.
- El plan gratuito de Netlify permite 100 envíos de formulario por mes (más que suficiente para empezar).

> ⚠️ **Importante — por qué un formulario puede parecer que "no funciona":** los formularios de Netlify **solo funcionan una vez que el sitio está publicado en Netlify** (no funcionan si abres los archivos `.html` directamente en tu computadora con doble clic, ni en una vista previa local). Si al probarlo el formulario no te redirige a la página de gracias, confirma que: (1) ya subiste la última versión de la carpeta a Netlify, y (2) estás probando desde el enlace `https://tu-sitio.netlify.app`, no desde un archivo local.

### El flujo de "Publica tu libro" ya incluye el envío del manuscrito

El formulario de postulación **no adjunta el manuscrito** (los archivos de manuscritos suelen ser muy pesados para un formulario web). En su lugar, el flujo es:

1. El autor llena el formulario con los datos de su proyecto y hace clic en "Enviar postulación".
2. Es redirigido automáticamente a `gracias-publicacion.html`, una página que le indica claramente que debe enviar el archivo completo de su manuscrito (Word o PDF) por correo a **`mavlexisbooks@gmail.com`**, incluyendo su nombre y el título de la obra en el asunto.
3. El mismo aviso y correo también aparecen dentro del formulario, justo antes del botón de enviar, para que quede claro incluso si el autor no llega a ver la página de confirmación.

Si prefieres usar otro correo para recibir manuscritos, reemplaza `mavlexisbooks@gmail.com` en dos archivos: `publica-tu-libro.html` y `gracias-publicacion.html` (usa "Buscar y reemplazar" en tu editor de texto).

---

## 3. Cómo agregar o editar libros del catálogo (sin programar)

Toda la información de los libros vive en un solo archivo:

```
js/data.js
```

Ábrelo con el Bloc de notas, Notepad++, o cualquier editor de texto simple (evita Word). Los 20 libros ya están cargados con los datos reales que nos compartiste en la plantilla de Excel (título, autores, fecha, editorial, categoría, sinopsis, ISBN y enlace de Amazon).

Para **agregar un libro nuevo**:
1. Copia uno de los bloques que empieza con `{` y termina con `},`
2. Pégalo justo antes del corchete final `];`
3. Cambia los datos (título, autores, categoría, fecha, ISBN, enlace de Amazon, nombre del archivo de portada, etc.)
4. Guarda la imagen de portada dentro de la carpeta `assets/portadas/`
5. Vuelve a subir la carpeta a Netlify (paso 1 de este documento)

Cada campo está explicado con comentarios al inicio del archivo `js/data.js`.

Para **agregar una portada nueva**: guarda la imagen (jpg o png) dentro de `assets/portadas/` y escribe el nombre exacto del archivo en el campo `portada` del libro correspondiente.

Para marcar un libro como del sello **Sapientum**, cambia su campo:
```
sello: "MavLexis Books"
```
por:
```
sello: "Sapientum"
```

### Categorías disponibles

Estas son las mismas categorías de la lista desplegable de tu plantilla de Excel, para que ambos documentos queden sincronizados:

`derecho` (Derecho) · `administrativas` (Ciencias Administrativas) · `logistica` (Operaciones y Logística) · `cadena-suministros` (Cadena de Suministros) · `salud` (Ciencias de la Salud) · `sociales` (Ciencias Sociales) · `tecnologia` (Tecnología) · `educacion` (Educación) · `humanidades` (Humanidades) · `comunicacion` (Comunicación Social)

Solo se muestran en la biblioteca las categorías que ya tienen al menos un libro cargado — así que si agregas el primer libro de "Derecho", por ejemplo, esa sección aparecerá automáticamente.

> **Sigue llenando el Excel:** si prefieres seguir trabajando desde la plantilla de Excel en lugar de editar `js/data.js` directamente, solo agrega las filas nuevas allí y compárteme el archivo actualizado — yo regenero `js/data.js` por ti en minutos.

---

## 4. Datos que debes revisar y personalizar

Antes de anunciar el sitio, revisa estos puntos:

- **Correo y teléfono**: ya están configurados con los datos reales de la editorial (`mavlexisbooks@gmail.com` y `+507 6594-3848`) en `js/main.js` (pie de página), `contacto.html`, `publica-tu-libro.html`, `gracias-publicacion.html` e `index.html`. Si en algún momento cambian, hay que actualizarlos en esos mismos archivos.
- **Redes sociales**: los íconos de Facebook / Instagram / WhatsApp en el pie de página apuntan a `#` (sin destino). Edita los enlaces en `js/main.js`, dentro de la función `renderFooter()`.
- **Título y autor de cada libro**: ya provienen directamente de la plantilla de Excel que llenaste, así que son los datos oficiales. Aun así, dale un vistazo rápido a `js/data.js` para confirmar que todo se vea bien (algunos títulos que venían en MAYÚSCULAS en el Excel los convertí a un formato más legible; verifica que no se haya alterado ningún nombre propio).
- **Portadas 8 y 17**: eran el mismo libro duplicado ("Gestión y Dirección del Capital Humano", misma fecha e ISBN). Ya eliminé el duplicado (libro-017) del catálogo; solo queda una vez, con la portada 8.
- **Catálogo de Sapientum**: por ahora solo un libro está marcado como Sapientum (`libro-001`, "Administración: Fundamentos básicos") — el resto están bajo MavLexis Books, tal como indica tu plantilla. En cuanto tengas más títulos de Sapientum, agrégalos siguiendo el paso 3.
- **ISBN y enlaces de Amazon**: ya están cargados para los 20 libros según tu plantilla. Si el ISBN de algún libro cambia o consigues uno nuevo, actualízalo directamente en `js/data.js`.

---

## 5. Estructura de archivos

```
index.html              → Página de inicio
catalogo.html            → Biblioteca / catálogo con buscador y filtros
publica-tu-libro.html    → Proceso editorial + formulario para autores
nosotros.html            → Misión, visión, valores, sellos editoriales
contacto.html            → Formulario de contacto
gracias.html             → Página de agradecimiento tras enviar un formulario
404.html                 → Página de error (enlace roto)
css/styles.css           → Todos los estilos visuales del sitio
js/data.js               → Catálogo de libros (la "base de datos" del sitio)
js/main.js               → Menú, pie de página, tarjetas y ventana de detalle de libro
js/catalogo.js           → Buscador y filtros de la biblioteca
assets/img/              → Logo de la editorial
assets/portadas/         → Portadas de los libros
netlify.toml             → Configuración de despliegue para Netlify
```

---

## 6. Preguntas frecuentes

**¿Necesito saber programar para mantener el sitio?**
No. Para textos y libros solo necesitas editar archivos de texto plano siguiendo los ejemplos ya incluidos.

**¿Puedo vender libros directamente desde el sitio (pagos en línea)?**
Este sitio está preparado para mostrar el catálogo y recibir solicitudes de compra por formulario/correo. Si más adelante quieren cobrar en línea (tarjeta, Yappy, etc.), se puede integrar un botón de pago — es un paso adicional que puedo ayudarte a preparar cuando lo definan.

**¿El sitio funciona bien en celular?**
Sí, todas las páginas son responsivas: se adaptan a celular, tablet y computadora.
