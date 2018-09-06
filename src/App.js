import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/layout/Header'
import Home from './components/pages/Home'
import AddContact from './components/contact/AddContact';
import EditContact from './components/contact/EditContact'
import Contacts from './components/contact/Contacts';
import About from './components/pages/About'
import NotFound from './components/pages/404'

import { Provider } from 'react-redux'
import store from './store'

import './stylesheets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
        <Header brand='Redux App'></Header>
        <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/contact/add' component={AddContact}></Route>
        <Route exact path='/contact/contacts' component={Contacts}></Route>
        <Route exact path='/contact/about' component={About}></Route>
        <Route exact path='/contact/editContact' component={EditContact}></Route>
        <Route component={NotFound}></Route>
        </Switch>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
