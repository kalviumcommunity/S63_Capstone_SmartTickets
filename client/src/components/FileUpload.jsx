import React, { useState } from "react";
import axios from "axios";
import { FaCloudUploadAlt, FaFile, FaCheck } from "react-icons/fa";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setError("");
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file");
      return;
    }

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:5050/api/upload/single", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
      setUploadedFile(res.data.file);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Upload failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">File Upload</h3>
      
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Choose a file
        </label>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <FaCloudUploadAlt className="w-10 h-10 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">PNG, JPG, GIF, PDF, DOC (max. 5MB)</p>
            </div>
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept="image/*,.pdf,.doc,.docx"
            />
          </label>
        </div>
      </div>

      {preview && (
        <div className="mb-6">
          <p className="mb-2 text-sm font-medium text-gray-700">Preview:</p>
          {file.type.startsWith('image/') ? (
            <img src={preview} alt="Preview" className="max-w-full h-auto rounded-lg" />
          ) : (
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <FaFile className="w-8 h-8 text-gray-400 mr-3" />
              <span className="text-sm text-gray-600">{file.name}</span>
            </div>
          )}
        </div>
      )}

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={loading || !file}
        className={`w-full py-2 px-4 rounded-lg text-white font-medium ${
          loading || !file
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Uploading..." : "Upload File"}
      </button>

      {uploadedFile && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <div className="flex items-center">
            <FaCheck className="w-5 h-5 text-green-500 mr-2" />
            <span className="text-green-700">File uploaded successfully!</span>
          </div>
          <div className="mt-2">
            <p className="text-sm text-gray-600">File URL:</p>
            <a
              href={`http://localhost:5050${uploadedFile.path}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline break-all"
            >
              {uploadedFile.path}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
