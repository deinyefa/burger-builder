import React from 'react';
import PropTypes from 'prop-types';

import NaviationItemStyles from './NavigationItem.module.css';

const navigationItem = props => (
  <li className={NaviationItemStyles.NavigationItem}>
    <a 
      href={props.linkTarget} 
      className={props.active ? NaviationItemStyles.active : null}>{props.linkTitle}</a>
  </li>
);

navigationItem.propTypes = {
  linkTitle: PropTypes.string.isRequired,
  linkTarget: PropTypes.string.isRequired,
}

export default navigationItem;