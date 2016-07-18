import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './components';

import Pokedex from './components/pokedex';
import Movedex from './components/movedex';
import Items from './components/items';
import Faq from './components/faq';

export default (
  <Route path="/" name="app" component={ App } >
    <IndexRedirect to="pokedex" />
    <Route path="pokedex" component={ Pokedex } />
    <Route path="movedex" component={ Movedex } />
    <Route path="items" component={ Items } />
    <Route path="faq" component={ Faq } />
  </Route>
);
