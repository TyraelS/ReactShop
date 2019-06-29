import React from 'react';
import PropTypes from 'prop-types';

const displayName = 'LangSwitch';
const propTypes = {
  currentLanguage: PropTypes.string.isRequired
};

const langList = ['english', 'russian', 'ukrainian'];

const langSwitchStyle = {
  fontSize: '14px'
};

export default function LangSwitch({ currentLanguage }) {
  return (
    <select style={langSwitchStyle} value={currentLanguage}>
      {langList.map((item, i) => {
        return <option key={i}>{item}</option>;
      })}
    </select>
  );
}

LangSwitch.displayName = displayName;
LangSwitch.propTypes = propTypes;
