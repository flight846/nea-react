import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from 'components/ui/header';
import NavBar from 'components/layout/navbar';
import TabNav from 'components/ui/tabnav';
import Footer from 'components/ui/footer';
import DataTable from 'components/common/data-table';
import InPageLoading from 'components/common/inPageLoading';
import {
  getInspectionRequestListAction,
  getInspectionForm3ListAction,
  getRodentExpiredTaskListAction,
  getRodentShowCauseListAction,
  getFoggingExpiredTaskListAction,
  getFoggingRecommendationListAction,
} from './action';

const sectionRequestColumn = [
  {
    Header: 'Submitted as at',
    accessor: 'submittedDateTime',
  },
  {
    Header: 'Approving Head',
    accessor: 'something',
  },
  {
    Header: 'Section',
    accessor: 'section',
  },
  {
    Header: 'Address of owner/occupier',
    accessor: 'address',
  },
  {
    Header: 'No. of units',
    accessor: 'something',
  },
  {
    Header: 'Premises inspection date',
    accessor: 'breedingDetectionDateTime',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
];

const form3PendingColumn = [
  {
    Header: 'Date and Time Collected',
    accessor: 'something',
  },
  {
    Header: 'RO',
    accessor: 'regionOfficeCode',
  },
  {
    Header: 'Address',
    accessor: 'address',
  },
  {
    Header: 'Form 3 ID',
    accessor: 'form3Id',
  },
  {
    Header: 'Form 3 Status',
    accessor: 'status',
  },
  {
    Header: 'Manager Name',
    accessor: 'managerName',
  },
  {
    Header: 'Reason for rejection',
    accessor: 'something',
  },
];

const rodentAuditExpiredTaskColumns = [
  {
    Header: 'Task Type',
    accessor: 'taskType',
  },
  {
    Header: 'Task ID',
    accessor: 'taskId',
  },
  {
    Header: 'Proposed Audit Date',
    accessor: 'proposedDate',
  },
  {
    Header: 'Division',
    accessor: 'division',
  },
  {
    Header: 'Location',
    accessor: 'location',
  },
  {
    Header: 'Postal Code',
    accessor: 'postalCode',
  },
];

const rodentAuditRecommendShowCause = [
  {
    Header: 'Task Type',
    accessor: 'taskType',
  },
  {
    Header: 'Task ID',
    accessor: 'taskId',
  },
  {
    Header: 'Location',
    accessor: 'location',
  },
  {
    Header: 'Postal Code',
    accessor: 'postalCode',
  },
  {
    Header: 'Type of Lapse',
    accessor: 'lapseType',
  },
];

const foggingAuditExpiredTaskColumns = [
  {
    Header: 'Company Name',
    accessor: 'companyName',
  },
  {
    Header: 'Fogging Date',
    accessor: 'foggingDate',
  },
  {
    Header: 'Fogging Period',
    accessor: 'foggingPeriod',
  },
  {
    Header: 'Address',
    accessor: 'address',
  },
  {
    Header: 'Land Use Type',
    accessor: 'landType',
  },
  {
    Header: 'Purpose of Fogging',
    accessor: 'foggingPurpose',
  },
  {
    Header: 'Assign to',
    accessor: 'assignTo',
  },
  {
    Header: 'Audit Task Status',
    accessor: 'auditTaskStatus',
  },
];

const foggingAuditRecommendationForEnforcement = [
  {
    Header: 'Inspection ID',
    accessor: 'inspectionId',
  },
  {
    Header: 'RO',
    accessor: 'ro',
  },
  {
    Header: 'Division',
    accessor: 'division',
  },
  {
    Header: 'Address',
    accessor: 'address',
  },
  {
    Header: 'Fogging Date',
    accessor: 'foggingDate',
  },
  {
    Header: 'Fogging Period',
    accessor: 'foggingPeriod',
  },
  {
    Header: 'Audit Date',
    accessor: 'auditDate',
  },
  {
    Header: 'Audit Time',
    accessor: 'auditTime',
  },
  {
    Header: 'Auditor Name',
    accessor: 'auditorName',
  },
  {
    Header: 'Non-compliant',
    accessor: 'nonCompliant',
  },
];

const MyWorkspace = ({
  ui: { isLoading },
  data: { requests, forms, rodentTasks, rodentShowCause, foggingTasks, foggingRecommendations },
  fontSize,
  getInspectionRequestListAction,
  getInspectionForm3ListAction,
  getRodentExpiredTaskListAction,
  getRodentShowCauseListAction,
  getFoggingExpiredTaskListAction,
  getFoggingRecommendationListAction,
}) => {
  const tabNavMenu = ['Inspection Management', 'Rodent Audit', 'Fogging Audit'];

  const [activeTabNav, toggleTabNav] = useState('0');

  useEffect(() => {
    console.log('====================================');
    console.log('something');
    console.log('====================================');
    getInspectionRequestListAction();
    getInspectionForm3ListAction();
    getRodentExpiredTaskListAction();
    getRodentShowCauseListAction();
    getFoggingExpiredTaskListAction();
    getFoggingRecommendationListAction();
  }, []);

  const renderMainContent = () => {
    switch (activeTabNav) {
      case '0':
        return (
          <>
            <DataTable
              data={requests}
              columns={sectionRequestColumn}
              title="Request for S35/S35R/S36"
              pageSizeHidden
              pageSize={3}
            />
            <DataTable
              data={forms}
              columns={form3PendingColumn}
              title="Form 3 pending actions"
              pageSizeHidden
              pageSize={3}
            />
          </>
        );
      case '1':
        return (
          <>
            <DataTable
              data={rodentTasks}
              columns={rodentAuditExpiredTaskColumns}
              title="Expired Tasks - Pending Explanation"
              pageSizeHidden
              pageSize={3}
            />
            <DataTable
              data={rodentShowCause}
              columns={rodentAuditRecommendShowCause}
              title="Recommend Show Cause"
              pageSizeHidden
              pageSize={3}
            />
          </>
        );
      case '2':
        return (
          <>
            <DataTable
              data={foggingTasks}
              columns={foggingAuditExpiredTaskColumns}
              title="Expired Tasks - Pending Explanation"
              pageSizeHidden
              pageSize={3}
            />
            <DataTable
              data={foggingRecommendations}
              columns={foggingAuditRecommendationForEnforcement}
              title="Recommendation for Enforcement"
              pageSizeHidden
              pageSize={3}
            />
          </>
        );
      default:
        break;
    }
  };

  return (
    <>
      <Header />
      <div className="main-content workspace__main">
        <NavBar active="My Workspace" />
        <div className="contentWrapper">
          <div className="main-title">
            <h1>My Workspace</h1>
          </div>
          <nav className="tab__main">
            <div className="tabsContainer">
              <TabNav onToggleTab={toggleTabNav} activeTab={activeTabNav} menu={tabNavMenu} />
            </div>
          </nav>
          <div className="paddingBottom50 tabsContainer">
            <div style={{ fontSize: `${fontSize}px` }}>{renderMainContent()}</div>
          </div>
          <InPageLoading isLoading={isLoading} />
          <Footer />
        </div>
      </div>
    </>
  );
};

// export default MyWorkspace;

const mapStateToProps = ({ global, myWorkspaceReducers: { roTeamLeader } }, ownProps) => ({
  ...ownProps,
  ...roTeamLeader,
  fontSize: global.ui.fontSize,
});

const mapDispatchToProps = {
  getInspectionRequestListAction,
  getInspectionForm3ListAction,
  getRodentExpiredTaskListAction,
  getRodentShowCauseListAction,
  getFoggingExpiredTaskListAction,
  getFoggingRecommendationListAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyWorkspace);
