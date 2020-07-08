import express from 'express';
import * as routes from './routes/joinUsRoutes';

const router = express.Router();

router.get('/spotify', routes.getSpotifyTrack);

export default router;
