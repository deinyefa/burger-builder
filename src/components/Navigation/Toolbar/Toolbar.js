import React from 'react';

import ToolbarStyles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = props => (
  <header className={ToolbarStyles.Toolbar}>
    <Logo />
    <DrawerToggle toggleDrawer={props.toggleDrawer} />
    <nav className={ToolbarStyles.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar