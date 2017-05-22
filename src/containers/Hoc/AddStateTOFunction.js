import React, {Component} from 'react'
import {compose, withState, withReducer, withHandlers} from 'recompose'
import './app.scss'

const withToggle = compose(
  withState('toggleOn', 'toggle', false),
  withState('number', 'add', 0),
  withHandlers({
    show: ({toggle}) => (e) => (toggle(true), console.log('show')),
    hide: ({toggle}) => (e) => toggle(false),
    toggle: ({toggle}) => (e) => toggle(current => !current)
}));

const withToggleReducer = compose(
  withReducer('toggleOn', 'dispatch', ( state, action ) => {
      switch(action.type) {
          case 'SHOW':
            return true;
          case 'HIDE':
            return false;
          case 'TOGGLE':
            return !state;
          default:
            return state;
      }
  }, false),
  withState('number', 'add', 0),
  withHandlers({
    show: ({dispatch}) => (e) => (dispatch({ type: 'SHOW'}), console.log('show')),
    hide: ({dispatch}) => (e) => dispatch({ type: 'HIDE'}),
    toggle: ({dispatch}) => (e) => dispatch({ type: 'TOGGLE'})
}));


const StatusList = () =>
<div className="StatusList">
    <div>pending</div>
    <div>inactive</div>
    <div>active</div>
</div>;

const Status = withToggleReducer(({status, toggleOn, toggle}) =>
<span onClick={toggle}>
    {status}
    {toggleOn && <StatusList/>}
</span>);

const Tooltip = withToggleReducer(({
  text, children, toggleOn, number, show, hide }) => <span>
    {!toggleOn && <div className="Tooltip" >{ text }</div>}
    <span onMouseEnter={show} onMouseLeave={hide} >{children}</span>
</span>);

const AddStateTOFunction = ({name, status}) =>
<div className="user" >
    <Tooltip text='Cool dude!'>{name}</Tooltip>--
    <Status status={status}/>
</div>

export default AddStateTOFunction
