import React from 'react';
import PropTypes from 'prop-types';
import BasketStyle from './BasketStyle';
import MasterPage from '../MasterPage';
import HeaderTotal from '../../HeaderTotal';
import BasketItem from '../../BasketItem';
import { HeaderText } from '../../Texts';

const displayName = 'Basket';

const propTypes = {
  basketProducts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  basket: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default function Basket({ basket, basketProducts }) {
  return (
    <MasterPage headerItem={HeaderTotal} pageTitle="Basket">
      <BasketStyle>
        {basketProducts ? (
          basketProducts.map(product => (
            <BasketItem
              key={product.id}
              count={basket.find(basketProduct => basketProduct.id === product.id).count}
              {...product}
            />
          ))
        ) : (
          <HeaderText>Basket is empty</HeaderText>
        )}
      </BasketStyle>
    </MasterPage>
  );
}

Basket.displayName = displayName;
Basket.propTypes = propTypes;
