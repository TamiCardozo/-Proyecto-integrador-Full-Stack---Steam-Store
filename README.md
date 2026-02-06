# 🎮 Steam Store – Proyecto Integrador Full Stack

Proyecto integrador **Full Stack** desarrollado para **NUCBA**.

La aplicación simula una tienda de videojuegos tipo **Steam**, con un **frontend en React** y un **backend en Node.js**, conectados a una **base de datos MySQL**.

---

## 🚀 Tecnologías utilizadas

### Frontend
- React
- Vite
- CSS
- Fetch API
- Context API (carrito de compras)

### Backend
- Node.js
- Express
- MySQL
- JWT (jsonwebtoken)
- bcrypt
- dotenv

---

## ✨ Funcionalidades

- Listado de videojuegos desde base de datos MySQL
- Carruseles por categorías:
  - 🔥 Descuentos
  - 🚀 Lanzamientos
  - 🕹️ Todos los juegos
- Registro y login de usuarios
- Autenticación mediante JWT
- Endpoints protegidos
- Carrito de compras
- Creación de órdenes de compra

---

## 🗂️ Estructura del proyecto

integrador-back-end/
│
├── backend/
│ ├── controllers/
│ ├── routes/
│ ├── config/
│ ├── server.js
│ └── package.json
│
├── my-app/ (frontend)
│ ├── src/
│ ├── components/
│ ├── pages/
│ ├── context/
│ └── package.json
│
├── README.md
└── .gitignore
## ▶️ Cómo ejecutar el proyecto localmente (ya que fue por XAMPP)

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/TamiCardozo/-Proyecto-integrador-Full-Stack---Steam-Store.git
cd integrador-back-end
2️⃣ Configurar el backend

Ingresar a la carpeta backend:

cd backend


Instalar dependencias:

npm install


Crear un archivo .env con las siguientes variables:

PORT=4000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=steam-store
JWT_SECRET=tu_secreto


Levantar el servidor:

npm run dev


El backend quedará corriendo en:

http://localhost:4000

3️⃣ Configurar el frontend

Ingresar a la carpeta del frontend:

cd my-app


Instalar dependencias:

npm install


Levantar el proyecto:

npm run dev


El frontend se visualizará en:

http://localhost:5173

🌐 Endpoints principales

GET /api/products → Obtener productos

POST /api/auth/register → Registro de usuario

POST /api/auth/login → Login de usuario

POST /api/orders → Crear orden de compra (endpoint protegido)

☁️ Deploy

Frontend: Vercel

Backend: Node.js + Express

Base de datos: MySQL (local)

El objetivo del proyecto es demostrar la integración completa entre frontend, backend y base de datos.

🧑‍💻 Autor/a

Tamara Cardozo
Proyecto Integrador Full Stack – NUCBA