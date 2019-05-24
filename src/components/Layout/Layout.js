import React, { Fragment } from 'react';

import LayoutStyles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = props => (
  <Fragment>
    <Toolbar />
    <main className={LayoutStyles.Layout}>
      {props.children}
    </main>
  </Fragment>
);

export default layout;