import React, { Component } from 'react';
import {
  Link,
  Switch,
  Route
} from 'react-router-dom'
import './App.css';
import Catalog from '../../components/Catalog/Catalog';
import Checkout from '../../components/Checkout/Checkout';
import Confirmation from '../../components/Confirmation/Confirmation'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          Nav Bar
        </header>
        <Switch>
          <Route exact path='/' render ={() => <Catalog/>} />
          <Route path='/checkout' render={() => <Checkout /> }/>
          <Route path='/confirmation' render={() => <Confirmation /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
