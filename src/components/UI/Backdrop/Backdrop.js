import React from 'react';

import BackdropStyles from './Backdrop.module.css';

const backdrop = props => (
  props.show 
    ? 
    <div className={BackdropStyles.Backdrop} onClick={props.clicked}></div> 
    : null
);

export default backdrop