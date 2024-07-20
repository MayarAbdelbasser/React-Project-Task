import { Link } from "react-router-dom";
import styles from "./Product.module.css";

export default function Product({ first_name, last_name, email, avatar, id }) {
  return (
    <div className={styles.productContain} key={id}>
      <img src={avatar} />
      <div className={styles.userData}>
        <p className={styles.heading}>
          {first_name} {last_name}
        </p>
        <p>{email}</p>
        <Link to={`/users/${id}`}>Read more</Link>
      </div>
    </div>
  );
}
