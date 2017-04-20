import SayHello from './SayHello.js'
import { wrapComponent } from '../hoc-pp.js'

const WrapComponent = wrapComponent()( SayHello );
export default WrapComponent;
