import React, { useEffect, useRef, useState } from "react";
import "./AboutSection.css";

export default function AboutSection() {
  const yearsRef = useRef(null);

  // Button click state
  const [cvClicked, setCvClicked] = useState(false);

  // small counter animation for the numbers (Projects / Contests etc.)
  useEffect(() => {
    const el = yearsRef.current;
    if (!el) return;
    let start = 0;
    const end = 4; // example (4th year)
    const duration = 800;
    const stepTime = Math.max(Math.floor(duration / end), 20);
    const timer = setInterval(() => {
      start += 1;
      el.textContent = `${start}th year`;
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, []);

  const experienceItems = [
    { id: "hacknovate", label: "Hacknovate — Participant" },
    { id: "microsoft-web3", label: "Microsoft (Web3) — Participant" },
    { id: "hack-contests-2024", label: "Hack & Contests (2024) — Coding contests" },
  ];

  const internships = [
    { id: "grootz-uiux", label: "UI/UX Internship — Grootz" },
    { id: "codecraft-web", label: "Web Dev Virtual Internship — Codecraft" },
    { id: "assisto-dl", label: "Deep Learning with PyTorch — Assisto Ai" },
  ];

  const certifications = [
    { id: "java-softpro", label: "Java Programming (Softpro)" },
    { id: "accenture-innov", label: "Accenture Innovative Challenge" },
    { id: "prog-contest", label: "Programming contest awards" },
    { id: "deloitte-data", label: "Deloitte Data Analyst (job simulation)" },
    { id: "infosys-web", label: "Course Completion in Web Development (Infosys)" },
  ];

  const [activeSet, setActiveSet] = useState(new Set());

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("about-active");
      if (saved) {
        const arr = JSON.parse(saved);
        setActiveSet(new Set(arr));
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      const arr = Array.from(activeSet);
      window.localStorage.setItem("about-active", JSON.stringify(arr));
    } catch (e) {}
  }, [activeSet]);

  const toggleActive = (id) => {
    setActiveSet((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleKey = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleActive(id);
    }
  };

  const handleCvClick = () => {
    setCvClicked(true);
    setTimeout(() => setCvClicked(false), 300); // temporary click effect
  };

  return (
    <section id="about" className="about-section" aria-label="About me">
      <div className="about-inner">
        <div className="about-card" role="article">
          <div className="about-top">
            <h2 className="about-title">About Me</h2>
            <div className="about-badge" aria-hidden>
              Developer • Designer
            </div>
          </div>

          <p className="about-lead">
            Hi, I’m <strong>Shagun Garg</strong> from Shamli, Uttar Pradesh. I’m currently
            pursuing <strong>B.Tech (CSE)</strong> at <strong>ABESIT</strong>
            <span className="muted-space"> </span>
            <span ref={yearsRef} style={{ color: "#08a5d6" }}>4th year</span>. I completed my schooling from 
            <strong> Scottish International School, Shamli</strong> in 2022.
          </p>

          <div className="about-columns">
            <div className="about-block">
              <h3 style={{ color: "#08a5d6" }}>What I do</h3>
              <p>
                I focus on <strong>UI/UX design</strong> and <strong>Full Stack Web Development</strong>.
                I build accessible, responsive interfaces and implement them using modern front-end
                tools with attention to usability and performance.
              </p>
            </div>

            <div className="about-block">
              <h3 style={{ color: "#08a5d6" }}>Projects & Experience</h3>
              <p>
                I have worked on projects like <strong>Know Your Rights</strong> (legal-rights awareness),
                <strong> Smart Disposal</strong> (smart waste disposal via scanning), and a <strong>Paste App</strong>.
                I’ve also built a <strong>Blog Website</strong> and I am currently working on a
                <strong> Secure User Authentication</strong> system.
              </p>
            </div>
          </div>

          <br />

          {/* Experience items */}
          <div className="experience-list" aria-label="Experience / Events">
            {experienceItems.map((it) => {
              const isActive = activeSet.has(it.id);
              return (
                <div
                  key={it.id}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive ? "true" : "false"}
                  className={`exp-item ${isActive ? "active" : ""}`}
                  onClick={() => toggleActive(it.id)}
                  onKeyDown={(e) => handleKey(e, it.id)}
                >
                  <strong>{it.label}</strong>
                </div>
              );
            })}
          </div>

          <br />

          {/* Internships */}
          <div style={{ marginBottom: 8, marginTop: 8 }}>
            <strong style={{ color: "#08a5d6" }}>Internships</strong>
          </div>
          <div className="experience-list" aria-label="Internships">
            {internships.map((it) => {
              const isActive = activeSet.has(it.id);
              return (
                <div
                  key={it.id}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive ? "true" : "false"}
                  className={`exp-item ${isActive ? "active" : ""}`}
                  onClick={() => toggleActive(it.id)}
                  onKeyDown={(e) => handleKey(e, it.id)}
                >
                  {it.label}
                </div>
              );
            })}
          </div>

          {/* Certifications */}
          <div style={{ marginBottom: 8, marginTop: 8 }}>
            <strong style={{ color: "#08a5d6" }}>Certifications</strong>
          </div>
          <div className="experience-list" aria-label="Certifications">
            {certifications.map((c) => {
              const isActive = activeSet.has(c.id);
              return (
                <div
                  key={c.id}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive ? "true" : "false"}
                  className={`exp-item ${isActive ? "active" : ""}`}
                  onClick={() => toggleActive(c.id)}
                  onKeyDown={(e) => handleKey(e, c.id)}
                >
                  {c.label}
                </div>
              );
            })}
          </div>

          <div className="about-actions">
            <a href="#projects" className="btn about-cta">See Projects</a>
            <a
              href="/Shagun_Resume.pdf"
              className={`btn about-ghost ${cvClicked ? "clicked" : ""}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCvClick}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
