import React from "react";
import { Route, Switch } from "react-router-dom";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
// import Checkout from "./containers/Checkout/Checkout";
import Layout from "./containers/Layout/Layout";
import Login from "./views/Login";
import Register from "./views/Register";
// import Orders from "./containers/Orders/Orders";

// import appStyles from './App.module.css';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* <Route path="/checkout" component={Checkout} />
        <Orders path="/orders" component={Orders} /> */}
      </Switch>
    </Layout>
  );
}

export default App;
