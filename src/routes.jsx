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
        <Route path="/" exact>
            <Login />
        </Route>
        <Route path="/:appId" exact>
            <Login />
        </Route>
        <Route path="/agree/:appId" exact>
            <Score />
        </Route>
    </Switch>
);

export default Routes;
