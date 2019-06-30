import React from 'react';

import Header from '../../Header';
import HeaderText from '../../HeaderText';
import LangSwitch from '../../LangSwitch';

const displayName = 'Catalog';

export default function Catalog() {
  return (
    <>
      <Header>
        <LangSwitch currentLanguage="english" />
        <HeaderText value="catalog" />
      </Header>
    </>
  );
}

Catalog.displayName = displayName;
