import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router';


const fromScratch = (
    <Router>
      <Route path="/fromScratch" getComponent={(nextState, callback) => {
          require.ensure([], require => {
                callback(null, require('../containers/Hoc/HocFromScratch').default)
          }, 'scratch')
      }}/>

    {/* <Route path="/multiHoc" getComponent={(nextState, callback) => {
          require.ensure([], require => {
              callback(null, require('../containers/Hoc/MutilHocRecompose').default)
          }, 'multiHoc')
      }}/> */}
  </Router>
);

export default fromScratch;
