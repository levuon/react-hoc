import ShowOrHide from './ShowOrHide.js'

import {
  conditionShow
} from '../hoc-ii.js'

const ConditionShow = conditionShow()(ShowOrHide);
export default ConditionShow;
