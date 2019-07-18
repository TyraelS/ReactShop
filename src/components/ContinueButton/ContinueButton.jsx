import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HeaderText } from '../Texts';
import ContinueButtonStyle from './ContinueButtonStyle';

const displayName = 'OrderButton';

const propTypes = {
  link: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default function ContinueButton({ link, value }) {
  return (
    <Link to={`/${link}`}>
      <ContinueButtonStyle>
        <HeaderText>{value}</HeaderText>
      </ContinueButtonStyle>
    </Link>
  );
}

ContinueButton.displayName = displayName;
ContinueButton.propTypes = propTypes;
