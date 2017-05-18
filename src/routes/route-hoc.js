import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router';


const routeHoc = (
    <Router>
      <Route path="/pp" getComponent={(nextState, callback) => {
          require.ensure([], require => {
              callback(null, require('../containers/PropsProxy').default)
          }, 'propsproxy')
      }}/>

      <Route path="/ii" getComponent={(nextState, callback) => {
          require.ensure([], require => {
              callback(null, require('../containers/InheritanceInversion').default)
          }, 'inheritanceinversion')
      }}/>
  </Router>
);

export default routeHoc;
