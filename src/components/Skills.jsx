import React from "react";
import "./styles/skills.css";

const Skills = () => {
  const skills = [
    { category: "Lenguajes de Programación", list: ["JavaScript", "Python", "C++"] },
    { category: "Frameworks y Librerías", list: ["React", "Node.js", "Bootstrap"] },
    { category: "Habilidades Personales", list: ["Trabajo en equipo", "Resolución de problemas", "Gestión del tiempo"] },
  ];

  return (
    <section id="skills">
      <h2>💡 Mis Habilidades</h2>
      <div className="skills-container">
        {skills.map((skillSet, index) => (
          <div key={index} className="skills-category">
            <h3>{skillSet.category}</h3>
            <ul>
              {skillSet.list.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
