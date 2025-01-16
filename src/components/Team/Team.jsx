import css from "./Team.module.css";
import TeamList from "../TeamList/TeamList";

export default function Team() {
  return (
    <section className={css.section}>
      <h2>Our Team</h2>
      <TeamList />
    </section>
  );
}
