import React, { useState } from "react";
import axios from "axios";

export default function ImageUpload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("profileImage", file);

    try {
      const res = await axios.post("http://localhost:5000/api/upload", formData);
      setUploadedUrl(res.data.imageUrl);
      alert("Upload successful!");
    } catch (err) {
      console.error(err);
      alert("Upload failed.");
    }
  };

  return (
    <div>
      <h3>Upload Profile Image</h3>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      {preview && <img src={preview} alt="Preview" width="100" />}
      <br />
      <button onClick={handleUpload}>Upload</button>
      {uploadedUrl && (
        <div>
          <p>Image URL:</p>
          <a href={uploadedUrl} target="_blank" rel="noreferrer">{uploadedUrl}</a>
        </div>
      )}
    </div>
  );
}
