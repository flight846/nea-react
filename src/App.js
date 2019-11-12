import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import PrivateRoute from 'components/common/PrivateRoute';
import Blocked from 'pages/blocked';
import NotFound from 'pages/404';
import FlashScreen from 'pages/flashscreen';
import Ui from 'pages/ui';
import TaskDetail from 'pages/taskdetail';
import MyWorkspace from 'pages/myworkspace';
import ClaimTask from 'pages/claimtask';
import DetailPage from 'pages/detail';
import NoticeOfEntry from 'modules/vectorInspection/notice-of-entry';
import BlockSummary from 'modules/vectorInspection/blockSummary';
import Login from 'pages/login';
import Dashboard from 'pages/dashboard';

// import DetailPage from 'pages/detail';

// Sample Identification
import SampleClaimTask from 'modules/sampleIdentification/claimTask';
import QuerySampleStatus from 'modules/sampleIdentification/querySampleStatus';
import QueryInspectionFormStatus from 'modules/sampleIdentification/queryInspectionFormStatus';
import SampleDetail from 'modules/sampleIdentification/formDetail';
import ReceiveSample from 'modules/sampleIdentification/receiveSample';

// Vector Inspection
import GroundSurveillanceDetail from 'modules/vectorInspection/groundSurveillanceDetail';
import GroundSurveillanceListing from 'modules/vectorInspection/groundSurveillance';
import VectorQueryInspectionFormStatus from 'modules/vectorInspection/queryInspectionFormStatus';
import VectorQueryInspectionFormDetail from 'modules/vectorInspection/queryInspectionFormDetail';
import DepositSendSamples from 'modules/vectorInspection/deposit-send-samples';
import OfficerSof from 'modules/vectorInspection/officerSof';
import InsertCallLetter from 'modules/vectorInspection/insertCallLetter';
import LatestInspection1 from 'modules/vectorInspection/latestInspection1';
import LatestInspection3 from 'modules/vectorInspection/latestInspection3';
import QueryRodentInspection from 'modules/vectorInspection/queryRodentInspection';
import QueryFogging from 'modules/vectorInspection/queryFogging';
import QueryAuditTask from 'modules/vectorInspection/queryAuditTask';
import TrackSampleStatus from 'modules/vectorInspection/trackSampleStatus';
import BlockChart from 'modules/vectorInspection/blockChart';
import QueryLateSubmission from 'modules/vectorInspection/queryLateSubmission';

const App = () => (
  <Router>
    <div className="app__main">
      <Switch>
        <Route exact path="/blocked" component={Blocked} />
        <Route exact path="/" component={FlashScreen} />
        <Route exact path="/ui" component={Ui} />
        <Route exact path="/task/:id" component={TaskDetail} />
        <Route exact path="/my-workspace" component={MyWorkspace} />
        <Route exact path="/claim-task" component={ClaimTask} />
        <Route exact path="/detail" component={DetailPage} />
        <Route exact path="/vector-inspection/notice-of-entry" component={NoticeOfEntry} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />

        {/* Sample Identification */}
        <Route exact path="/sample-identification/claim-task" component={SampleClaimTask} />
        <Route exact path="/sample-identification/query-sample-status" component={QuerySampleStatus} />
        <Route exact path="/sample-identification/query-inspection-form-status" component={QueryInspectionFormStatus} />
        <Route exact path="/sample-identification/detail" component={SampleDetail} />
        <Route exact path="/sample-identification/receive-sample" component={ReceiveSample} />

        {/* Vector Inspection */}

        <Route exact path="/vector-inspection/ground-surveillance-for-rcc" component={GroundSurveillanceListing} />
        <Route
          exact
          path="/vector-inspection/ground-surveillance-for-rcc/detail"
          component={GroundSurveillanceDetail}
        />
        <Route
          exact
          path="/vector-inspection/query-inspection-form-status"
          component={VectorQueryInspectionFormStatus}
        />
        <Route
          exact
          path="/vector-inspection/query-inspection-form-status/detail"
          component={VectorQueryInspectionFormDetail}
        />
        <Route exact path="/vector-inspection/deposit-send-samples" component={DepositSendSamples} />
        <Route exact path="/vector-inspection/officer-sof" component={OfficerSof} />
        <Route exact path="/vector-inspection/insert-call-letter" component={InsertCallLetter} />
        <Route exact path="/vector-inspection/latest-inspection1" component={LatestInspection1} />
        <Route exact path="/vector-inspection/latest-inspection3" component={LatestInspection3} />
        <Route exact path="/vector-inspection/query-rodent-inspection" component={QueryRodentInspection} />
        <Route exact path="/vector-inspection/query-fogging" component={QueryFogging} />
        <Route exact path="/vector-inspection/query-audit-task" component={QueryAuditTask} />
        <Route exact path="/vector-inspection/query-late-submission" component={QueryLateSubmission} />
        <Route exact path="/vector-inspection/block-summary" component={BlockSummary} />
        <Route exact path="/vector-inspection/blockchart" component={BlockChart} />
        <Route exact path="/vector-inspection/track-sample-status" component={TrackSampleStatus} />

        {/* Others */}
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
