import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Login from './Login/Login.jsx';
import Score from './Agree/Agree.jsx';

const Routes = () => (
    <Switch>
        Here
        <Route path="/" component={Login} exact />
        <Route path="/:appId" component={Login} exact />
        <Route path="/agree/:appId" component={Score} exact />
    </Switch>
);

export default Routes;
