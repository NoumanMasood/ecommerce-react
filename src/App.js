import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shoppage.component';

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={Homepage}></Route>
      <Route path='/shop/' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
