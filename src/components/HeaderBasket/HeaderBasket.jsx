import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import HeaderBasketStyle from './HeaderBasketStyle';

const displayName = 'HeaderBasket';

const propTypes = {
  totalCount: PropTypes.number.isRequired
};

export default function HeaderBasket({ totalCount }) {
  return (
    <Link to="/basket">
      <HeaderBasketStyle>{`Basket: ${totalCount}`}</HeaderBasketStyle>
    </Link>
  );
}

HeaderBasket.displayName = displayName;
HeaderBasket.propTypes = propTypes;
