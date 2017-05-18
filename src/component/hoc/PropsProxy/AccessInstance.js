import SayHello from './SayHello.js'
import { accessInstance } from '../hoc-pp.js'


// 通过 accessInstance 封装组件，返回一个新的组件 经过 accessInstance处理过了
const AccessInstance = accessInstance()( SayHello );
export default AccessInstance;
