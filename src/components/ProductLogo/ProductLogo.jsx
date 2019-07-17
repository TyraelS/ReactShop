import React from 'react';
import PropTypes from 'prop-types';
import { HeaderText } from '../Texts';
import { ProductLogoStyle, ProductImage } from './ProductLogoStyle';

const displayName = 'CatalogItemLogo';

const propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default function CatalogItemLogo({ data: { image, title } }) {
  return (
    <ProductLogoStyle>
      <ProductImage image={image} title={title} />
      <HeaderText>{title}</HeaderText>
    </ProductLogoStyle>
  );
}

CatalogItemLogo.displayName = displayName;
CatalogItemLogo.propTypes = propTypes;
