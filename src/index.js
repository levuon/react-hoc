// import 'babel-polyfill'
// import React from 'react';
// import { render } from 'react-dom';
//
//
//
//
// render(
//  <App />,
//  document.getElementById( 'root' )
// );


import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, match, browserHistory } from 'react-router'
// import { Provider } from 'react-redux'
import routes from './routes'
// import configureStore from './store/configureStore'

// const store = configureStore()

match( { history: browserHistory, routes }, ( error, redirectLocation, renderProps ) => {
  render(
  //  <Provider store = {store} >
     <Router {...renderProps}/>,
  //  </Provider>,
   document.getElementById( 'root' )
  )
} )
