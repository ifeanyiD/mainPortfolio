import { motion } from "framer-motion";
import "../../styles/sections/hero.scss";
import { useEffect } from "react";
import { useSection } from "../../context/SectionContext";

export default function Hero() {
  const {setIsManualScroll , setActive} = useSection();
    useEffect(() => {
      const section = document.querySelector(".hero");

      const handleScroll = () => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const offset = rect.top;
        const image = document.querySelector(".image-wrapper img");
        const text = document.querySelector(".hero-text");

        // Only apply when hero is visible
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const movement = offset * 0.2;

          if (image) {
            image.style.transform = `translateY(${movement}px) scale(1.05)`;
          }

          if (text) {
            text.style.transform = `translateY(${movement * 0.5}px)`;
          }
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  const scrollToSection = (id) => {
    setIsManualScroll(true);
    document.getElementById(id).scrollIntoView({
        behavior : "smooth"
    })
    setActive(id);
    setTimeout(()=> {setIsManualScroll(false)}, 800 );
  };

  return (
    <section className="hero">
      {/* RIGHT SIDE (IMAGE + TEXT) */}
      <div className="hero-right">
        <div className="image-wrapper">
          <img 
               src="/assets/nero-420.jpg" 
               srcSet="
                /assets/nero-420.jpg 400w,
                /assets/nero-786.jpg 800w,
                /assets/nero-1200.jpg 1200w
               "
               sizes="
                (max-width: 600px) 400px,
                (max-width: 1024px) 800px, 1200px
               "
               alt="hero"  
               loading="lazy"/>
        </div>
        <div className="overlay"></div>

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.h1 transition={{delay : 0.2}}>
            Exceptional designs <br />
            with high-quality<br />
            <span> code.</span>
          </motion.h1>

          <button onClick={()=>scrollToSection("Projects")}>View Work</button>
        </motion.div>
      </div>

      {/* RIGHT FLOAT ICON */}
      <button 
        className="floating-contact"
        onClick={()=> scrollToSection("Contact")}
      >
        ✉
      </button>

      {/* SCROLL INDICATOR */}
      <div className="scroll-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </section>
  );
}