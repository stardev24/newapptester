import React from 'react'
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import SuggestionsList from "../components/suggestions_listview"
import LandingPage from "../components/landingpage"
import App from '../App';
export default () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
		    <Route exact path="/view/user" component={LandingPage} />
		    <Route exact path="/auth/gm" component={SuggestionsList} />
	    </Switch>
    </BrowserRouter>
);