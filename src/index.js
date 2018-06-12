import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/store'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {SuggestionsList} from "./components/suggestions_listview"
import {LandingPage} from "./components/landingpage"

ReactDOM.render(
  <Provider store={store}>
	  <Router>
	    	<App />
	  </Router>
  </Provider>,
	document.getElementById('root'));
registerServiceWorker();
