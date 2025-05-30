import express from 'express';
import { register, login, getMe, googleAuth, googleCallback } from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';
import passport from '../config/passport.js';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Google OAuth routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), googleCallback);

// Protected routes
router.get('/me', protect, getMe);

export default router; 