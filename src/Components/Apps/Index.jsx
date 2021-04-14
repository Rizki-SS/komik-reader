import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../Navigation/Index";

import Login from './Login';
import Register from './Register';

const App = () => (
    <Router>
        <div>
            <Navbar />
            <hr />
            {/* <Route exact path={ROUTES.LANDING} component={LandingPage} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/category/:cat" component={Register} />
            <Route exact path="/manga/:path" component={Register} />
        </div>
    </Router>
)

export default App;