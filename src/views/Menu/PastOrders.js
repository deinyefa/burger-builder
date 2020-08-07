import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import Spinner from "../../components/UI/Spinner/Spinner";
import { withFirebase } from "../../firebase";
import MenuStyles from "./Menu.module.css";

const PastOrders = (props) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchMyBurgers = () => {
      try {
        const uuid = props.firebase.getCurrentUser().uid;
        props.firebase
          .fetchOrders(uuid)
          .then((snapshot) => {
            let data = [];
            snapshot.forEach((doc) => {
              data.push({
                uid: doc.id,
                ...doc.data(),
              });
            });
            setOrders(data);
          })
          .catch((err) => console.log("err", err));
      } catch (err) {
        console.log("cannot find currently signed in user");
      }
    };
    fetchMyBurgers();
  }, [props.firebase]);

  const burgerHTML = () => {
    if (orders && orders.length) {
      return orders.map((order) => {
        return (
          <div key={order.uid} className={MenuStyles.Wrapper}>
            <p>{new Date(parseInt(order.uid) * 1000).toDateString()}</p>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {order.cart.map((burger) => (
                  <tr key={burger.name}>
                    <td style={{ textTransform: "capitalize" }}>
                      {burger.name}
                    </td>
                    <td>{burger.quantity}</td>
                    <td>
                      {new Intl.NumberFormat("en-CA", {
                        style: "currency",
                        currency: "CAD",
                      }).format(burger.total)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h4>
              Grand Total:{" "}
              {new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD",
              }).format(order.grandTotal)}
            </h4>
          </div>
        );
      });
    }
    return <Spinner />;
  };

  return (
    <div className={`container ${MenuStyles.Container}`}>{burgerHTML()}</div>
  );
};

export default withFirebase(PastOrders);
