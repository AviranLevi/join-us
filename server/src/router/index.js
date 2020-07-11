import express from 'express';
import joinUsRouter from './joinUsRouter';
import userRouter from './userRouter';
import projectRouter from './projectRouter';

const router = express.Router();

router.use('/', joinUsRouter);
router.use('/user', userRouter);
router.use('/project', projectRouter);

export default router;
