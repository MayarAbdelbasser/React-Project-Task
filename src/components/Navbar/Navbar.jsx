import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navContain}>
      <Link to="/" className={styles.heading}>
        Home
      </Link>
      <Link to="/about" className={styles.about}>
        About
      </Link>
    </div>
  );
}
