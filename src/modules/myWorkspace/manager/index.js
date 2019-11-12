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

const LOIPendingColumns = [
  {
    Header: 'Breeding Detection',
    accessor: 'breedingDetection',
  },
  {
    Header: 'RO',
    accessor: 'ro',
    width: 100,
  },
  {
    Header: 'Address',
    accessor: 'address',
  },
  {
    Header: 'Form 3 ID',
    accessor: 'form3Id',
    width: 150,
    // Cell: cellInfo => (
    //   <a href="#" className="text-blue" onClick={() => {}}>
    //     {cellInfo.row.form3Id}
    //   </a>
    // ),
  },
  {
    Header: 'Officer Name',
    accessor: 'officerName',
  },
  {
    Header: 'LOI Submitted as at',
    accessor: 'loiSubmitted',
  },
  {
    Header: 'Action',
    accessor: 'action',
    // Cell: cellInfo => (
    //   <div>
    //     <a href="#" className="text-blue" onClick={() => {}}>
    //       {cellInfo.row.rejectionReason}
    //     </a>
    //     <a href="#" className="text-blue" onClick={() => {}}>
    //       {cellInfo.row.rejectionReason}
    //     </a>
    //   </div>
    // ),
  },
];

const noEnforcementPendingColumns = [
  {
    Header: 'Breeding Detection',
    accessor: 'breedingDetection',
  },
  {
    Header: 'RO',
    accessor: 'ro',
    width: 100,
  },
  {
    Header: 'Address',
    accessor: 'address',
  },
  {
    Header: 'Form 3 ID',
    accessor: 'form3Id',
    width: 150,
    // Cell: cellInfo => (
    //   <a href="#" className="text-blue" onClick={() => {}}>
    //     {cellInfo.row.form3Id}
    //   </a>
    // ),
  },
  {
    Header: 'Action',
    accessor: 'action',

    // Cell: cellInfo => (
    //   <div>
    //     <a href="#" className="text-blue" onClick={() => {}}>
    //       {cellInfo.row.rejectionReason}
    //     </a>
    //     <a href="#" className="text-blue" onClick={() => {}}>
    //       {cellInfo.row.rejectionReason}
    //     </a>
    //   </div>
    // ),
  },
];

const rodentAuditExpiredTaskColumns = [
  {
    Header: 'Task ID',
    accessor: 'taskId',
  },
  {
    Header: 'Proposed Audit Date',
    accessor: 'proposedDate',
  },
  {
    Header: 'GRC',
    accessor: 'grc',
  },
  {
    Header: 'Division',
    accessor: 'division',
  },
  {
    Header: 'Zone',
    accessor: 'zone',
  },
  {
    Header: 'Audit Task Status',
    accessor: 'auditTaskStatus',
  },
  {
    Header: '',
    accessor: 'action',
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
    Header: 'Premise Type',
    accessor: 'premiseType',
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
  {
    Header: '',
    accessor: 'action',
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
    width: 100,
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
}) => {
  const tabNavMenu = ['Inspection Management', 'Rodent Audit', 'Fogging Audit'];

  const [activeTabNav, toggleTabNav] = useState('0');

  useEffect(() => {
    console.log('====================================');
    console.log('something in manager workspace');
    console.log('====================================');
  }, []);

  const renderMainContent = () => {
    switch (activeTabNav) {
      case '0':
        return (
          <>
            <DataTable data={[]} columns={LOIPendingColumns} title="LOI Pending Approval" pageSizeHidden pageSize={3} />
            <DataTable
              data={[]}
              columns={noEnforcementPendingColumns}
              title="Pending Approval for No Enforcement"
              pageSizeHidden
              pageSize={3}
            />
          </>
        );
      case '1':
        return (
          <>
            <DataTable
              data={[]}
              columns={rodentAuditExpiredTaskColumns}
              title="Expired Tasks - Explanation Pending Approval"
              pageSizeHidden
              pageSize={3}
            />
            <DataTable
              data={[]}
              columns={rodentAuditRecommendShowCause}
              title="Pending Show Cause Approval"
              pageSizeHidden
              pageSize={3}
            />
          </>
        );
      case '2':
        return (
          <>
            <DataTable
              data={[]}
              columns={foggingAuditExpiredTaskColumns}
              title="Expired Tasks - Explanation Pending Approval"
              pageSizeHidden
              pageSize={3}
            />
            <DataTable
              data={[]}
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
