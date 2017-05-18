import SayHello from './SayHello.js'
import { minusProps } from '../hoc-pp.js'

const MinusProps = minusProps( 'lev' )( SayHello )

export default MinusProps;
