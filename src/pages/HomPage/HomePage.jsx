import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import Product from "../../components/Product/Product";

export default function HomePage() {
  const [data, setData] = useState([]);

  const backward = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  };

  const upward = () => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  };

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);

  return (
    <div>
      <h1 className={styles.heading}>Users List</h1>
      <div className={styles.productsContainers}>
        {data.map((user) => (
          <Product
            key={user.id}
            first_name={user.first_name}
            last_name={user.last_name}
            email={user.email}
            avatar={user.avatar}
            id={user.id}
          />
        ))}
      </div>
      <div className="w-100 d-flex justify-content-center align-items-center">
        <div
          className="btn-group mx-auto p-3"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={backward}
          >
            1
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={upward}
          >
            2
          </button>
        </div>
      </div>
    </div>
  );
}
