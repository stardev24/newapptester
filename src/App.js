import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import LandingPage from "./components/landingpage"

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar />
        <LandingPage />
      </div>
    );
  }
}

export default App;
