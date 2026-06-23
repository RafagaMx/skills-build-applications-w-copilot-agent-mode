import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database';

// Import routes
import usersRoutes from './routes/users';
import teamsRoutes from './routes/teams';
import activitiesRoutes from './routes/activities';
import workoutsRoutes from './routes/workouts';
import leaderboardRoutes from './routes/leaderboard';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDatabase();

// Health Check Route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'OctoFit Tracker API está funcionando',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/users', usersRoutes);
app.use('/api/teams', teamsRoutes);
app.use('/api/activities', activitiesRoutes);
app.use('/api/workouts', workoutsRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor OctoFit Tracker corriendo en puerto ${PORT}`);
  console.log(`📱 Frontend en: http://localhost:5173`);
  console.log(`🔌 Backend en: http://localhost:${PORT}`);
  console.log(`🗄️  MongoDB en: ${process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db'}`);
});
