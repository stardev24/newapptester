import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/store'
import Routes from "./routes"

ReactDOM.render(
  <Provider store={store}>
  	  < Routes />
  </Provider>,
	document.getElementById('root'));
registerServiceWorker();
