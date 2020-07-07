import express from 'express';
import * as routes from './routes/authRoutes';

const router = express.Router();

router.get('/spotify', routes.getSpotifyToken);

export default router;
