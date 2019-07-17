import React from 'react';
import PropTypes from 'prop-types';

import ProductLogo from '../ProductLogo';
import { DescriptionText, PriceText } from '../Texts';
import CatalogItemButton from '../CatalogItemButton';
import CatalogItemStyle from './CatalogItemStyle';

const displayName = 'CatalogItem';
const propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  id: PropTypes.number.isRequired,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  price: PropTypes.number.isRequired,
  handleAdd: PropTypes.func.isRequired
};

const defaultProps = {
  image: 'https://avatanplus.com/files/resources/mid/5968a2c8f2ed115d40bbe123.png',
  text: 'This product has no description'
};

export default function CatalogItem({ image, title, text, price, handleAdd }) {
  return (
    <CatalogItemStyle>
      <ProductLogo data={{ image, title }} />
      <DescriptionText>{text}</DescriptionText>
      <PriceText>{`${price}$`}</PriceText>
      <CatalogItemButton onClick={handleAdd}>Buy</CatalogItemButton>
    </CatalogItemStyle>
  );
}

CatalogItem.displayName = displayName;
CatalogItem.propTypes = propTypes;
CatalogItem.defaultProps = defaultProps;
