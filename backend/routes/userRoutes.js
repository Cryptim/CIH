import express from 'express';
import { getUsers, createUser } from '../controllers/UserController.js';

const router = express.Router();

// Define routes
router.get('/', getUsers);
router.post('/', createUser);

export default router;
