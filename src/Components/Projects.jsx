import React, { useRef } from "react";
import "./Projects.css";

// Import your images
import ui1 from "../assets/UI_1.png";
import ui2 from "../assets/UI_2.png";
import ui3 from "../assets/UI_3.png";
import ui4 from "../assets/UI_4.png";
import tech1 from "../assets/Tech_1.png";
import tech2 from "../assets/Tech_2.png";

function ProjectCard({ project, variant }) {
  if (variant === "grid") {
    return (
      <div className="project-grid">
        <div className="project-media">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-overlay">
            <div className="overlay-content">
              <h3 className="overlay-title">{project.title}</h3>
              <a
                href={project.link}
                className="overlay-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.buttonText} <span className="cta-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    // For wide cards: hover overlay similar to grid
    return (
      <div className="project-wide">
        <div className="project-media">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-overlay">
            <div className="overlay-content">
              <h3 className="overlay-title">{project.title}</h3>
              <a
                href={project.link}
                className="overlay-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.buttonText} <span className="cta-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default function Projects() {
  const techRef = useRef(null);

  const uiuxProjects = [
    {
      title: "Zayka UI",
      image: ui1,
      link: "https://www.behance.net/gallery/231492507/Zayka-UI-Food-Delivery-Redefined",
      buttonText: "Let's Order",
    },
    {
      title: "Fashion E-commerce UI",
      image: ui2,
      link: "https://www.behance.net/gallery/231489303/Fashion-E-commerce-Website-UI",
      buttonText: "Shop Together",
    },
    {
      title: "Caffeine Connect",
      image: ui3,
      link: "https://www.behance.net/gallery/231492817/Caffeine-Connect-App-for-Coffee-Lovers",
      buttonText: "Wanna have coffee!",
    },
    {
      title: "Portfolio UI",
      image: ui4,
      link: "https://www.behance.net/gallery/231493243/Portfolio",
      buttonText: "Explore",
    },
  ];

  const technicalProjects = [
    {
      title: "Weather API-App",
      image: tech1,
      link: "https://github.com/shagungarg19/Weather_API-App",
      buttonText: "View Repo",
    },
    {
      title: "Crop Recommendation System",
      image: tech2,
      link: "https://github.com/shagungarg19/Crop_Recomendation_System",
      buttonText: "Live Demo",
    },
  ];

  const scroll = (ref, distance = 420) => {
    if (!ref?.current) return;
    ref.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">
        {/* UI/UX Projects */}
        <header className="projects-head">
          <h2 className="projects-title">UI / UX Designs</h2>
          <p className="projects-sub">
            Recent UI explorations — clean, usable and pixel-polished.
          </p>
        </header>
        <div className="uiux-grid" role="list" aria-label="UI UX Projects">
          {uiuxProjects.map((p, i) => (
            <ProjectCard key={i} project={p} variant="grid" />
          ))}
        </div>

        {/* Technical Projects */}
        <header className="projects-head projects-head-tech">
          <h2 className="projects-title">Technical Projects</h2>
          <p className="projects-sub">
            Selected engineering work — focused on performance & architecture.
          </p>
        </header>

        <div className="tech-holder">
          <div className="tech-row" ref={techRef} role="list" aria-label="Technical projects">
            {technicalProjects.map((p, i) => (
              <ProjectCard key={i} project={p} variant="wide" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
