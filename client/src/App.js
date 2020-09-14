import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import MainNav from './Components/MainNav';
import Home from './Components/Home';
import Contact from './Components/Contact';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/Home"]}>
          <Home />
          </Route>
        <Route exact path="/Contact">
        <Contact />
        </Route>
        </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
