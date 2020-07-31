import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import NavigationItemsStyles from "./NavigationItems.module.css";

const navigationItems = (props) => (
  <ul className={NavigationItemsStyles.NavigationItems}>
    <NavigationItem linkTarget="/" exact linkTitle="Build a Burger" />
    <NavigationItem linkTarget="/orders" linkTitle="Orders" />
  </ul>
);

export default navigationItems;
