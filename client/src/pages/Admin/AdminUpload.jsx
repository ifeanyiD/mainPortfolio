import { useState } from "react";
import axios from "axios";

export default function AdminUpload() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("image", file);

    const token = localStorage.getItem("token");

    await axios.post("http://localhost:5000/api/projects", formData, {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    });

    alert("Project uploaded");
  };

  return (
    <div className="admin-upload">
      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Category" onChange={(e) => setCategory(e.target.value)} />

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}