import React, { Fragment } from 'react';

import LayoutStyles from './Layout.module.css';

const layout = props => (
  <Fragment>
    <div className={LayoutStyles.Layout}>Toolbar, SideDrawer, Backdrop</div>
    <main>
      {props.children}
    </main>
  </Fragment>
);

export default layout;