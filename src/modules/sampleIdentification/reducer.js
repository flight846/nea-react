import { combineReducers } from 'redux';
import claimTask from './claimTask/reducer';
import querySampleStatus from './querySampleStatus/reducer';
import queryInspectionFormStatus from './queryInspectionFormStatus/reducer';
import formDetail from './formDetail/reducer';
import receiveSample from './receiveSample/reducer';

export default combineReducers({
  receiveSample,
  claimTask,
  querySampleStatus,
  queryInspectionFormStatus,
  formDetail,
});
