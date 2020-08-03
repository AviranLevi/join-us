import express from 'express';
import * as routes from './routes/userRoutes';
import passport from 'passport';
import multer from 'multer';

const router = express.Router();
const passportConfig = require('../config/passport');

router.post('/', routes.createUser);
router.post('/login', passport.authenticate('local', { session: false }), routes.userLogin);
router.post('/image', passport.authenticate('jwt', { session: false }), routes.uploadImage);
router.get('/logout', passport.authenticate('jwt', { session: false }), routes.userLogout);
router.get('/auth', passport.authenticate('jwt', { session: false }), routes.userAuth);
router.get('/:id', routes.getUser);
router.patch('/:id', routes.updateUser);
router.delete('/:id', routes.deleteUser);

export default router;
