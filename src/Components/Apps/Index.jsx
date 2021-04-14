import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../Navigation/Index";

import LoginPage from './Login/index';

const App = () => (
    <Router>
        <div>
            <Navbar />
            <hr />
            {/* <Route exact path={ROUTES.LANDING} component={LandingPage} /> */}
            <Route exact path="/login" component={LoginPage} />
        </div>
    </Router>
)

export default App;