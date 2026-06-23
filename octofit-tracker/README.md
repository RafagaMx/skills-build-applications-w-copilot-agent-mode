# 🐙 OctoFit Tracker

Una aplicación moderna multi-tier para rastrear tu fitness, impulsada por GitHub Copilot Agent Mode.

## 🏗️ Arquitectura

```
octofit-tracker/
├── frontend/          # React 19 + Vite (Puerto 5173)
├── backend/           # Node.js + Express + TypeScript (Puerto 8000)
└── README.md
```

## 📋 Requisitos

- Node.js 18+
- MongoDB corriendo en puerto 27017

## 🚀 Instalación y Setup

### Frontend

```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

Frontend disponible en: `http://localhost:5173`

### Backend

```bash
cd octofit-tracker/backend
npm install
cp .env.example .env
npm run dev
```

Backend disponible en: `http://localhost:8000`

### MongoDB

Asegúrate de que MongoDB está corriendo en `mongodb://localhost:27017`

```bash
# Si usas Docker
docker run -d -p 27017:27017 --name octofit-mongo mongo:latest
```

## 🛠️ Tecnologías

### Frontend
- **React 19** - UI Framework
- **Vite** - Build tool y dev server
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **TypeScript** - Type safety
- **Mongoose** - MongoDB ODM

## 📡 Puertos

- **Frontend**: 5173 (Vite Dev Server)
- **Backend API**: 8000 (Express Server)
- **MongoDB**: 27017 (Database)

## 🎯 Endpoints de API

- `GET /api/health` - Health check del servidor
- `GET /api/workouts` - Obtener entrenamientos (Próximamente)

## 📝 Variables de Entorno

Crear archivo `.env` en el directorio backend basado en `.env.example`:

```env
MONGODB_URI=mongodb://localhost:27017/octofit
PORT=8000
NODE_ENV=development
```

## 🤖 Construido con GitHub Copilot

Este proyecto fue desarrollado utilizando GitHub Copilot Agent Mode para demostrar las capacidades de AI-assisted development.

---

¡Felicidades! 🎉 OctoFit Tracker está listo para ser desarrollado.
