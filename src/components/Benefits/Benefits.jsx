//import { MdSettingsInputAntenna } from "react-icons/md";
//import { FaRegClock } from "react-icons/fa6";
//import { ImStatsDots } from "react-icons/im";
//import { FaUserAstronaut } from "react-icons/fa6";
import benefits from "../../data/benefits.json";
import css from "./Benefits.module.css";

export default function Benefits() {
  return (
    <section className={css.section}>
      <ul className={css.list}>
        {benefits.map((benefit) => (
          <li key={benefit.id} className={css.item}>
            <h3 className={css.title}>{benefit.title}</h3>
            <p className={css.text}>{benefit.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
