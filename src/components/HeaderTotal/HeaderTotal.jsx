import React from 'react';
import PropTypes from 'prop-types';
import HeaderTotalStyle from './HeaderTotalStyle';

const displayName = 'HeaderTotal';

const propTypes = {
  totalPrice: PropTypes.number
};

const defaultProps = {
  totalPrice: 0
};

export default function HeaderTotal({ totalPrice }) {
  return <HeaderTotalStyle>{`Total Price: ${totalPrice}$`}</HeaderTotalStyle>;
}

HeaderTotal.displayName = displayName;
HeaderTotal.propTypes = propTypes;
HeaderTotal.defaultProps = defaultProps;
