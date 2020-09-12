import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import {Home} from './pages/Home'
import {Login} from './pages/Login'
import { ToyApp } from './pages/Toy/ToyApp'
import {ToyDetails} from './pages/Toy/ToyDetails'
import { ToyEdit} from './pages/Toy/ToyEdit'
import {ToyBars} from './cmps/ToyBars'
import { Header } from './cmps/Header';
import {About} from './pages/About'
import { ToyReviews } from './pages/Toy/ToyReviews';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route component={ ToyEdit } path='/toy/edit/:toyId?' />
        <Route component = { ToyReviews} path ='/toy/review/:toyId'/>
        <Route component={ ToyDetails } path='/toy/:toyId' />
        <Route component={ About } path='/about/:userId?' />
        <Route component ={ ToyBars} path ='/toy/bar'/>
        <Route component={ ToyApp } path='/toy' />
        <Route component = { Login} path ='/login'/>
        <Route component= {Home} path ='/'/>
      </Switch>
    </div>
  );
}

export default App;
