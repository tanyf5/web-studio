import css from "./TeamList.module.css";
import TeamListItem from "../TeamListItem/TeamListItem";

export default function TeamList({ members }) {
  return (
    <ul className={css.list}>
      {members.map((member) => {
        return (
          <li key={member.id} className={css.item}>
            <TeamListItem
              photo={member.photo}
              name={member.name}
              position={member.position}
            />
          </li>
        );
      })}
    </ul>
  );
}
