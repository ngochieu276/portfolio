"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
const sections = ["hero", "projects", "about", "contact"];

export const Header = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const hash = window.location.hash; // Lấy hash từ URL
    setActiveSection(hash);
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      const viewportHeight = window.innerHeight;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const visibleHeight =
            Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
          const visibleRatio = visibleHeight / rect.height;

          if (visibleRatio >= 0.01) {
            currentSection = section;
          }
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
        window.history.replaceState(null, "", `#${currentSection}`);
      }
    };

    if (window.innerWidth > 780) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {sections.map((section) => (
          <a
            key={section}
            onClick={() => {
              const element = document.getElementById(section);
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
                setActiveSection(section);
              }
            }}
            className={`nav-item cursor-pointer ${
              activeSection === section
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : ""
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>
    </div>
  );
};
