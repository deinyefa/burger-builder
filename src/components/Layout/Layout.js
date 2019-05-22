import React, { Fragment } from 'react'

const layout = props => (
  <Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>
      {props.children}
    </main>
  </Fragment>
);

export default layout;