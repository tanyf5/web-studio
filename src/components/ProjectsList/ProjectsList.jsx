import css from "./ProjectsList.module.css";
import projects from "../../data/projects.json";
import { useState } from "react";

export default function ProjectsList() {
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  return (
    <ul className={css.list}>
      {projects.map((project) => (
        <li
          key={project.id}
          className={css.item}
          onMouseEnter={() => setHoveredProjectId(project.id)}
          onMouseLeave={() => setHoveredProjectId(null)}
        >
          <div className={css.contentWrap}>
            <img src={project.img} alt={project.title} className={css.image} />
            {hoveredProjectId === project.id && (
              <div className={css.portfolioContent}>{project.text}</div>
            )}
          </div>
          <div className={css.projectInfo}>
            <h3 className={css.title}>{project.title}</h3>
            <p>{project.tag}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
