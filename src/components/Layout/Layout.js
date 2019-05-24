import React, { Fragment } from 'react';

import LayoutStyles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = props => (
  <Fragment>
    <Toolbar />
    <SideDrawer />
    <main className={LayoutStyles.Layout}>
      {props.children}
    </main>
  </Fragment>
);

export default layout;