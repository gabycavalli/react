# Tienda de Comics - React App

Este proyecto es una tienda de cómics desarrollada con **React**. Permite a los usuarios explorar una lista de productos (cómics) con detalles como título, precio e imagen. También incluye un carrito de compras representado por un ícono en el encabezado.

## Características

- **Header fijo**: Un encabezado con navegación y un ícono de carrito.
- **Lista de productos**: Los productos se muestran en un diseño horizontal y responsivo.
- **Componentización**: Uso de componentes reutilizables como `Header`, `ProductContainer`, `Product` y `CardWidget`.

---

## Estructura del Proyecto

```plaintext
src/
├── components/
│   ├── header.jsx           # Encabezado con navegación y carrito
│   ├── productContainer.jsx  # Contenedor de productos
│   ├── product.jsx          # Componente individual para cada producto
│   ├── cardWidget.jsx       # Ícono del carrito
├── styles/
│   ├── header.css           # Estilos para el encabezado
│   ├── productContainer.css # Estilos para el contenedor de productos
│   ├── product.css          # Estilos para los productos individuales
├── App.jsx                  # Componente principal de la aplicación
├── index.css                # Estilos globales
├── index.js                 # Punto de entrada de la aplicación
```

## Requisitos Previos

Node.js (v14 o superior)
npm (v6 o superior) o yarn

## Instalación

## Clona este repositorio:

https://github.com/gabycavalli/react.git

## Navega al directorio del proyecto:

cd react2025

## Instala las dependencias:

npm install

## Ejecución

Para iniciar el servidor de desarrollo, ejecuta:

npm start

Esto abrirá la aplicación en tu navegador en http://localhost:3000.
