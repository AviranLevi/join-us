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
router.get('/:id', passport.authenticate('jwt', { session: false }), routes.getUser);
router.patch('/:id', passport.authenticate('jwt', { session: false }), routes.updateUser);
router.delete('/:id', passport.authenticate('jwt', { session: false }), routes.deleteUser);

export default router;
