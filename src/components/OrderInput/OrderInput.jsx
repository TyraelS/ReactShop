import React from 'react';
import PropTypes from 'prop-types';
import { DescriptionText, ErrorText } from '../Texts';
import OrderInputStyle from './OrderInputStyle';

const displayName = 'OrderInput';

const propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string.isRequired
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.boolean,
    error: PropTypes.boolean
  }).isRequired
};

export default function OrderInput({ label, type, input, meta: { touched, error } }) {
  return (
    <OrderInputStyle>
      <label htmlFor={input.name}>
        <DescriptionText>{label}</DescriptionText>
        <div>
          <input {...input} type={type} />
          {touched && error && <ErrorText>{error}</ErrorText>}
        </div>
      </label>
    </OrderInputStyle>
  );
}

OrderInput.displayName = displayName;
OrderInput.propTypes = propTypes;
