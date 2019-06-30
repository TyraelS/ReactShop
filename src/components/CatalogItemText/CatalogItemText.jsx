import React from 'react';
import PropTypes from 'prop-types';

const displayName = 'CatalogItemText';
const propTypes = {
  data: PropTypes.string
};

const defaultProps = {
  data: 'The description goes here'
};

const textStyle = {
  fontSize: '20px',
  color: '#9e9e9e',
  textTransform: 'capitalize'
};

export default function CatalogItemText({ data }) {
  return <span style={textStyle}>{data}</span>;
}

CatalogItemText.displayName = displayName;
CatalogItemText.propTypes = propTypes;
CatalogItemText.defaultProps = defaultProps;
