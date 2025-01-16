import css from "./TeamListItem.module.css";
import Socials from "../Socials/Socials";

export default function TeamListItem({ photo, name, position }) {
  return (
    <div>
      <img src={photo} alt={name} className={css.image} />
      <div className={css.memberInfo}>
        <h3 className={css.title}>{name}</h3>
        <p className={css.text}>{position}</p>
        <Socials />
      </div>
    </div>
  );
}
