import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import css from "./Socials.module.css";

export default function Socials() {
  const socialMedia = [
    { id: 1, name: "Facebook", icon: <FaFacebook size={20} /> },
    { id: 2, name: "Twitter", icon: <FaTwitter size={20} /> },
    { id: 3, name: "Instagram", icon: <FaInstagram size={20} /> },
    { id: 4, name: "LinkedIn", icon: <FaLinkedin size={20} /> },
  ];

  return (
    <ul className={css.list}>
      {socialMedia.map((item) => (
        <li key={item.id} className={css.item}>
          <div className={css.icon}>{item.icon}</div>
        </li>
      ))}
    </ul>
  );
}
