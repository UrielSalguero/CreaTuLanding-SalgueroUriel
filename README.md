# Ecommerce de cafeteria 

## Descripcion 
Una aplicación web de comercio electrónico especializada en la venta de productos de cafetería. Permite a los usuarios explorar un catálogo de productos, agregar artículos al carrito y completar compras de manera sencilla e intuitiva.

## Caracteristicas principales
1. Catálogo de productos dinámico: Se obtienen los productos desde una base de datos en Firebase y se muestran en tiempo real.

2. Sistema de carrito de compras: Los usuarios pueden agregar, eliminar y modificar cantidades de productos en su carrito.

3. Autenticación de usuarios: Registro e inicio de sesión mediante Firebase Authentication.

4. Filtrado y categorización: Permite a los usuarios filtrar productos por categorías y rango de precios.

5. Checkout y generación de órdenes: Integración con Firestore para almacenar las órdenes de compra.

## Tecnologias utilizadas 
- Frontend: React + Vite 
Frontend: React + Vite

- Autenticación: Firebase Authentication

- Estilización: CSS y Material UI

- Routing: React Router DOM

## Instalacion 
1. Clona el repositorio: git clone https://github.com/tuusuario/tu-repositorio.git

2. Entra en la carpeta del proyecto: cd tu-repositorio

3. Instala las dependencias: npm install

4. Inicia el servidor de desarrollo: npm run dev


## Configura la base de datos:

1. Crea un proyecto en Firebase.

2. Habilita Firestore Database y Firebase Authentication.

3. Agrega las credenciales de Firebase en un archivo .env en la raíz del proyecto:
VITE_API_KEY=tu_api_key
VITE_AUTH_DOMAIN=tu_auth_domain
VITE_PROJECT_ID=tu_project_id
VITE_STORAGE_BUCKET=tu_storage_bucket
VITE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_APP_ID=tu_app_id

4. Reinicia el servidor de desarrollo con: npm run dev

## Esctructura del proyecto:
📦 ecommerce-cafeteria
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 Auth.jsx
 ┃ ┃ ┣ 📜 CartWidget.jsx
 ┃ ┃ ┣ 📜 Contacto.jsx
 ┃ ┃ ┣ 📜 Filters.jsx
 ┃ ┃ ┣ 📜 ItemCount.jsx
 ┃ ┃ ┣ 📜 ItemListContainer.jsx
 ┃ ┃ ┣ 📜 ItemList.jsx
 ┃ ┃ ┣ 📜 ItemDetailContainer.jsx
 ┃ ┃ ┣ 📜 Navegacion.jsx
 ┃ ┣ 📂 config
 ┃ ┃ ┣ 📜 firebaseConfig.js
 ┃ ┣ 📂 context
 ┃ ┃ ┣ 📜 CartContext.jsx
 ┃ ┣ 📜 App.jsx
 ┃ ┣ 📜 main.jsx
 ┣ 📜 package.json
 ┣ 📜 vite.config.js
 ┣ 📜 .env
 ┗ 📜 README.md

 Deploy: Puedes ver el proyecto en producción en: [\[AQUI JEJE\]](https://navega-las-rutas-salguero-uriel-bmkd9u7wl.vercel.app/)
