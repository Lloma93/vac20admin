import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login'
import Home from './pages/Home'
import TalkToUsHelper from './pages/TalkToUsHelper'
// import ListApprove from './pages/ListApprove'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/help" component={TalkToUsHelper} />
                {/* <Route path="/list" component={ListApprove} /> */}
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;