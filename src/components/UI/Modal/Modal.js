import React, { Fragment, Component } from 'react';

import ModalStyles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component {
  shouldComponentUpdate = ( nextProps, nextState ) => {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  render () {
    return (
      <Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={ModalStyles.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </Fragment>
    )
  }
}

export default Modal;