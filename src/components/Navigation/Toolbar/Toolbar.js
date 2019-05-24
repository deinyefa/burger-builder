import React from 'react';

import ToolbarStyles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = props => (
  <header className={ToolbarStyles.Toolbar}>
  <div><Logo /></div>
    <div>Menu</div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar