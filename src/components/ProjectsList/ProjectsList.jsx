import css from "./ProjectsList.module.css";
import ProjectsItem from "../ProjectsItem/ProjectsItem";

export default function ProjectsList({ projects }) {
  return (
    <ul className={css.list}>
      {projects.map((project) => {
        return (
          <li key={project.id} className={css.item}>
            <ProjectsItem
              img={project.img}
              title={project.title}
              tag={project.tag}
            />
          </li>
        );
      })}
    </ul>
  );
}
