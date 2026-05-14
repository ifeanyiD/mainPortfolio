import { NavLink, useParams } from "react-router-dom";
import { projects } from "../utils/data/projects";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/projectDetail.scss";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <h1>Project not found</h1>;

  const currentIndex = projects.findIndex(
    (p) => p.id === Number(id)
  );

    const nextProject = projects[currentIndex + 1];
    const prevProject = projects[currentIndex - 1];

    const navigate  = useNavigate();

  return (
    <div className="project-detail">

      {/* HERO IMAGE */}
      <div className="project-hero">
        <img src={project.images[0]} alt="" />
      </div>

      {/* INFO */}
      <motion.div
        className="project-content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>{project.title}</h1>

        <div className="meta">
          <span>{project.role}</span>
          <span>{project.year}</span>
        </div>

        {/* PROBLEM */}
        <div className="section-block">
          <h3>Problem</h3>
          <p>{project.problem}</p>
        </div>

        {/* SOLUTION */}
        <div className="section-block">
          <h3>Solution</h3>
          <p>{project.solution}</p>
        </div>

        {/* TECH */}
        <div className="tech">
          {project.tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>

        {/* LINKS */}
        <div className="links">
          <a href={project.live}>Live Site</a>
          <a href={project.github} target="_blank">GitHub</a>
        </div>
      </motion.div>

      {/* GALLERY */}
      <div className="gallery">
        {project.images.map((img, i) => (
          <img key={i} src={img} alt="" />
        ))}
      </div>
    <div className="project-navigation">

        {prevProject && (
        <div
            className="nav-item prev"
            onClick={() => navigate(`/project/${prevProject.id}`)}
            >
            <span>← Previous</span>
            <h4>{prevProject.title}</h4>
        </div>
        )}

        {nextProject && (
        <div
            className="nav-item next"
            onClick={() => navigate(`/project/${nextProject.id}`)}
            >
            <span>Next →</span>
            <h4>{nextProject.title}</h4>
            <div>
              <img src={nextProject.images[0]} />
            </div>
        </div>
        )}

        </div>
    </div>
  );
}