import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';

const Hatspage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={Homepage}></Route>
      <Route path='/shop/hats' component={Hatspage}></Route>
      </Switch>
    </div>
  );
}

export default App;
