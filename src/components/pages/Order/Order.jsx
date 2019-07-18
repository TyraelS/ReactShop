import React from 'react';
import PropTypes from 'prop-types';

import MasterPage from '../MasterPage';
import OrderStyle from './OrderStyle';
import OrderForm from '../../OrderForm';

const displayName = 'Order';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default function Order({ handleSubmit }) {
  return (
    <MasterPage pageTitle="Order">
      <OrderStyle>
        <OrderForm onSubmit={handleSubmit} />
      </OrderStyle>
    </MasterPage>
  );
}

Order.displayName = displayName;
Order.propTypes = propTypes;
