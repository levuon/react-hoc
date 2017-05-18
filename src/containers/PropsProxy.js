import React, { Component } from 'react'
import AddProps from '../component/hoc/PropsProxy/AddProps.js'
import MinusProps from '../component/hoc/PropsProxy/MinusProps.js'
import AccessInstance from '../component/hoc/PropsProxy/AccessInstance.js'
import StateAbstract from '../component/hoc/PropsProxy/StateAbstract.js'
import WrapComponent from '../component/hoc/PropsProxy/WrapComponent.js'



export default class PropsProxy extends Component {
  render () {
    return (
       <div>
         <h1>Props Poxy</h1>
         <AddProps who = {'beauty'} />
         <MinusProps who = {'beauty'} />
         <AccessInstance></AccessInstance>
         <StateAbstract />
         <WrapComponent></WrapComponent>
       </div>
    )
  }
}
