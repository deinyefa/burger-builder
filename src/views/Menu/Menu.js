import React, { useEffect, useState } from "react";
import Burger from "../../components/Burger/Burger";
import Spinner from "../../components/UI/Spinner/Spinner";
import { withFirebase } from "../../firebase";
import MenuStyles from "./Menu.module.css";

const Menu = (props) => {
  const [burgers, setBurgers] = useState();

  useEffect(() => {
    const fetchBurgers = () => {
      props.firebase
        .fetchBurgers()
        .then((snapshot) => {
          let data = [];
          snapshot.forEach((doc) => {
            data.push({
              uid: doc.id,
              ...doc.data(),
            });
          });
          setBurgers(data);
        })
        .catch((err) => console.log("err", err));
    };
    fetchBurgers();
  }, []);
  console.log(burgers);

  const burgerHTML = () => {
    if (burgers && burgers.length) {
      return burgers.map((burger) => (
        <div key={burger.uid} className={MenuStyles.Wrapper}>
          <Burger ingredients={burger.ingredients} small />
          <h3 style={{ textTransform: "capitalize" }}>{burger.name}</h3>
          <p>
            {new Intl.NumberFormat("en-CA", {
              style: "currency",
              currency: "CAD",
            }).format(burger.price)}
          </p>
        </div>
      ));
    }
    return <Spinner />;
  };

  return (
    <div className={`container ${MenuStyles.Container}`}>{burgerHTML()}</div>
  );
};

export default withFirebase(Menu);
