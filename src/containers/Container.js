import React, { Component } from 'react'
import NavLink from '../component/NavLink.js'

export default class Container extends Component {

  render () {
    const links = [
      { pathName: 'pp', name: '属性代理'},
      { pathName: 'ii', name: '继承反转'},
      { pathName: 'fromScratch', name: 'mutil-hoc'},
    ]

    return (
     <div>

         { links.map((link,index) =>
           <div key ={index} style={{ 'display': 'inline-block', margin:'5px'}}>
             <NavLink to={{pathname: link.pathName }}>
                {link.name}
             </NavLink>
           </div>
         )}
         {this.props.children}
     </div>
    )
  }
}
