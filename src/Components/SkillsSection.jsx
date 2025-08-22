import React from "react";
import "./Skills.css";

const skills = [
  { name: "React", percent: 90 },
  { name: "JavaScript", percent: 85 },
  { name: "HTML & CSS", percent: 95 },
  { name: "Figma", percent: 90 },
  { name: "Tailwind", percent: 86 },
  { name: "Adobe XD", percent: 85 },
  { name: "Java", percent: 75 },
  { name: "Python", percent: 70 },
  { name: "UI/UX", percent: 88 },
  { name: "Git & GitHub", percent: 82 },
  { name: "TypeScript", percent: 78 },
  { name: "Redux", percent: 80 },
];

export default function SkillsSection() {
  // split skills roughly in half for top & bottom rows
  const mid = Math.ceil(skills.length / 2);
  const topSkills = skills.slice(0, mid);
  const bottomSkills = skills.slice(mid);

  // duplicate for seamless marquee
  const topItems = [...topSkills, ...topSkills];
  const bottomItems = [...bottomSkills, ...bottomSkills];

  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-heading">
      <div className="skills-inner">
        <h2 id="skills-heading" className="skills-title">My Skills</h2>
        <p className="skills-sub">Core strengths I use to craft polished, production-ready UI & apps.</p>

        {/* Wider marquee area */}
        <div className="skills-marquee-wrapper">
          {/* TOP ROW */}
          <div className="skills-marquee marquee-top" aria-hidden="false">
            <div className="marquee-track" role="list" aria-label="Top skills list">
              {topItems.map((skill, i) => (
                <div
                  key={`top-${skill.name}-${i}`}
                  role="listitem"
                  tabIndex={0}
                  className="skill-card"
                  aria-label={`${skill.name}: ${skill.percent} percent`}
                  title={`${skill.name} — ${skill.percent}%`}
                >
                  <div className="skill-left">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-percent">{skill.percent}%</div>
                  </div>
                  <div className="skill-bar-wrap" aria-hidden="true">
                    <div className="skill-bar" style={{ width: `${skill.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM ROW (separated) */}
          <div className="skills-marquee marquee-bottom" aria-hidden="false">
            <div className="marquee-track" role="list" aria-label="Bottom skills list">
              {bottomItems.map((skill, i) => (
                <div
                  key={`bottom-${skill.name}-${i}`}
                  role="listitem"
                  tabIndex={0}
                  className="skill-card"
                  aria-label={`${skill.name}: ${skill.percent} percent`}
                  title={`${skill.name} — ${skill.percent}%`}
                >
                  <div className="skill-left">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-percent">{skill.percent}%</div>
                  </div>
                  <div className="skill-bar-wrap" aria-hidden="true">
                    <div className="skill-bar" style={{ width: `${skill.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-note">Hover or focus a card to pause the animation. Tap to interact on touch devices.</div>
      </div>
    </section>
  );
}
