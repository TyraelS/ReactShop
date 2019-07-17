import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyle from './HeaderStyle';
import LangDropdown from '../LangDropdown';
import { HeaderText } from '../Texts';

const displayName = 'Header';

const propTypes = {
  headerItem: PropTypes.elementType,
  pageTitle: PropTypes.string.isRequired
};

const defaultProps = {
  headerItem: null
};

export default function Header({ headerItem, pageTitle }) {
  return (
    <HeaderStyle>
      <div>
        <LangDropdown currentLanguage="english" />
        <HeaderText>{pageTitle}</HeaderText>
      </div>
      {headerItem && React.createElement(headerItem)}
    </HeaderStyle>
  );
}

Header.displayName = displayName;
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
