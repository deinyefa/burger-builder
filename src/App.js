import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
// import Checkout from "./containers/Checkout/Checkout";
import Layout from "./containers/Layout/Layout";
import Login from "./views/Login";
import Menu from "./views/Menu/Menu";
import PastOrders from "./views/Menu/PastOrders";
import Register from "./views/Register";

function App() {
  return (
    <Layout>
      <Switch>
        <Redirect from="/signout" to="/" />
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/menu" component={Menu} />
        <Route path="/orders" component={PastOrders} />
      </Switch>
    </Layout>
  );
}

export default App;
