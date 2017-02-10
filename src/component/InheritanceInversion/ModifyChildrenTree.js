import ShowOrHide from './ShowOrHide.js'

import {
  modifyChildrenTree
} from '../hoc-ii.js'

const ModifyChildrenTree = modifyChildrenTree()(ShowOrHide);

export default ModifyChildrenTree
