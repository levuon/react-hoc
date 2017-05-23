import React, {Component} from 'react'
import MutilHocRecompose from './MutilHocRecompose'
import AddStateTOFunction from './AddStateTOFunction'
import LifeCycleHook from './LifeCycleHook'
import TransformProps from './TransformProps'
import LockProps from './LockProps'
import FlattenProps from './FlattenProps'
import LoadingComponentSpinner from './LoadingComponentSpinner'
import './app.scss'

const hoc = (overrideProps) => (BaseComponent) => props => <BaseComponent {...props} {...overrideProps}/>

const User = ({name}) => <div className='user'>{name}</div>

const alwaysLev = hoc({name: 'lev'})
const Users = alwaysLev(User);

export default class HocFromScratch extends Component {
    render() {
        return (
            <div>
                {/* <User name='Tim'></User> */}
                {/* <Users name='Tod'></Users> */}
                {/* <MutilHocRecompose name='lev' status='active' /> */}
                {/* <AddStateTOFunction name='lev' status='active' /> */}
                {/* <LifeCycleHook name='Tim' status='active'/> */}
                {/* <TransformProps></TransformProps> */}
                {/* <LockProps></LockProps> */}
                {/* <FlattenProps></FlattenProps> */}
                <LoadingComponentSpinner />
            </div>
        )
    }
}
