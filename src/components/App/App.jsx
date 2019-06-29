import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

const displayName = 'App';

const propTypes = {
  language: PropTypes.string.isRequired
};

export default function App({ language }) {
  return <Header page="catalog" language={language} />;
}

App.displayName = displayName;
App.propTypes = propTypes;
