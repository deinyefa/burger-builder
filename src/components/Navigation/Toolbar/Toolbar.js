import React from 'react';

import ToolbarStyles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';

const toolbar = props => (
  <header className={ToolbarStyles.Toolbar}>
  <div><Logo /></div>
    <div>Menu</div>
    <nav>
      <ul>
        ...NAVIGATION...
      </ul>
    </nav>
  </header>
);

export default toolbar