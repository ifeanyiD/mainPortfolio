import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminOverview() {
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects")
      .then(res => setProjects(res.data));

    axios.get("http://localhost:5000/api/messages")
      .then(res => setMessages(res.data));
  }, []);

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>

      <div className="stats">
        <div>Projects: {projects.length}</div>
        <div>Messages: {messages.length}</div>
      </div>
    </div>
  );
}