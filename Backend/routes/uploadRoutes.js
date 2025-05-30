import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { uploadSingleFile, uploadMultipleFiles } from '../controllers/uploadController.js';
import upload from '../middleware/uploadMiddleware.js';
import { protect } from '../middleware/authMiddleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer storage with better filename handling
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniquePrefix = uuidv4();
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${uniquePrefix}-${Date.now()}${ext}`);
  }
});

// Enhanced file filter with more image types
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/svg+xml'
  ];
  
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only images are allowed (JPEG, PNG, GIF, WEBP, SVG)'), false);
  }
};

// Configure multer with better error handling
const uploadMulter = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
    files: 5 // For multiple uploads
  }
});

// Middleware to handle multer errors
const handleUploadErrors = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // A Multer error occurred when uploading
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(413).json({ 
        success: false,
        message: 'File too large. Maximum size is 10MB'
      });
    }
    if (err.code === 'LIMIT_FILE_COUNT') {
      return res.status(400).json({ 
        success: false,
        message: 'Too many files. Maximum 5 files allowed'
      });
    }
    return res.status(400).json({ 
      success: false,
      message: err.message 
    });
  } else if (err) {
    // An unknown error occurred
    return res.status(500).json({ 
      success: false,
      message: err.message || 'File upload failed'
    });
  }
  next();
};

// Single file upload route
router.post('/single', protect, uploadMulter.single('image'), uploadSingleFile);

// Multiple files upload route
router.post('/multiple', protect, uploadMulter.array('images', 5), uploadMultipleFiles);

// Delete file endpoint
router.delete('/:filename', (req, res) => {
  try {
    const filename = req.params.filename;
    const filePath = path.join(uploadDir, filename);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ 
        success: false,
        message: 'File not found' 
      });
    }

    fs.unlinkSync(filePath);
    res.status(200).json({ 
      success: true,
      message: 'File deleted successfully' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error deleting file',
      error: error.message 
    });
  }
});

export default router;