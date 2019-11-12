import React, { Component, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Header from 'components/ui/header';
import NavBar from 'components/layout/navbar';
import Footer from 'components/ui/footer';
import DataTable from 'components/common/data-table';
import InPageLoading from 'components/common/inPageLoading';
import { connect } from 'react-redux';
import { getMyWorkspaceAction } from './action';

const mockData = [
  {
    collectedDateTime: '01/01/2019 03:30PM',
    regionOfficeCode: 'CRO',
    address: 'Blk 300, Ang Mo Kio Street 10, #10-10, S123456',
    form3Id: '0149898',
    form3Status: 'Pending LOI',
    managerName: '',
    rejectionReason: '',
  },
  {
    collectedDateTime: '01/01/2019 03:30PM',
    regionOfficeCode: ' CRO',
    address: 'Blk 300, Ang Mo Kio Street 10, #11-10, S123456',
    form3Id: '0149899',
    form3Status: 'LOI Rejected',
    managerName: 'Anthony Smith',
    rejectionReason: 'View Reason',
  },
];

const MyWorkspace = ({ fontSize, getMyWorkspaceAction, ui: { isLoading }, data: { workspaceList } }) => {
  useEffect(() => {
    // getMyWorkspaceAction();
  }, []);

  const columns = [
    {
      Header: 'Date and Time Collected',
      accessor: 'collectedDateTime',
    },
    {
      Header: 'RO',
      accessor: 'regionOfficeCode',
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
      Cell: cellInfo => (
        <a href="#" className="text-blue" onClick={() => {}}>
          {cellInfo.row.form3Id}
        </a>
      ),
    },
    {
      Header: 'Form 3 Status',
      accessor: 'form3Status',
    },
    {
      Header: 'Manager Name',
      accessor: 'managerName',
    },
    {
      Header: 'Reason for Rejection',
      accessor: 'rejectionReason',
      Cell: cellInfo => (
        <a href="#" className="text-blue" onClick={() => {}}>
          {cellInfo.row.rejectionReason}
        </a>
      ),
    },
  ];

  return (
    <>
      <Header />
      <div className="main-content workspace__main">
        <NavBar active="My Workspace" />
        <div className="contentWrapper">
          <div className="main-title">
            <h1>My Workspace</h1>
          </div>
          <div className="paddingBottom50 tabsContainer">
            <div style={{ fontSize: `${fontSize}px` }}>
              <DataTable data={mockData} columns={columns} title={'Form 3 pending actions'} />
            </div>
          </div>
          <InPageLoading isLoading={isLoading} />
          <Footer />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ global, myWorkspaceReducers: { rcuTeamLeader } }, ownProps) => ({
  ...ownProps,
  ...rcuTeamLeader,
  fontSize: global.ui.fontSize,
});

const mapDispatchToProps = { getMyWorkspaceAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(MyWorkspace));
