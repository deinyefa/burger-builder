import React, { Fragment, Component } from 'react';

import LayoutStyles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component { 

  state = {
    showSideDrawer: false,
  }

  sideDrawerToggleHandler = () => {
    this.setState({ showSideDrawer: !this.state.showSideDrawer })
  }

  render() {
    return (
      <Fragment>
        <Toolbar toggleDrawer={this.sideDrawerToggleHandler} />
        <SideDrawer 
          toggleSideDrawer={this.sideDrawerToggleHandler} 
          showSideDrawer={this.state.showSideDrawer} />
        <main className={LayoutStyles.Layout}>
          {this.props.children}
        </main>
      </Fragment>
    );
  }
}

export default Layout;