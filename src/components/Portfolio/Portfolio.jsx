import css from "./Portfolio.module.css";
import ProjectsList from "../ProjectsList/ProjectsList";
import projects from "../../data/projects.json";

export default function Portfolio() {
  return (
    <section className={css.section}>
      <h2>Our Portfolio</h2>
      <ProjectsList projects={projects} />
    </section>
  );
}
