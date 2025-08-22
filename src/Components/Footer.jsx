import React, { useState } from "react";
import "./Footer.css";

/* Inline simple SVG icons for crisp look */
const Icon = {
  GitHub: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.39.97.11-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.52.11-3.17 0 0 .98-.31 3.2 1.19a11.08 11.08 0 0 1 2.92-.39c.99 0 1.98.13 2.92.39 2.22-1.5 3.2-1.19 3.2-1.19.63 1.65.23 2.87.11 3.17.75.81 1.2 1.84 1.2 3.1 0 4.45-2.7 5.43-5.27 5.71.42.36.8 1.07.8 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  ),
  LinkedIn: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.78v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.65V24H18.5v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.16V24H7.5V8z"/>
    </svg>
  ),
  Behance: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zM7.5 10.5H4.5v-1.5h3v1.5zM10.5 13.5c0 .828-.672 1.5-1.5 1.5H6v-6h3.021c1.531 0 1.98 1.149 1.98 2.25 0 .961-.498 1.5-1.2 1.5.86 0 1.5.672 1.5 1.5zM18 12c0 2.485-2.015 4.5-4.5 4.5S9 14.485 9 12 11.015 7.5 13.5 7.5 18 9.515 18 12z"/>
    </svg>
  )
};

export default function Footer() {
  const [email, setEmail] = useState("");

  const isValidEmail = (value) => {
    // simple email check
    return /\S+@\S+\.\S+/.test(value);
  };

  const handleContact = (e) => {
    e.preventDefault();
    // If user provided a valid email, open mail client with that email in body
    const recipient = "shagun.at.work02@gmail.com";
    const subject = encodeURIComponent("Contact from portfolio");
    const body = encodeURIComponent(
      `Hi Shagun,\n\nI would like to connect regarding your portfolio. My email: ${email || "not provided"}\n\nMessage:\n`
    );

    // Use mailto to open user's email client; fallback: simple alert
    try {
      // If email provided but invalid, alert user
      if (email && !isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Construct mailto
      const mailto = `mailto:${recipient}?subject=${subject}&body=${body}`;
      // open mail client
      window.location.href = mailto;
    } catch (err) {
      console.error("Failed to open mail client:", err);
      alert("Could not open mail client. Please email: shagun.at.work02@gmail.com");
    }
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            <div className="brand-badge" aria-hidden>SG</div>
            <div>
              <h3 className="brand-title">Shagun Garg</h3>
              <p className="brand-sub">Web Developer & UI/UX Designer — building accessible, fast & beautiful web experiences.</p>
            </div>
          </div>

          <div style={{ marginTop: "1.25rem" }} className="socials" aria-label="Social links">
            <a href="https://github.com/shagungarg19" target="_blank" rel="noreferrer" aria-label="GitHub">{Icon.GitHub} GitHub</a>
            <a href="https://www.linkedin.com/in/shagun-garg-432791282/" target="_blank" rel="noreferrer" aria-label="LinkedIn">{Icon.LinkedIn} LinkedIn</a>
            <a href="https://www.behance.net/shagungarg501" target="_blank" rel="noreferrer" aria-label="Behance">{Icon.Behance} Behance</a>
          </div>
        </div>

        <div className="footer-columns" aria-hidden={false}>
          <div className="col links-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="col about-col">
            <h4>About</h4>
            <p>
              I build clean, accessible and delightful web experiences — focused on performance and polished UI. Available for freelance & part-time collaborations.
            </p>
          </div>

          <div className="col contact-col">
            <h4>Contact</h4>
            <p className="contact-item">📧 <a href="mailto:shagun.at.work02@gmail.com">shagun.at.work02@gmail.com</a></p>
            <p className="contact-item">📍 India</p>

            <div style={{ marginTop: "0.6rem" }}>
              <div className="newsletter" role="form" aria-label="Subscribe form">
                <input
                  type="email"
                  placeholder="Your email (optional)"
                  aria-label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="button"
                  className="cta-btn"
                  onClick={handleContact}
                  aria-label="Contact via email"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom" aria-hidden={false}>
        <div className="bottom-inner">
          <p>© {new Date().getFullYear()} Shagun Garg. All rights reserved.</p>
          <p className="made-with">Made with ❤️ · React · Thoughtful design</p>
        </div>
      </div>
    </footer>
  );
}
