import css from "./BenefitItem.module.css";

export default function BenefitItem({ title, text }) {
  return (
    <div>
      <h3 className={css.title}>{title}</h3>
      <p className={css.text}>{text}</p>
    </div>
  );
}
