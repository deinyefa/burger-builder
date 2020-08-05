import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import OrderSummaryStyles from "./OrderSummary.module.css";

const OrderSummary = (props) => {
  const [burgerName, setBurgerName] = useState("");
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
      <h2>Your Order Summary</h2>
      <p>Your burger contains the following ingredients: </p>
      <input
        name="burgerName"
        id="burgerName"
        onChange={(e) => setBurgerName(e.target.value)}
        value={burgerName}
        placeholder="Provide a name for your creation"
        className={OrderSummaryStyles.Input}
      />
      <ul>{ingredientsSummary}</ul>
      <p>
        Your total is:{" "}
        <strong style={{ color: "#944317" }}>${props.orderTotal}</strong>
      </p>
      <Button
        className={OrderSummaryStyles.Order}
        btnType="Danger"
        clicked={props.purchaseCanceled}
      >
        CANCEL
      </Button>

      <Button
        className={OrderSummaryStyles.Order}
        btnType="Success"
        disabled={!!!burgerName}
        clicked={props.purchaseContinued}
      >
        {burgerName
          ? `Add ${burgerName} to your menu`
          : "Provide a name for your creation"}
      </Button>
    </>
  );
};

export default OrderSummary;
