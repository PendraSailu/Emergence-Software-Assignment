const Skills = () => {
const skills = [
  "Python",
  "FastAPI",
  "Django",
  "PostgreSQL",
  "React",
  "TypeScript",
  "OpenCV",
  "Machine Learning",
  "Time-Series Analysis",
  "SQL"
];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;