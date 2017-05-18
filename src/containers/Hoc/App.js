import React, {Component} from 'react'
import './app.scss'


const hoc = (overrideProps) => (BaseComponent) => props =>
  <BaseComponent {...props} {...overrideProps}/>

const User = ({ name }) =>
  <div className='user'>{name}</div>


const alwaysLev = hoc({ name: 'lev' })
const Users = alwaysLev(User);

export default class App extends Component {
  render() {
    return (
      <div>
        <User name='Tim'></User>
        <Users name='Tod'></Users>
      </div>
    )
  }
}
