import express from 'express';
import joinUs from './joinUsRouter';

const router = express.Router();

router.use('/api', joinUs);

export default router;
