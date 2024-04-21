import './Skills.scss';
import skills from '../../api/skills.json';

export const Skills = () => {
  return (
    <section className="skills" id="Skills">
      <div className="skills__wrapper">
        <h2 className="skills__title">Have the Skills</h2>

        <div className="skills__content">
          <ul className="skills__list">
            {skills.map((skill) => (
              <li key={skill.id}>{skill.name}</li>
            ))}
          </ul>

          <div className="skills__icons">
            {skills.map((skill) => (
              <img
                key={skill.id}
                src={skill.image}
                className="skills__icon"
                alt={skill.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
