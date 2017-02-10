import React, {Component} from 'react'

/**
 *   Inheritance Inversion
 *   继承反转， 即高级组件 控制 封装组件的是否渲染
 */

// 注意1: showCom 不是继承的React的Component 而是继承 封装的组件 ｀EnhanceCom｀
// 继承了EnhanceComponent， 可以读取 EnhanceComponent的 state,props, component lifecycle hook(组件生命周期勾子), render 方法
// component lifecycle hook(组件生命周期勾子) 是react里的详细内容.
// 我们可以通过 II 为EnhanceComponent创建一个新的组件的生命周期 调用方法 super.[lifecycleHook] 这样不会破坏EnhanceComponent
const showCom  = args => EnhanceCom => class ShowCom extends EnhanceCom {
    render() {
      return (
        <div>
            <h4>1: access to the state, props, component lifecycle hooks and the render method.</h4>
            {super.render()}
        </div>
      )
    }
}



//注意2: Inheritance Inversion High Order Components don’t have a guaranty of having the full children tree resolved.
// 渲染劫持 Render Highjacking . Inheritance Inversion 的高阶组件不一定会解析完整子树
// 1: 渲染劫持 可以 增删查改 任意将被渲染的React.Element 的props
// 2: 渲染劫持 可以 读取，修改 React.Element tree的 Children
// 3: 根据条件不同，选择性的渲染子树
// 4: 给子树里的元素变更样式
const conditionShow = args => EnhanceCom => class ConditionCom extends EnhanceCom {
    render() {
      let elements = [];
      if(this.props.show) {
        elements.push(<h4 key={0}>2: 根据条件不同，选择性的渲染子树 </h4>)
        elements.push(<div key={1}>
                            <span style={{color:'rgb(217,25,65)'}}>
                              show:
                            </span>
                            {super.render()}
                      </div>);
      } else {
        elements.push(<div key={0}>
                            <span style={{color:'rgb(217,25,65)'}}>
                              hide:
                            </span>
                            <div>
                              nothing!
                            </div>
                      </div>)
      }

      return (
        <div>
            {elements}
        </div>
      )
    }
}

const modifyChildrenTree = args => EnhanceCom => class ModifyChildrenTree extends EnhanceCom {
    render() {
        const elementsTree = super.render();
        let newProps = {};
        //你可以在这里做各种各样的事，你可以遍历整个元素树，然后修改元素树中任何元素的 props
        if (elementsTree && elementsTree.type === 'span') {
          newProps = {children: 'may the force be with you'}
        }
        const props = Object.assign({}, elementsTree.props, newProps)
        // const newElementsTree = React.cloneElement(elementsTree, props,  elementsTree.props.children)
        const newElementsTree = React.cloneElement(elementsTree, props)
        return (
            <div>
              <h4>3: Modify output tree</h4>
              <div>
                <span>before:</span>
                {elementsTree}
              </div>
              <div>
                <span>after:</span>
                {newElementsTree}
              </div>
            </div>
        )
    }
}



// 操作state Manipulating state
// HOC 可以读取、编辑和删除 WrappedComponent 实例的 state，如果你需要，你也可以给它添加更多的 state。
// 记住，这会搞乱 WrappedComponent 的 state，导致你可能会破坏某些东西。要限制 HOC 读取或添加 state，
// 添加 state 时应该放在单独的命名空间里，而不是和 WrappedComponent 的 state 混在一起。
const manipulateStateAndProps =  args => EnhanceCom => class ManipulateStateAndProps extends EnhanceCom {
    render() {
      return (
        <div>
          <h4>4: Manipulating state</h4>
          <p>Props</p> <pre>{JSON.stringify(this.props, null, 2)}</pre>
          <p>State</p><pre>{JSON.stringify(this.state, null, 2)}</pre>
          {super.render()}
        </div>
      )
    }
}



 export {
  showCom,
  conditionShow,
  modifyChildrenTree,
  manipulateStateAndProps
 }
