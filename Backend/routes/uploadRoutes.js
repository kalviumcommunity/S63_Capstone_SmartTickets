import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// File filter to accept only images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Not an image! Please upload only images.'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Upload single file
router.post('/single', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    res.status(200).json({
      message: 'File uploaded successfully',
      file: {
        filename: req.file.filename,
        path: req.file.path
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Upload multiple files
router.post('/multiple', upload.array('images', 5), (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'No files uploaded' });
    }
    res.status(200).json({
      message: 'Files uploaded successfully',
      files: req.files.map(file => ({
        filename: file.filename,
        path: file.path
      }))
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router; 