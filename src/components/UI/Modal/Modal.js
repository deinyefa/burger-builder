import React from 'react';

import ModalStyles from './Modal.module.css';

const modal = props => {
  return (
    <div className={ModalStyles.Modal}>
      {props.children}
    </div>
  )
}

export default modal;