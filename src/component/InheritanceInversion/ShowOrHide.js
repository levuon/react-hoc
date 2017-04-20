import React, { Component } from 'react'


export default class ShowOrHide extends Component {
  constructor ( props ) {
    super( props );
    this.state = {
      msg: 'What do you want for me!!'
    }
  }

  render () {
    return (
     <span style = {{ display: 'block' }} >
                  {this.state.msg}
             </span>
    )
  }
}
