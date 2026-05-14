import { useEffect, useState } from "react";

export default function ScrollDots() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setActive(i);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
  }, []);

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll(".section");
    sections[index].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-dots">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={active === i ? "active" : ""}
          onClick={() => scrollToSection(i)}
        ></span>
      ))}
    </div>
  );
}