import { Router } from 'express';

const router = Router();

router.get('/users', (req, res) => {
    res.send('User list');
});

export default router;