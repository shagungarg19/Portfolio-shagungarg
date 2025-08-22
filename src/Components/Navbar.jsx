// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const ddRef = useRef(null);

  // close dropdown when clicking outside
  useEffect(() => {
    function onDoc(e) {
      if (ddRef.current && !ddRef.current.contains(e.target)) setOpenDropdown(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const LINKS = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <header className="nav-top">
      <div className="nav-inner">
        <div className="brand">
          <a href="#home" className="brand-link">
            <div className="logo">SG</div>
            <span className="brand-text">Shagun Garg</span>
          </a>
        </div>

        {/* desktop links */}
        <nav className="links-desktop" aria-label="Primary">
          <ul>
            {LINKS.map((l) => (
              <li key={l.id}><a href={l.href}>{l.label}</a></li>
            ))}

            {/* <li ref={ddRef} className="dropdown">
              <button
                aria-haspopup="true"
                aria-expanded={openDropdown}
                onClick={() => setOpenDropdown((s) => !s)}
                className="dropdown-btn"
              >
                More ▾
              </button>

              {openDropdown && (
                <ul className="dropdown-panel" role="menu">
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#resume">Resume</a></li>
                  <li><a href="#case-studies">Case Studies</a></li>
                </ul>
              )}
            </li> */}

            <li>
              <a className="cta" href="#contact">Hire me</a>
            </li>
          </ul>
        </nav>

        {/* mobile hamburger */}
        <button
          className="hamburger"
          aria-label={openMobile ? "Close menu" : "Open menu"}
          onClick={() => setOpenMobile((s) => !s)}
        >
          <span className={`bar ${openMobile ? "open" : ""}`} />
          <span className={`bar ${openMobile ? "open" : ""}`} />
          <span className={`bar ${openMobile ? "open" : ""}`} />
        </button>
      </div>

      {/* mobile panel */}
      {openMobile && (
        <div className="mobile-panel">
          <ul>
            {LINKS.map((l) => (
              <li key={l.id}><a href={l.href} onClick={() => setOpenMobile(false)}>{l.label}</a></li>
            ))}
            {/* <li>
              <details>
                <summary>More</summary>
                <ul className="mobile-sub">
                  <li><a href="#blog" onClick={() => setOpenMobile(false)}>Blog</a></li>
                  <li><a href="#resume" onClick={() => setOpenMobile(false)}>Resume</a></li>
                </ul>
              </details>
            </li> */}
            <li><a className="cta mobile-cta" href="#contact" onClick={() => setOpenMobile(false)}>Hire me</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
