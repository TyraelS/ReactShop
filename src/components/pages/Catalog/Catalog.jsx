import React from 'react';
import PropTypes from 'prop-types';

import CatalogItem from '../../CatalogItem';
import CatalogStyle from './CatalogStyle';
import MasterPage from '../MasterPage';

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
    <MasterPage pageTitle="Catalog">
      <CatalogStyle>
        {products ? (
          products.map(item => {
            return <CatalogItem key={item.id} product={{ ...item, handleAdd }} />;
          })
        ) : (
          <div>Loading...</div>
        )}
      </CatalogStyle>
    </MasterPage>
  );
}

Catalog.displayName = displayName;
Catalog.propTypes = propTypes;
