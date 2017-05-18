import SayHello from './SayHello.js'
import { addProps } from '../hoc-pp.js'

// 通过 addProps处理 新增属性到SayHello组件中，并返回新的包含新增属性的组件
const AddProps = addProps( 'lev' )( SayHello );

export default AddProps;
