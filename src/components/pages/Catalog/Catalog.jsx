import React from 'react';

import CatalogItem from '../../CatalogItem';

const displayName = 'Catalog';
const products = [
  {
    id: 1,
    image: 'somelinks.com',
    title: 'phone1',
    text: 'simple description',
    price: 15
  },
  {
    id: 2,
    image: 'somelinks.com',
    title: 'phone2',
    text: 'simple description',
    price: 12
  },
  {
    id: 3,
    image: 'somelinks.com',
    title: 'phone3',
    text: 'simple description',
    price: 10
  },
  {
    id: 3,
    image: 'somelinks.com',
    title: 'phone3',
    text: 'simple description',
    price: 10
  },
  {
    id: 3,
    image: 'somelinks.com',
    title: 'phone3',
    text: 'simple description',
    price: 10
  },
  {
    id: 3,
    image: 'somelinks.com',
    title: 'phone3',
    text: 'simple description',
    price: 10
  },
  {
    id: 3,
    image: 'somelinks.com',
    title: 'phone3',
    text: 'simple description',
    price: 10
  }
];

const divStyle = {
  display: 'flex',
  marginTop: '30px',
  justifyContent: 'space-around',
  flexWrap: 'wrap'
};

const handleAdd = id => {
  // eslint-disable-next-line no-alert
  alert(`Product ${id} is added to cart!`);
};

export default function Catalog() {
  return (
    <div style={divStyle}>
      {products.map((item, i) => {
        // eslint-disable-next-line react/no-array-index-key
        return <CatalogItem key={i} product={{ ...item, handleAdd }} />;
      })}
    </div>
  );
}

Catalog.displayName = displayName;
