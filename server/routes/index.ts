import { Router } from 'express';
import bookmarksRouter from './bookmarksRouter';
import usersRouter from './usersRouter';

const router = Router();

router.use("/bookmarks", bookmarksRouter);
router.use("/users", usersRouter);

export default router;