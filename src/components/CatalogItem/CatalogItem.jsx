import React from 'react';
import PropTypes from 'prop-types';

import CatalogItemLogo from '../CatalogItemLogo';
import CatalogItemText from '../CatalogItemText';
import CatalogItemPrice from '../CatalogItemPrice';
import CatalogItemButton from '../CatalogItemButton';

const displayName = 'CatalogItem';
const propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    price: PropTypes.number.isRequired,
    handleAdd: PropTypes.func.isRequired
  }).isRequired
};

const divStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '350px',
  height: '400px',
  margin: '20px 0',
  border: '1px solid gray',
  boxShadow: '1px 3px 1px #9e9e9e',
  borderRadius: '10px'
};

export default function CatalogItem({ product: { id, image, title, text, price, handleAdd } }) {
  return (
    <div style={divStyle}>
      <CatalogItemLogo data={{ image, title }} />
      <CatalogItemText data={text} />
      <CatalogItemPrice data={price} />
      <CatalogItemButton id={id} onAdd={handleAdd} />
    </div>
  );
}

CatalogItem.displayName = displayName;
CatalogItem.propTypes = propTypes;
