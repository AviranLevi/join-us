import express from 'express';
import * as routes from './routes/userRoutes';

const router = express.Router();

router.post('/', routes.createUser);
router.get('/:id', routes.getUser);
router.patch('/:id', routes.updateUser);
router.delete('/delete', routes.deleteUser);

export default router;
