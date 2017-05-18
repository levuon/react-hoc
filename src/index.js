import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Router, match, browserHistory} from 'react-router'
import routes from './routes'

match({
    history: browserHistory,
    routes
}, (error, redirectLocation, renderProps) => {
    render(
        <Router {...renderProps}/>, document.getElementById('root'))
})
