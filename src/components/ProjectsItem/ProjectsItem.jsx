import css from "./ProjectsItem.module.css";

export default function ProjectsItem({ img, title, tag }) {
  return (
    <div>
      <div className={css.contentWrap}>
        <img src={img} alt={title} className={css.image} />
      </div>
      <div className={css.projectInfo}>
        <h3 className={css.title}>{title}</h3>
        <p>{tag}</p>
      </div>
    </div>
  );
}
