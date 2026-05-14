import { useState } from "react";
import { useSection } from "../../context/SectionContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaYoutube, FaLinkedinIn, FaTiktok  } from "react-icons/fa";

import "../../styles/aside.scss";
import { NavLink } from "react-router-dom";

const  sections = ["Home", "About", "Projects", "Contact"];

export default function Aside() {
  const { active, setActive, setIsManualScroll } = useSection();

  const [open, setOpen] = useState(false);

  // DOT NAVIGATION
  const scrollToSection = (id) => {
    setIsManualScroll(true);

    console.log(id)
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    })
    setActive(id);
    setTimeout(()=>{ setIsManualScroll(false)}, 800);
  };

  return (
    <>
      {/* ASIDE */}
      <aside>
        <div className="aside-inner">

          {/* MENU BUTTON */}
          <div
            className="menu"
            onClick={() => setOpen(true)}
          >
            ☰
          </div>

          {/* DOTS */}
          <div className="middle">
            <span>MENU</span>

            <div className="dots">
              {sections.map((label, i) => (
                <div
                  key={i}
                  className="dot-wrapper"
                  onClick={() => scrollToSection(label)}
                >
                  <span
                    className={active === label ? "active" : ""}
                  ></span>
                  <div className="tooltip">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SOCIALS */}
          <div className="socials">
            <NavLink to={"#"}><FaYoutube color="red"/></NavLink>
            <NavLink to={"https://linkedin.com/in/ifeanyi-david-273b9a21a"}><FaLinkedinIn color=" #0A66C2"/></NavLink>
            <NavLink to={"#"}><FaTiktok color="#612a8f"/></NavLink>
          </div>

        </div>
      </aside>

      {/* FULLSCREEN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >

            {/* CLOSE BUTTON */}
            <div
              className="close-btn"
              onClick={() => setOpen(false)}
            >
              ✕
            </div>

            {/* MENU LINKS */}
            <motion.div
              className="menu-links"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              transition={{ duration: 0.5 }}
            >
              {sections.map((item, i) => (
                <div
                  key={i}
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </div>
              ))}
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}