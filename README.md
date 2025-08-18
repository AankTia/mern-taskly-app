# MERN Learning Project 🚀

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.x-darkgreen?logo=mongodb)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express.js-4.x-lightgrey?logo=express)](https://expressjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)


![MERN Learning Banner](assets/mern-banner.png)

I’m learning how to build a full-stack web application using the **MERN stack (MongoDB, Express.js, React, Node.js)** by following the _MERN Stack Web Development For Beginners_ book.

A full-stack web application built with the **MERN stack** (MongoDB, Express.js, React, Node.js).
This project demonstrates **authentication, CRUD operations, and API integration** with a modern frontend UI.

---

## 📌 Features

- 📖 Hands-on practice with **backend APIs** using Node.js & Express
- 🔐 **User Authentication** (JWT-based login & registration)
- 📝 **CRUD Operations** (Create, Read, Update, Delete)
- 📊 **RESTful API** with Express & MongoDB
- 🎨 **Responsive UI** built with React
- ⚡ **State Management** using Context API
- 🗄 **MongoDB database integration**

---

## 🛠 Tech Stack

**Frontend:**

- React.js (Vite)
- React Router
- Fetch API
- Chakra UI

**Backend:**

- Node.js
- Express.js
- MongoDB
- JWT for Authentication
- bcrypt for Password Hashing

---

## 📂 Project Structure

```
project-root/
│── client/         # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
│── server/         # Node.js backend
│   ├── models/     # Mongoose schemas
│   ├── routes/     # API routes
│   ├── controllers/
│   ├── config/
│   ├── server.js
│   └── package.json
│
│── README.md
│── .env.example
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/AankTia/mern-taskly-app.git
cd mern-project
```

### 2. Setup Backend (Server)

```bash
cd server
npm install
cp .env.example .env   # Update your MongoDB URI & JWT_SECRET
npm run dev
```

### 3. Setup Frontend (Client)

```bash
cd client
npm install
npm run dev
```

### 4. Run MongoDB in Docker

```bash
docker compose up
```

### 5. Populate Seed Data

```bash
cd server
node seed.js
```

### 6. Access App

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:8000/api`

---

## 🔑 Environment Variables

Create a `.env` file inside the `server/` folder:

```env
MONGODB_URI=mongodb://admin:password123@localhost:27018?authSource=admin
MONGODB_DATABASE=mern-taskly-app
VITE_API_BASE_URL=http://localhost:8000/api/v1
AUTH_SECRET=IJg48A77uTuRBUu69ETklRvK/ywsFsnGg9NHQ96yd+Y=
CLIENT_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=your_claoudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```
