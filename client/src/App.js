import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import MainNav from './Components/MainNav';
import Home from './Components/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <MainNav />
        <Home />
        </BrowserRouter>
     
      </header>

    </div>

  );
}

export default App;
