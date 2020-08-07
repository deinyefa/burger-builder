import React, { useState } from "react";
import { Badge, Button as StyledButton, Table } from "reactstrap";
import Modal from "../../../components/UI/Modal/Modal";
import StyledCart from "./Cart.module.css";

const Cart = (props) => {
  const [open, setOpen] = useState();

  const grandTotal = props.cart.reduce((acc, curr) => acc + curr.total, 0);

  return (
    <>
      <StyledButton
        className={StyledCart.CartIcon}
        onClick={() => setOpen(true)}
      >
        C
        {props.cart.length ? (
          <Badge color="danger" className={StyledCart.CartBadge}>
            {props.cart.length}
          </Badge>
        ) : null}
      </StyledButton>
      <Modal show={open} modalClosed={() => setOpen((o) => !o)}>
        {props.cart.length ? (
          <>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {props.cart.length &&
                  props.cart.map((item) => (
                    <tr key={item.name}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>
                        {new Intl.NumberFormat("en-CA", {
                          style: "currency",
                          currency: "CAD",
                        }).format(item.total)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
            <h4>
              Total:{" "}
              <small>
                {new Intl.NumberFormat("en-CA", {
                  style: "currency",
                  currency: "CAD",
                }).format(grandTotal)}
              </small>
            </h4>
            <StyledButton color="success" onClick={props.placeOrder}>
              Place Order
            </StyledButton>
          </>
        ) : (
          <h4>There are no items in your cart. Add some!</h4>
        )}
      </Modal>
    </>
  );
};

export default Cart;
