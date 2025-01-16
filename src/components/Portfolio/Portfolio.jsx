import css from "./Portfolio.module.css";
import ProjectsList from "../ProjectsList/ProjectsList";

export default function Portfolio() {
  return (
    <section className={css.section}>
      <h2>Our Portfolio</h2>
      <ProjectsList />
    </section>
  );
}
