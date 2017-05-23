import React, { Component } from 'react'
import { compose, mapProps } from 'recompose'

const User = ({ name, status }) =>
    <div className="User">{ name }-{ status }</div>;

const UserList = ({ users, status }) =>
<div className="UserList">
    <h3> { status } users</h3>
    {users && users.map( ( user, index ) => <User key={ index }  { ...user } />)}
</div>;

const users = [
    {
        name: 'chen',
        status: 'active'
    }, {
        name: 'wang',
        status: 'pending'
    }, {
        name: 'lev',
        status: 'active'
    }, {
        name: 'ke',
        status: 'inactive'
    }
];

const filterByStatus = ( status ) => mapProps(
  ({ users }) => ({
    status,
    users: users.filter( u => u.status === status )
  })
)

const ActiveUsers = filterByStatus( 'active' )( UserList );
const InactiveUsers = filterByStatus( 'inactive' )( UserList );
const PendingUsers = filterByStatus( 'pending' )( UserList );

const AppV1 = () =>
  <div className="App">
    <ActiveUsers users={ users }/>
    <InactiveUsers users={ users }/>
    <PendingUsers users={ users }/>
  </div>


export default class TransformProps extends Component {
    render() {
        return (
          <div>
              <AppV1></AppV1>
              <App></App>
          </div>

        )
    }
}

const App = () =>
<div className="App">
    <h3>active users</h3>
    <UserList users={users.filter(u => u.status === 'active')}></UserList>
    <h3>inactive users</h3>
    <UserList users={users.filter(u => u.status === 'inactive')}></UserList>
    <h3>pending users</h3>
    <UserList users={users.filter(u => u.status === 'pending')}></UserList>
</div>;
// normal way
