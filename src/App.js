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
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
