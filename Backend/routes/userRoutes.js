import express from 'express';
import { getUserProfile, updateUserProfile } from '../controllers/userController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Get user profile
router.get('/profile', auth, getUserProfile);

// Update user profile
router.put('/profile', auth, updateUserProfile);

export default router; 