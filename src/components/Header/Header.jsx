import React from 'react';
import PropTypes from 'prop-types';

import LangSwitch from '../LangSwitch';
import HeaderText from '../HeaderText';

const displayName = 'Header';

const propTypes = {
  page: PropTypes.string.isRequired
};

const divStyle = {
  display: 'flex',
  width: '100%',
  height: '50px',
  alignItems: 'center',
  borderBottom: '2px solid gray'
};
export default function Header({ page }) {
  return (
    <div style={divStyle}>
      <LangSwitch currentLanguage="ukrainian" />
      <HeaderText value={page} />
    </div>
  );
}

Header.displayName = displayName;
Header.propTypes = propTypes;
