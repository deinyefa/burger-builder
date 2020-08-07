import React, { useEffect, useState } from "react";
import Burger from "../../components/Burger/Burger";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";
import { withFirebase } from "../../firebase";
import BurgerDetails from "./BurgerDetails";
import Cart from "./Cart/Cart";
import MenuStyles from "./Menu.module.css";

const Menu = (props) => {
  const [burgers, setBurgers] = useState();
  const [open, setOpen] = useState();
  const [modalContent, setModalContent] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

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

  const handleQuantityChange = (operand) => {
    if (quantity >= 1 && operand === "add") {
      setQuantity((q) => q + 1);
    }
    if (quantity > 1 && operand === "not-add") {
      setQuantity((q) => q - 1);
    }
  };

  const addToCart = (name, quantity, total) => {
    let mutableCart = [...cart];
    const foundIdx = mutableCart.findIndex((item) => item.name === name);

    if (foundIdx > -1) {
      // not a new burger, so add to existing one
      const foundBurger = mutableCart[foundIdx];

      foundBurger.quantity = quantity;
      foundBurger.total = total * foundBurger.quantity;
    } else {
      // this is a new burger
      const burger = { name, quantity, total };
      mutableCart.push(burger);
    }

    setCart(mutableCart);
    setOpen(false);
  };

  const placeOrder = () => {
    const uuid = props.firebase.getCurrentUser().uid;
    const grandTotal = cart.reduce((acc, curr) => acc + curr.total, 0);
    const order = { cart, grandTotal };

    props.firebase
      .placeOrder(order, uuid)
      .then(() => console.log("Sucessfully written to doc!"))
      .catch((err) => console.log("Something went wrong!", err));
  };

  const burgerHTML = () => {
    if (burgers && burgers.length) {
      return burgers.map((burger) => {
        return (
          <div
            key={burger.uid}
            className={MenuStyles.Wrapper}
            onClick={() => {
              setOpen(true);
              setModalContent({
                ingredients: burger.ingredients,
                price: burger.price,
                name: burger.name,
              });
            }}
          >
            <Burger ingredients={burger.ingredients} small />
            <h3 style={{ textTransform: "capitalize" }}>{burger.name}</h3>
            <p>
              {new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD",
              }).format(burger.price)}
            </p>
          </div>
        );
      });
    }
    return <Spinner />;
  };

  const burgerDetails = modalContent.ingredients ? (
    <BurgerDetails
      ingredients={modalContent.ingredients}
      name={modalContent.name}
      price={modalContent.price}
      handleQuantityChange={handleQuantityChange}
      quantity={quantity}
      addToCart={addToCart}
    />
  ) : null;

  return (
    <>
      <div className={`container ${MenuStyles.Container}`}>{burgerHTML()}</div>
      <Modal show={open} modalClosed={() => setOpen((o) => !o)}>
        {burgerDetails}
      </Modal>
      <Cart cart={cart} placeOrder={placeOrder} />
    </>
  );
};

export default withFirebase(Menu);
