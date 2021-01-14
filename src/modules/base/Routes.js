import { Router } from 'express';
import create from './create';

const router = Router();

router.post('/', create); // POST localhost:5000/create

export default router;
