import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Details from "../../components/Details/Details";

export default function SingleProduct() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data.data);
      });
  }, []);
  return (
    <>
      <Details
        key={singleProduct.id}
        first_name={singleProduct.first_name}
        last_name={singleProduct.last_name}
        email={singleProduct.email}
        avatar={singleProduct.avatar}
        id={singleProduct.id}
      />
    </>
  );
}
