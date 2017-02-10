import React, {Component} from 'react'


// 定义一个组件
export default class SayHello extends Component {
    constructor(props){
      super(props);
      this.state = {
        number: 1
      }
    }


    show() {
       console.log('you got me!');
       this.setState({number: 0})
    }

    render() {
      return (
          <div>
            <span></span>
            { this.props.who && this.props.doing ?
              <span>A <strong> {this.props.who} </strong>say hello to you , {this.state.number} times,
                {this.props.name}! {this.props.doing}
              </span> :
              <span>no one say hello to you, {this.state.number} times,
                {this.props.name}!
              </span>
            }
            {
              this.props.stateAbstract &&
              <span>
                <input name = "name" {...this.props.stateAbstract}/>
                <span>{this.props.stateAbstract.value}</span>
              </span>
            }


          </div>

      )
    }
}
