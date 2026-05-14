import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../styles/sections/project.scss";

const projects = [
  {
    title: "Event Platform",
    desc: "A full-stack event system with admin dashboard and media management.",
    tech: ["React", "Node", "MongoDB", "Cloudinary", "Render"],
    image: "/assets/project1.jpg",
    live: "#",
    github: "#",
  },
  {
    title: "Neural Network JS",
    desc: "Built a neural network from scratch using pure JavaScript.",
    tech: ["JavaScript","Canvas", "ML"],
    image: "/assets/neuron.jpg",
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="container projects">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Selected Work
      </motion.h2>

      <div className="project-list">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            onClick={()=> navigate(`/project/${i}`)}
          >
            <div className="image-wrapper">
              <img src={project.image} alt="" />
              <div className="overlay"></div>
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="tech">
                {project.tech.map((t, i) => (
                  <label key={i}>{t}</label>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}