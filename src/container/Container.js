import React, { Component } from 'react'
import AddProps from '../component/PropsPoxy/AddProps.js'
import MinusProps from '../component/PropsPoxy/MinusProps.js'
import AccessInstance from '../component/PropsPoxy/AccessInstance.js'
import StateAbstract from '../component/PropsPoxy/StateAbstract.js'
import WrapComponent from '../component/PropsPoxy/WrapComponent.js'

import ShowCom from '../component/InheritanceInversion/ShowCom.js'
import ConditionShow from '../component/InheritanceInversion/ConditionShow.js'
import ModifyChildrenTree from '../component/InheritanceInversion/ModifyChildrenTree.js'
import ManipulateStateAndProps from '../component/InheritanceInversion/Manipulate.js'
// import ConditionShow from '../component/InheritanceInversion/ConditionShow.js'


export default class Container extends Component {

  render () {
    return (
     <div>
       <div>
         <h1>Props Poxy</h1>
         <AddProps who = {'beauty'} />
         <MinusProps who = {'beauty'} />
         <AccessInstance></AccessInstance>
         <StateAbstract />
         <WrapComponent></WrapComponent>
       </div>
       <div style = {{ paddingTop: '30px' }} >
         <h1>Inheritance Inversion</h1>
         <ShowCom saySomething = {false} ></ShowCom>
         <span>
                  <ConditionShow show = {true} />
              </span>
         <span>
                  <ConditionShow show = {false} />
              </span>
         <ModifyChildrenTree />
         <ManipulateStateAndProps></ManipulateStateAndProps>
       </div>
     </div>

    )
  }
}
