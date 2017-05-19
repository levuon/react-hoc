
import React, { Component } from 'react'
import { compose, setDisplayName, setPropTypes } from 'recompose'
import './app.scss'

const { connect } = Redux();

const enhance = compose(
  setDisplayName('MultiHocRecompose'),
  setPropTypes({
    name: React.PropTypes.string.isRequired,
    status: React.PropTypes.string
  }),
  connect()
)

const MultiHocRecompose = enhance(({ name, status, dispatch }) =>
   <div className='user' onClick= {
       () => dispatch({type: "USER_SELECTED"})
     }>
      { name }: { status }
   </div>
)

console.log(MultiHocRecompose.displayName);

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
