import { Router } from 'express';

import getUsers from '../controllers/get-users';

const router = Router();

router.get('/', getUsers);

export default router;
