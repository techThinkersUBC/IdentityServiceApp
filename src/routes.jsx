import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import { default as Login } from './Login/LoginContainer.jsx';
import { default as Agree }from './Agree/AgreeContainer.jsx';

const Routes = () => (
    <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/agree" component={Agree} exact />
    </Switch>
);

export default Routes;
