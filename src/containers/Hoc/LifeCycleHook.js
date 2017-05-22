import React, { Component } from 'react'
import {compose, lifecycle} from 'recompose'
import './app.scss'

const configPormise = fetchConfiguration();

const withConfig = lifecycle({
  getInitialState() {
    return {
      config: {
      }
    };
  },
  componentDidMount() {
    configPormise.then( config =>
      this.setState({ config }))
  }
})



const User = withConfig(({ name, status, config }) =>
  <div className="hook-user">
      { name }
      { config && config.showStatus && '-' + status }
      { config && config.canDeleteUsers && <button>X</button>}
  </div>
);

const config = {
  showStatus: true,
  canDeleteUsers: true
}

function fetchConfiguration() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(config)
    }, 300);
  });
}


export default User;
