import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../Navigation/Index";

import { withAuthentication } from "../../Session";

import Login from './Login';
import Register from './Register';
import HomePage from "./Home";
import ReadingPage from "./Reading";
import Manga from "./Detail";
import GenrePage from "./Genre";
import SearchPage from "./Search";

const App = () => (
    <Router>
        <Navbar />
        {/* <Route exact path={ROUTES.LANDING} component={LandingPage} /> */}
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/manga/:path" component={Manga} />
            <Route exact path="/chapter/:title" component={ReadingPage} />
            <Route exact path="/genre/:genre" component={GenrePage} />
            <Route exact path="/search/:key" component={SearchPage} />

            <Route component={notFound} />
        </Switch>
    </Router>
)

const notFound = () => (
    <h1>Page not Found</h1>
)

export default withAuthentication(App);