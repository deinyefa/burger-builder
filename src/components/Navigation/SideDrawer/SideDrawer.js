import React from 'react';

import SideDrawerStyles from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';


const sideDrawer = props => {
  return (
    <div className={SideDrawerStyles.SideDrawer}>
      <Logo />
      <nav role="navigation">
        <NavigationItems />
      </nav>
    </div>
  );
}

export default sideDrawer;