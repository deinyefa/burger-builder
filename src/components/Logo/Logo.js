import React from 'react';

import Logo from '../../assets/images/burger-logo.png';
import LogoStyles from './Logo.module.css';

const logo = props => (
  <div className={LogoStyles.Logo}>
    <img src={Logo} alt="Burger Logo icon" />
  </div>
);

export default logo;