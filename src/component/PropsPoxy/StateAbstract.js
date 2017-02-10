import SayHello from './SayHello.js'
import {stateAbstract} from '../hoc-pp.js'

const StateAbstract = stateAbstract()(SayHello)

export default StateAbstract;
