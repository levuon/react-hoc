import React, {Component} from 'react'
import {getDisplayName} from '../util/index.js'

/**
 *  Props Poxy
 */
//
const addProps = (args) => EnhanceCom => class AddCom extends Component {
    static displayName = `HOC(${getDisplayName(EnhanceCom)})`

    constructor(props) {
      super();
    }

    render() {
      const newProps = {
        doing: 'now add props'
      }
      return (
        <div>
          <h4>1: 添加属性</h4>
          <EnhanceCom name = {args} {...newProps} {...this.props}/>
        </div>

      )
    }
}

// 删除属性
const minusProps = args => EnhanceCom => class MinusCom extends Component {
  constructor(props) {
    super();
  }
  render(){
    const {who, ...rest} = this.props;
    return (
      <div>
          <h4>2: 删除属性</h4>
          <EnhanceCom name = {args} {...rest}/>
      </div>

    )
  }
}

//通过 refs 访问组件实例， 可以读取,添加封装组件的属性和调用实例的方法
const accessInstance = args => EnhanceCom => class AccessInstanceComponent extends Component {
    constructor(props) {
      super();
    }
    process(EnhanceComInstance) {
        // 可以获取封装组件的实例，并能调用里面的方法
        EnhanceComInstance.show();
    }
    render() {
      //当封装的组件渲染完后, ref对应的回调函数会立即执行
      const props = Object.assign({}, this.props, {ref: this.process.bind(this)})
      return (
        <div>
            <h4>3: 通过 refs 访问组件实例，</h4>
            <EnhanceCom  {...props}/>
        </div>

      )
    }
}

// 可以控制input
const stateAbstract = args => EnhanceCom => class StateAbstractCom extends Component {
    constructor(props) {
      super();
      this.state = {
        name: ""
      }
      this.onNameChange = this.onNameChange.bind(this)
    }

    onNameChange(event) {
      this.setState({
        name: event.target.value
      })
    }

    render() {
      const newProps = {
        // input 输入的值可以通过 stateAbstract的value获取。
        stateAbstract: {
          value: this.state.name,
          onChange: this.onNameChange
        }
      }
      return (
          <div>
              <h4>4: 可以控制input</h4>
              <EnhanceCom {...this.props} {...newProps}/>
          </div>
      )
  }
}

// 封装组件到常用的样式里
const wrapComponent = args => EnhanceCom => class WrapComponent extends Component {
  constructor(props){
    super();
  }

  render() {
      return (
          <div style = {{width:'300px', height:'100px', backgroundColor:'rgb(173,24,33)'}}>
                <h4>5: 用样式包装</h4>
                <EnhanceCom />
          </div>

      )
  }
}



export {
  addProps,
  minusProps,
  accessInstance,
  stateAbstract,
  wrapComponent
}
