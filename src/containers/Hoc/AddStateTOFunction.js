import React, {Component} from 'react'
import {compose, withState, withHandlers} from 'recompose'
import './app.scss'

const withToggle = compose(
  withState('toggleOn', 'toggle', false),
  withState('number', 'add', 0),
  withHandlers({
    show: ({toggle}) => (e) => (toggle(true), console.log('show')),
    hide: ({toggle}) => (e) => toggle(false),
    toggle: ({toggle}) => (e) => toggle(current => !current),
    increase: ({ add }) => (e) => add(current => ++current)
}));

const StatusList = () =>
<div className="StatusList">
    <div>pending</div>
    <div>inactive</div>
    <div>active</div>
</div>;

const Status = withToggle(({status, toggleOn, toggle}) =>
<span onClick={toggle}>
    {status}
    {toggleOn && <StatusList/>}
</span>);

const Tooltip = withToggle(({text, children, toggleOn, number, show, hide, increase}) => <span>
    {!toggleOn && <div className="Tooltip" onClick={increase}>{text + number}</div>}
    <span >{children}</span>
</span>);

const AddStateTOFunction = ({name, status}) =>
<div className="user" >
    <Tooltip text='Cool dude!'>{name}</Tooltip>--
    <Status status={status}/>
</div>

export default AddStateTOFunction
