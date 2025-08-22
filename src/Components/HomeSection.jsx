import React, { useEffect, useRef } from "react";
import "./HomeSection.css";
import Typed from "typed.js";
import Me from "../assets/Me.jpg"; 

export default function HomeSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    if (!typedRef.current) return;
    const typed = new Typed(typedRef.current, {
      strings: ["A Web Developer & ", "A UI/UX Designer"],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="text-content">
          <h1 className="intro-title">
            Hi, I&apos;m <span>Shagun Garg</span>
          </h1>

          <p className="intro-subtitle" ref={typedRef} />

          <p className="intro-desc">
            I design and build clean, modern, and user-friendly digital
            experiences with a focus on accessibility and aesthetic polish.
          </p>

          <a href="#projects" className="cta-button">View My Work</a>
        </div>

        <div className="image-content" aria-hidden>
          <img src={Me} alt="Shagun Garg" className="profile-img" />
          <div className="profile-glow" aria-hidden />
        </div>
      </div>
    </section>
  );
}
