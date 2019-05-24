import React from 'react';

import ToolbarStyles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = props => (
  <header className={ToolbarStyles.Toolbar}>
    <Logo />
    <div>Menu</div>
    <nav className={ToolbarStyles.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar