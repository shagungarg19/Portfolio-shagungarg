import React from "react";

/**
 * variant: "grid" (square/grid UI cards) | "wide" (wide technical card)
 * project.buttonText (string) is used as CTA text per project
 */
export default function ProjectCard({ project, variant = "grid" }) {
  const ctaText = project.buttonText || (variant === "wide" ? "View" : "View Project");

  const Arrow = ({ className = "" }) => (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <article
      className={`project-card ${variant === "wide" ? "project-wide" : "project-grid"}`}
      aria-label={project.title}
      role="listitem"
    >
      <div className="project-media">
        <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
        <div className="project-overlay" aria-hidden="true">
          <div className="overlay-content">
            <h3 className="overlay-title">{project.title}</h3>
            <a
              className="overlay-cta"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="cta-text">{ctaText}</span>
              <Arrow className="cta-arrow" />
            </a>
          </div>
        </div>
      </div>

      {variant === "wide" && (
        <div className="project-meta">
          <h3 className="project-title">{project.title}</h3>
          <a className="view-btn" href={project.link} target="_blank" rel="noopener noreferrer">
            <span>{ctaText}</span>
            <Arrow className="btn-arrow" />
          </a>
        </div>
      )}
    </article>
  );
}
