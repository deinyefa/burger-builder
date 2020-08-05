import React from "react";
import { withFirebase } from "../../../firebase";
import NavigationItem from "./NavigationItem/NavigationItem";
import NavigationItemsStyles from "./NavigationItems.module.css";

const navigationItems = (props) => {
  return (
    <ul className={NavigationItemsStyles.NavigationItems}>
      <NavigationItem linkTarget="/" exact linkTitle="Build a Burger" />
      <NavigationItem linkTarget="/orders" linkTitle="Orders" />
      <NavigationItem
        linkTarget="/signout"
        linkTitle="Sign out"
        onClick={() => props.firebase.signOut()}
      />
    </ul>
  );
};

export default withFirebase(navigationItems);
