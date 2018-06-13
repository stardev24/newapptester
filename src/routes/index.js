import React from 'react'
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import GMListView from "../components/GM_post_list"
import LandingPage from "../components/landingpage"
import PostDetailsPage from "../components/postDetailsPage"
import App from '../App';
export default () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
		    <Route exact path="/view/user" component={LandingPage} />
		    <Route exact path="/auth/gm" component={GMListView} />
		    <Route exact path="/detail/suggestion/:id" component={PostDetailsPage} />
	    </Switch>
    </BrowserRouter>
);