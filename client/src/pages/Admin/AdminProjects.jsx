import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = () => {
    axios.get("http://localhost:5000/api/projects")
      .then(res => setProjects(res.data));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const deleteProject = async (id) => {
    const confirmDelete = confirm("Delete this project?");
    if (!confirmDelete) return;

    const token = localStorage.getItem("token");

    await axios.delete(`http://localhost:5000/api/projects/${id}`, {
      headers: { Authorization: token }
    });

    fetchProjects();
  };

  return (
    <div>
      <h2>Manage Projects</h2>

      {projects.map(p => (
        <div key={p._id} className="admin-card">
          <h3>{p.title}</h3>

          <button onClick={() => deleteProject(p._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}