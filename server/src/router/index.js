import express from 'express';
import userRouter from './userRouter';
import projectRouter from './projectRouter';

const router = express.Router();

router.use('/user', userRouter);
router.use('/project', projectRouter);

export default router;
