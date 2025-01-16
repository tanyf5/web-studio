//import { MdSettingsInputAntenna } from "react-icons/md";
//import { FaRegClock } from "react-icons/fa6";
//import { ImStatsDots } from "react-icons/im";
//import { FaUserAstronaut } from "react-icons/fa6";

import css from "./Benefits.module.css";
import BenefitItem from "../BenefitItem/BenefitItem";

export default function Benefits({ benefits }) {
  return (
    <section className={css.section}>
      <ul className={css.list}>
        {benefits.map((benefit) => {
          return (
            <li key={benefit.id} className={css.item}>
              <BenefitItem title={benefit.title} text={benefit.text} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
