import React from 'react';
import PropTypes from 'prop-types';

const displayName = 'CatalogItemButton';
const propTypes = {
  handleAdd: PropTypes.func.isRequired
};

const btnStyle = {
  width: '100px',
  height: '75px',
  fontSize: '30px',
  lineHeight: '75px',
  fontWeight: 'bold',
  border: '1px solid #cecece',
  borderRadius: '10px'
};

function CatalogItemButton({ handleAdd }) {
  return (
    <button style={btnStyle} type="button" onClick={handleAdd}>
      BUY
    </button>
  );
}

CatalogItemButton.displayName = displayName;
CatalogItemButton.propTypes = propTypes;

export default CatalogItemButton;
