import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ Conectado a MongoDB en', MONGODB_URI);
  })
  .catch((err) => {
    console.error('❌ Error al conectar a MongoDB:', err);
  });

// Health Check Route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'OctoFit Tracker API está funcionando',
    timestamp: new Date().toISOString()
  });
});

// Basic API Route
app.get('/api/workouts', (req, res) => {
  res.json({
    workouts: [],
    message: 'Endpoint de entrenamientos - Próximamente'
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor OctoFit Tracker corriendo en puerto ${PORT}`);
  console.log(`📱 Frontend en: http://localhost:5173`);
  console.log(`🔌 Backend en: http://localhost:${PORT}`);
  console.log(`🗄️  MongoDB en: ${MONGODB_URI}`);
});
