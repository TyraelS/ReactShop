import React from 'react';
import { Field } from 'redux-form/immutable';
import OrderInput from '../OrderInput';
import { HeaderText } from '../Texts';

const displayName = 'OrderAdress';

export default function OrderAdress() {
  return (
    <div>
      <HeaderText>Delivery Address:</HeaderText>
      <Field name="city" id="city" type="text" component={OrderInput} label="City:" />
      <Field name="zip" id="zip" type="number" component={OrderInput} label="Postal Code:" />
    </div>
  );
}

OrderAdress.displayName = displayName;
