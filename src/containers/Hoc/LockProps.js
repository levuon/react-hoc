import React, { Component } from 'react'
import { withProps } from 'recompose'


const HomeLink = withProps( ({ query }) => ({ href: '#/?query=' + query }) )('a');
const ProductLink = withProps({ href: '#/products' })('a');
const CheckOutLink = withProps({ href: '#/checkout' })('a');

const App = () =>
  <div className="App">
    <header>
      <HomeLink query="logo">Logo</HomeLink>
    </header>
    <nav>
      <HomeLink query="home">Home</HomeLink>
      <ProductLink>Products</ProductLink>
      <CheckOutLink>CheckOut</CheckOutLink>
    </nav>
  </div>


export default class LockProps extends Component {

  render() {
    return (
      <App />
    )
  }
}
