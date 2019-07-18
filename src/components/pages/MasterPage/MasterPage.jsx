import React from 'react';
import PropTypes from 'prop-types';

import MasterPageStyled from './MasterPageStyle';
import Header from '../../Header';

const displayName = 'MasterPage';

const propTypes = {
  children: PropTypes.element.isRequired,
  headerItem: PropTypes.shape(),
  pageTitle: PropTypes.string.isRequired
};

const defaultProps = {
  headerItem: null
};

export default function MasterPage({ children, headerItem, pageTitle }) {
  return (
    <MasterPageStyled>
      <Header headerItem={headerItem} pageTitle={pageTitle} />
      {children}
    </MasterPageStyled>
  );
}

MasterPage.displayName = displayName;
MasterPage.propTypes = propTypes;
MasterPage.defaultProps = defaultProps;
