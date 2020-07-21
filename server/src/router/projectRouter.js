import express from 'express';
import * as routes from './routes/projectRoutes';

const router = express.Router();

router.post('/', routes.createProject);
router.get('/:id', routes.getProject);
router.get('/user/:id', routes.getUserProjects);
router.patch('/:id', routes.updateProject);
router.delete('/delete', routes.deleteProject);

export default router;
