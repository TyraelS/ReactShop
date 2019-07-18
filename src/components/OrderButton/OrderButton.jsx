import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HeaderText } from '../Texts';
import OrderButtonStyle from './OrderButtonStyle';

const displayName = 'OrderButton';

const propTypes = {
  link: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default function OrderButton({ link, value }) {
  return (
    <Link to={`/${link}`}>
      <OrderButtonStyle>
        <HeaderText>{value}</HeaderText>
      </OrderButtonStyle>
    </Link>
  );
}

OrderButton.displayName = displayName;
OrderButton.propTypes = propTypes;
