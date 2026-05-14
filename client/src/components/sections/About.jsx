import { motion } from "framer-motion";
import "../../styles/sections/about.scss";

const timeline = [
  {
    title: "Foundation",
    year: "2020",
    desc: "Started learning web development from scratch, focusing on JavaScript fundamentals and DOM manipulation.",
  },
  {
    title: "Full-Stack Development",
    year: "2023",
    desc: "Built full-stack applications using React, Node.js, and MongoDB. Focused on clean architecture and real-world systems.",
  },
  {
    title: "Machine Learning",
    year: "2025",
    desc: "Started building custom neural networks in JavaScript and exploring ML integration into web applications.",
  },
];

export default function About() {
  return (
    <div className="container about">

      {/* BIG STATEMENT */}
      <motion.div
        className="about-intro"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>
          I build from first principles — <br />
          from raw logic to intelligent systems.
        </h2>
      </motion.div>

      {/* TIMELINE */}
      <div className="timeline">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <div className="timeline-left">
              <span>{item.year}</span>
            </div>

            <div className="timeline-right">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* What I Do */}

      <div
        className="about-me"
      >
        <h2>What I Do</h2>
        <p>
          I build full-stack web applications using React, Node.js, and MongoDB, with experience in deploying scalable apps and integrating machine learning models to solve real-world problems.
        </p>
      </div>

      
      {/* SKILLS SNAPSHOT */} 
      <motion.div
        className="about-skills"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div>
            <label>Frontend</label>
            <ul>
              <li>React</li>
              <li>SCSS</li>
              <li>Responsive Web Design</li>
            </ul>
        </div>
        <div>
          <label>Backend</label>
            <ul>
              <li>Node.js (Express)</li>
              <li>REST API Development</li>
            </ul>
        </div>
        <div>
          <label>Database</label>
            <ul>
              <li>MongoDB</li>
            </ul>
        </div>
        <div>
            <label>Machine Learning</label>
            <ul>
              <li>ML Models (Regression, Classification)</li>
              <li>Data Preprocessing</li>
              <li>Model Evaluation</li>
            </ul>
        </div>
        <div>
          <label>Tools and Deployment</label>
          <ul>
            <li>Render</li>
            <li>Cloudinary</li>
            <li>Git</li>
          </ul>
        </div>
      </motion.div>

    </div>
  );
}