import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/HomeSection";
import About from "./Components/AboutSection";
import Skills from "./Components/SkillsSection";
import Projects from "./Components/Projects";
import Contact from "./Components/ContactSection";
import Footer from "./Components/Footer";
import "./App.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
