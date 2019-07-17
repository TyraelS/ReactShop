import React from 'react';
import PropTypes from 'prop-types';

import CatalogItem from '../../CatalogItem';
import CatalogStyled from './CatalogStyle';

const displayName = 'Catalog';

const propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      price: PropTypes.number.isRequired,
      image: PropTypes.string
    }).isRequired
  ).isRequired
};

const handleAdd = id => {
  // eslint-disable-next-line no-alert
  alert(`Product ${id} is added to cart!`);
};

export default function Catalog({ products }) {
  return (
    <CatalogStyled>
      {products ? (
        products.map(item => {
          // eslint-disable-next-line react/no-array-index-key
          return <CatalogItem key={products.id} product={{ ...item, handleAdd }} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </CatalogStyled>
  );
}

Catalog.displayName = displayName;
Catalog.propTypes = propTypes;
