import React from "react";
import { Button } from "reactstrap";
import Burger from "../../components/Burger/Burger";
import BurgerDetailsStyles from "./BurgerDetails.module.css";

const BurgerDetails = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <>
      <Burger ingredients={props.ingredients} small />
      <h3>{props.name}</h3>
      <ul>{ingredientsSummary}</ul>
      <p style={{ marginBottom: "0.5em" }}>Quantity</p>
      <div className={BurgerDetailsStyles.QuantityWrapper}>
        <Button
          onClick={() => props.handleQuantityChange("not-add", props.price)}
        >
          -
        </Button>
        <p>{props.quantity}</p>
        <Button onClick={() => props.handleQuantityChange("add", props.price)}>
          +
        </Button>
      </div>
      <p style={{ marginTop: "1em" }}>
        Your total is:{" "}
        <strong style={{ color: "#944317" }}>
          {new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD",
          }).format(props.quantity * props.price)}
        </strong>
      </p>
      <Button color="success">Add to cart</Button>
    </>
  );
};

export default BurgerDetails;
