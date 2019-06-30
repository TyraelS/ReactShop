import React from 'react';
import PropTypes from 'prop-types';

const displayName = 'CatalogItemLogo';

const propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired
  }).isRequired
};

const logoStyle = {
  divStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '5px',
    width: '50%'
  },
  logo: {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    border: '1px solid gray'
  },
  text: {
    fontSize: '20px',
    fontWeight: 'bold',
    textTransform: 'capitalize'
  }
};

export default function CatalogItemLogo({ data: { image, title } }) {
  return (
    <div style={logoStyle.divStyle}>
      <img
        alt={title}
        style={logoStyle.logo}
        src={image || 'https://avatanplus.com/files/resources/mid/5968a2c8f2ed115d40bbe123.png'}
      />
      <span style={logoStyle.text}>{title}</span>
    </div>
  );
}

CatalogItemLogo.displayName = displayName;
CatalogItemLogo.propTypes = propTypes;
