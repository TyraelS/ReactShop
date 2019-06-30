import React from 'react';
import PropTypes from 'prop-types';

const displayName = 'CatalogItemPrice';
const propTypes = {
  data: PropTypes.number.isRequired
};

const textStyle = {
  fontSize: '26px',
  fontStyle: 'italic'
};

export default function CatalogItemPrice({ data }) {
  return <span style={textStyle}>{`${data} $`}</span>;
}

CatalogItemPrice.displayName = displayName;
CatalogItemPrice.propTypes = propTypes;
