import express from 'express';
import * as routes from './routes/userRoutes';
import passport from 'passport';

const router = express.Router();
const passportConfig = require('../config/passport');

router.post('/', routes.createUser);
router.post('/login', passport.authenticate('local', { session: false }), routes.userLogin);
router.get('/:id', routes.getUser);
router.patch('/:id', routes.updateUser);
router.delete('/:id', routes.deleteUser);

export default router;
