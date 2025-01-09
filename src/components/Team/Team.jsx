import team from "../../data/team.json";
import css from "./Team.module.css";
import Socials from "../Socials/Socials";

export default function Team() {
  return (
    <section className={css.section}>
      <h2>Our Team</h2>
      <ul className={css.list}>
        {team.map((member) => (
          <li key={member.id} className={css.item}>
            <img src={member.photo} alt={member.name} className={css.image} />
            <div className={css.memberInfo}>
              <h3 className={css.title}>{member.name}</h3>
              <p className={css.text}>{member.position}</p>
              <Socials />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
