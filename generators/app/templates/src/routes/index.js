import { Router } from 'express';

import { version } from '../../package.json';
import userRoute from './user';

const router = Router();

router.use('/users', userRoute);

// perhaps expose some API metadata at the root
router.get('/', (req, res) => {
  res.json({ version });
});

export default router;
