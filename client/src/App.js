import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import MainNav from './Components/MainNav';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNav />
        <Home />
      </header>

    </div>

  );
}

export default App;
