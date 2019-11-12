import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from 'components/ui/header';
import NavBar from 'components/layout/navbar';
import Footer from 'components/ui/footer';
import DataTable from 'components/common/data-table';
import InPageLoading from 'components/common/inPageLoading';
import { connect } from 'react-redux';
import { sampleMyWorkspaceSearch, sampleMyWorkspaceFilter } from './action';

class MyWorkspace extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { sampleMyWorkspaceSearchAction } = this.props;
    sampleMyWorkspaceSearchAction();
  }

  getTrProps = (state, rowInfo) => {
    if (rowInfo) {
      if (rowInfo.row._original.isUrgentCase) {
        return { className: 'bg-danger' };
      }
      if (rowInfo.row._original.isPrioritized) {
        return { className: 'bg-warning' };
      }
    }
    return {};
  };

  navigateToDetail = barcodeId => {
    const { history } = this.props;
    history.push(`/sample-identification/detail?barcodeId=${barcodeId}`);
  };

  render() {
    const {
      ui: { isLoading },
      data: { filteredTaskList },
      fontSize,
    } = this.props;

    const columns = [
      {
        Header: 'Breeding Detection',
        accessor: 'breedingDectionDate',
        headerClassName: 'header-right',
      },
      {
        Header: 'Received at',
        accessor: 'receivedDate',
      },
      {
        Header: 'RO',
        accessor: 'regionOfficeCode',
        width: 200,
      },
      {
        Header: 'Officer Name',
        accessor: 'officerName',
      },
      {
        Header: 'Barcode ID',
        accessor: 'barcodeId',
        Cell: cellInfo => (
          <a href="#" className="text-blue" onClick={() => this.navigateToDetail(cellInfo.row.barcodeId)}>
            {cellInfo.row.barcodeId}
          </a>
        ),
      },
      {
        Header: 'Status',
        accessor: 'sampleStatus',
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
                <DataTable data={filteredTaskList} columns={columns} getTrProps={this.getTrProps} />
              </div>
            </div>
            <InPageLoading isLoading={isLoading} />
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ global, myWorkspaceReducers: { ehiAnalyst } }, ownProps) => ({
  ...ownProps,
  ...ehiAnalyst,
  fontSize: global.ui.fontSize,
});

const mapDispatchToProps = {
  sampleMyWorkspaceSearchAction: sampleMyWorkspaceSearch,
  sampleMyWorkspaceFilterAction: sampleMyWorkspaceFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(MyWorkspace));
