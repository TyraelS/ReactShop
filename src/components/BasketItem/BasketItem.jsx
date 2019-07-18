import React from 'react';
import PropTypes from 'prop-types';
import BasketItemStyle from './BasketItemStyle';
import BasketCounter from '../BasketCounter';
import { PriceText } from '../Texts';
import ProductLogo from '../ProductLogo';

const displayName = 'BasketItem';

const propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  handleChangeCount: PropTypes.func.isRequired
};

const defaultProps = {
  image: 'https://avatanplus.com/files/resources/mid/5968a2c8f2ed115d40bbe123.png'
};

export default function BasketItem({ image, title, count, price, handleChangeCount }) {
  return (
    <BasketItemStyle>
      <div>
        <ProductLogo data={{ image, title }} />
      </div>
      <div>
        <BasketCounter value={count} onChange={handleChangeCount} />
        <PriceText>{`Total Price: ${count * price}$`}</PriceText>
      </div>
    </BasketItemStyle>
  );
}

BasketItem.displayName = displayName;
BasketItem.propTypes = propTypes;
BasketItem.defaultProps = defaultProps;
