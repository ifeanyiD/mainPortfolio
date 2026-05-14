import { useEffect } from "react";
import "../../styles/ui/customCursor.scss";

export default function CustomCursor() {
    useEffect(() => {
        const links = document.querySelectorAll("a, button");

        links.forEach((el) => {
            el.addEventListener("mouseenter", () => {
            document.querySelector(".cursor").style.transform =
                "translate(-50%, -50%) scale(2)";
            });

            el.addEventListener("mouseleave", () => {
            document.querySelector(".cursor").style.transform =
                "translate(-50%, -50%) scale(1)";
            });
        });
    }, []);
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const move = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div className="cursor"></div>;
}