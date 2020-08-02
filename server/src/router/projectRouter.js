import express from 'express';
import * as routes from './routes/projectRoutes';
import passport from 'passport';
const router = express.Router();
const passportConfig = require('../config/passport');

router.post('/', passport.authenticate('jwt', { session: false }), routes.createProject);
router.get('/:id', routes.getProject);
router.get('/user/:id', passport.authenticate('jwt', { session: false }), routes.getUserProjects);
router.patch('/:id', routes.updateProject);
router.delete('/:id', passport.authenticate('jwt', { session: false }), routes.deleteProject);

export default router;
