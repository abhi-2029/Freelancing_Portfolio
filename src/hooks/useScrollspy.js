import { useState, useEffect } from "react";

/**
 * Tracks which section is currently visible in the viewport.
 * Used by Navbar to highlight the active navigation link.
 */
export function useScrollspy(sectionIds, offset = 100) {
  const [activeId, setActiveId] = useState(sectionIds[0] || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollY) {
          setActiveId(sectionIds[i]);
          return;
        }
      }
      setActiveId(sectionIds[0] || "");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
