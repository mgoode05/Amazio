import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom'
import './App.css';
import Catalog from '../../components/Catalog/Catalog';
import Checkout from '../../components/Checkout/Checkout';
import Confirmation from '../../components/Confirmation/Confirmation';
import NavBar from '../../components/NavBar/NavBar';

class App extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }

  addItem=(props) =>{
    console.log(this)
    fetch('/products', {
      method: 'POST',
      headers: {'content-Type': 'application/json'},
      body: JSON.stringify({ product: this})
    })
    console.log('added item')
  }

  componentDidMount() {
    fetch('/products').then(res => res.json())
    .then(products => {
      this.setState({products})
    })
  }

  render() {
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route exact path='/' render ={() => <Catalog products={this.state.products} addItem={this.addItem}/>} />
          <Route path='/checkout' render={() => <Checkout /> }/>
          <Route path='/confirmation' render={() => <Confirmation /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
