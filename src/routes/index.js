import React from "react";
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import routeHoc from './route-hoc'
const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={require('../containers/Container').default}>
            {/* <IndexRoute getComponent={(nextState, callback) => {
                require.ensure([], require => {
                    callback(null, require('./containers/Container').default)
                }, 'app')
            }}/> */}
            { routeHoc }
        </Route>
    </Router>
);

export default routes;
