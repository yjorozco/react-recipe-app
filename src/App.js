import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recipes from './pages/Recipes';
import Home from './pages/Home';
import Default from './pages/Default';
import SingleRecipe from './pages/SingleRecipe';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
export default class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipes" exact component={Recipes} />
            <Route path="/recipes/:id" exact component={SingleRecipe} />
            {/*<Route path="/single-recipe" component={SingleRecipe} />*/}
            <Route component={Default} />
          </Switch>
        </main>
      </Router>
    )
  }
}
