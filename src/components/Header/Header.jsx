import React from 'react';
import PropTypes from 'prop-types';

const displayName = 'Header';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

const defaultProps = {
  children: null
};

const divStyle = {
  display: 'flex',
  width: '100%',
  height: '50px',
  alignItems: 'center',
  borderBottom: '2px solid gray'
};
export default function Header({ children }) {
  return <div style={divStyle}>{children}</div>;
}

Header.displayName = displayName;
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
