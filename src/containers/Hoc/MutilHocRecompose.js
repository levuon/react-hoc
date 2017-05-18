
import React, { Component } from 'react'
import { compose, setDisplayName, setPropTypes } from 'recompose'
import './app.scss'

const { connect } = Redux();

const enhance = compose(
  setDisplayName('User'),
  setPropTypes({
    name: React.PropTypes.string.isRequired,
    status: React.PropTypes.string
  }),
  connect()
)

const MultiHocRecompose = enhance(({ name, status }) =>
   <div className='user'>
      { name }: { status }
   </div>
)

function Redux() {
  return {
    connect: () => BaseComponent => props =>
      <BaseComponent
          {...props}
          dispatch={ ({ type }) => console.log( type + ' dispatched') }
        />
  }
}

export default MultiHocRecompose
