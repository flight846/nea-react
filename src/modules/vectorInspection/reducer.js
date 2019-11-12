import { combineReducers } from 'redux';
import groundSurveillanceListing from './groundSurveillance/reducer';
import groundSurveillanceDetail from './groundSurveillanceDetail/reducer';
import queryInspectionFormStatus from './queryInspectionFormStatus/reducer';
import queryInspectionFormDetail from './queryInspectionFormDetail/reducer';
import depositSendSamples from './deposit-send-samples/reducer';
import officerSof from './officerSof/reducer';
import trackStatus from './trackSampleStatus/reducer';
import queryRodentInspection from './queryRodentInspection/reducer';
import queryFogging from './queryFogging/reducer';
import queryAuditTask from './queryAuditTask/reducer';
import queryLateSubmission from './queryLateSubmission/reducer';
import blockSummary from './blockSummary/reducer';

export default combineReducers({
  groundSurveillanceListing,
  groundSurveillanceDetail,
  queryInspectionFormStatus,
  queryInspectionFormDetail,
  depositSendSamples,
  officerSof,
  trackStatus,
  queryRodentInspection,
  queryFogging,
  queryAuditTask,
  queryLateSubmission,
  blockSummary,
});
