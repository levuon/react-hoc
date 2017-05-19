import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router';


const fromScratch = (
    <Router>
      <Route path="/fromScratch" getComponent={(nextState, callback) => {
          require.ensure([], require => {
                callback(null, require('../containers/Hoc/HocFromScratch').default)
          }, 'scratch')
      }}/>
{/* 
    <Route path="/state2Fun" getComponent={(nextState, callback) => {
          require.ensure([], require => {
              callback(null, require('../containers/Hoc/AddStateTOFunction').default)
          }, 'state2Fun')
      }}/> */}
  </Router>
);

export default fromScratch;
