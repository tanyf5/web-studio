import css from "./Team.module.css";
import TeamList from "../TeamList/TeamList";
import members from "../../data/team.json";

export default function Team() {
  return (
    <section className={css.section}>
      <h2>Our Team</h2>
      <TeamList members={members} />
    </section>
  );
}
