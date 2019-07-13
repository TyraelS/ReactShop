import React from 'react';
import PropTypes from 'prop-types';

const displayName = 'HeaderText';
const propTypes = {
  value: PropTypes.string.isRequired
};

const spanStyle = {
  fontSize: '24px',
  fontStyle: 'italic',
  textTransform: 'capitalize'
};

export default function HeaderText({ value }) {
  return <span style={spanStyle}>{value}</span>;
}

HeaderText.displayName = displayName;
HeaderText.propTypes = propTypes;
