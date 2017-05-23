import React, { Component } from 'react'
import { compose, flattenProp } from 'recompose'
// const { connect } = ReactRedux();

const mapStateToProps = ( state ) => ({ user: state.user });
const enhance = compose(
  // connect(mapStateToProps),
  flattenProp( 'user' )
)

const User = ({ name, status }) =>
  <div className="User">{ name }-{ status }</div>


export default class FlattenProps extends Component {
    render() {
      return (
        <User name='lev' status='active'></User>
      )
    }
}

function ReactRedux() {
  return {
    // connect:  () => BaseComponent => props =>
    //   <BaseComponent
    //       {...props}
    //       dispatch={ ({ type }) => console.log( type + ' dispatched') }
    //     />
  }
}
