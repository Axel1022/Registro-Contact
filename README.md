# Aplicación de Registro de Contactos 📇

Esta es una aplicación web sencilla para registrar y gestionar contactos. Permite a los usuarios ingresar información de contacto y mostrarla dinámicamente en la página. Los usuarios también pueden eliminar contactos individuales de la lista.

## Características ✨

- Registrar un nuevo contacto completando el nombre, número de teléfono y tipo de contacto.
- Mostrar contactos registrados dinámicamente en la página.
- Eliminar contactos de la lista.
- Limpiar los campos de entrada después de enviar o al hacer clic en el botón de limpiar.

## Tecnologías Utilizadas 🛠️

- HTML
- CSS (Bootstrap)
- JavaScript (jQuery)

## Estructura del Proyecto 📁

```
.
├── index.html
├── assets
│   ├── css
│   │   ├── lib
│   │   │   └── bootstrap
│   │   │       └── bootstrap.min.css
│   │   └── site
│   │       └── main.css
│   └── js
│       ├── lib
│       │   └── jquery
│       │       └── jquery-3.7.1.min.js
│       └── site
│           └── indexJq.js
├── index.html
└── README.md

```

## Empezando 🚀

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:

   ```sh
   git clone https://github.com/tu-usuario/contact-registration-app.git
   ```

2. Navega al directorio del proyecto:

   ```sh
   cd contact-registration-app
   ```

3. Abre el archivo `index.html` en tu navegador web preferido.

## Descripción de Archivos 📄

### index.html

Este archivo contiene la estructura HTML de la aplicación, incluyendo:

- Campos de entrada para el nombre, número de teléfono y tipo de contacto.
- Botones para enviar y limpiar el formulario.
- Un contenedor para mostrar dinámicamente los contactos registrados.

### assets/css/lib/bootstrap/bootstrap.min.css

Este archivo incluye el CSS de Bootstrap para el estilo de la aplicación.

### assets/css/site/main.css

Este archivo contiene CSS personalizado para el estilo adicional de la aplicación.

### assets/js/lib/jquery/jquery-3.7.1.min.js

Este archivo incluye la biblioteca de jQuery.

### assets/js/site/indexJq.js

Este archivo contiene el código JavaScript que maneja lo siguiente:

- Validación del formulario.
- Creación y eliminación dinámica de tarjetas de contacto.
- Limpieza de los campos del formulario.

## Funciones de JavaScript ⚙️

### CreateContactType

Recoge los valores de entrada, los valida y, si son válidos, crea una nueva tarjeta de contacto y la añade al contenedor de contactos. Si la validación falla, muestra una alerta.

### CreateHtmlContactType

Genera la estructura HTML para una tarjeta de contacto y la añade al contenedor de contactos.

### Limpiar

Limpia los campos de entrada y elimina cualquier clase de validación.

### Validate

Valida los campos de entrada y devuelve un booleano que indica si las entradas son válidas.

## Cómo Usar 📝

1. Ingresa el nombre del contacto, número de teléfono y selecciona el tipo de contacto del menú desplegable.
2. Haz clic en el botón "Guardar" para guardar el contacto.
3. El contacto se mostrará en una tarjeta debajo del formulario.
4. Para eliminar un contacto, haz clic en el botón "Eliminar" en la tarjeta del contacto correspondiente.
5. Para limpiar los campos de entrada, haz clic en el botón "Limpiar".

## 📧 Contacto

Para cualquier pregunta o comentario, puedes contactar al autor:

- **Nombre**: Gary Alexander Campusano Paredes
- **Correo**: [ingcampusano@outlook.com](mailto:ingcampusano@outlook.com)
- **LinkedIn**: [Linkedin](https://www.linkedin.com/in/gary-alexander-campusano-paredes-87a28724a/)
