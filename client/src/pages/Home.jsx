import { useEffect } from "react";
import { useSection } from "../context/SectionContext";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";
import Contact from "../components/sections/Contact";

export default function Home() {
  const { setActive, isManualScroll } = useSection();

  useEffect(() => {
    if(isManualScroll) return;
  
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);

          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () =>{
          sections.forEach((section)=> observer.unobserve(section))
      }
  }, []);

  return (
    <MainLayout>
      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        id="Home"
      > 
          <Hero /> 
      </motion.section>
      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        id="About"
      > 
          <About /> 
      </motion.section>
      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        id="Projects"
      > 
          <Projects /> 
      </motion.section>
      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        id="Contact"
      > 
          <Contact/>
      </motion.section>
    </MainLayout>
  );
}