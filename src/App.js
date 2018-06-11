import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SuggestionsList from './components/suggestions_listview'
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
