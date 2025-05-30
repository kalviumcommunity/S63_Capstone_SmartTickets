import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Upload single file
export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const filePath = `/uploads/${req.file.filename}`;
    res.json({
      success: true,
      filePath,
      fileName: req.file.filename,
      originalName: req.file.originalname
    });
  } catch (error) {
    res.status(500).json({ message: 'File upload failed', error: error.message });
  }
};

// Upload multiple files
export const uploadMultipleFiles = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'No files uploaded' });
    }

    const files = req.files.map(file => ({
      filePath: `/uploads/${file.filename}`,
      fileName: file.filename,
      originalName: file.originalname
    }));

    res.json({
      success: true,
      files
    });
  } catch (error) {
    res.status(500).json({ message: 'Files upload failed', error: error.message });
  }
};