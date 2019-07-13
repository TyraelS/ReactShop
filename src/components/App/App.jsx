import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Catalog from '../pages/Catalog';
// import Basket from '../pages/Basket';
// import Order from '../pages/Order';
// import ThankYou from '../pages/ThankYou';

import Header from '../Header';
import HeaderText from '../HeaderText';
import LangSwitch from '../LangSwitch';

const displayName = 'App';

export default function App() {
  return (
    <>
      <Header>
        <LangSwitch currentLanguage="english" />
        <HeaderText value="catalog" />
      </Header>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Catalog} />
          {/* <Route path="/basket" component={Basket} />
          <Route path="/order" component={Order} />
          <Route path="/thankyou" component={ThankYou} /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

App.displayName = displayName;
