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
            Hi, I’m <strong>Shagun Garg</strong> from Shamli, Uttar Pradesh. I recently 
            completed my <strong>B.Tech (CSE)</strong> in Computer Science Engineering <strong> from ABES Institute of Technology,</strong>
            <span className="muted-space"> </span>
            <strong> where I secured 82.3% with distinction. </strong> 
          </p>

          <div className="about-columns">
            <div className="about-block">
              <h3 style={{ color: "#08a5d6" }}>What I do</h3>
              <p>
                I am a<strong>Web Developer</strong> and <strong>and UI/UX Designer </strong>.
                with hands-on experience in building responsive websites and designing user-friendly interfaces.
                My technical skills include HTML, CSS, JavaScript, React, Next.js, Python, Node.js, MongoDB, and Figma.
                I'm excited to contribute my skills while growing professionally. 
              </p>
            </div>

            <div className="about-block">
              <h3 style={{ color: "#08a5d6" }}>Experience</h3>
              <p>
                During my job,I worked as a<strong> UI/UX Designer at Nexen Bloom</strong>, where I designed websites and mobile app interfaces,
                created user flows, and collaborated closely with developers.
                During my internships, I worked as a  <strong> Web Developer Intern at Pixel Circuit Studio</strong>,
                where I contributed to responsive web development and worked on Articulate 360 for e-learning projects.
               Additionally, I completed internships at <strong> Assisto AI as a Python Intern</strong> and <strong> Grootz 
                as a UI/UX Intern</strong>, which helped strengthen my technical, design, and teamwork skills.
                </p>
            </div>
          </div>

          <br />

          <div className="about-actions">
            <a href="#projects" className="btn about-cta">See Projects</a>
            <a
              href="/resume-shagun.pdf"
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
