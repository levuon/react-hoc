import React, {Component} from 'react'

import ShowCom from '../component/hoc/InheritanceInversion/ShowCom.js'
import ConditionShow from '../component/hoc/InheritanceInversion/ConditionShow.js'
import ModifyChildrenTree from '../component/hoc/InheritanceInversion/ModifyChildrenTree.js'
import ManipulateStateAndProps from '../component/hoc/InheritanceInversion/Manipulate.js'
// import ConditionShow from '../component/InheritanceInversion/ConditionShow.js'



export default class InheritanceInversion extends Component {

  render () {
    return (
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
    )
  }
}
