import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.sass';
import {Main} from './app/pages/main/main';
import Toolbar from './app/components/toolbar/toolbar';
import Cart from './app/pages/cart/cart';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Toolbar/>

      <Switch>
        <Route component={Main} path='/' exact/>
        <Route component={Cart} path='/cart' exact/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
