import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import Header from 'components/ui/header';
import NavBar from 'components/layout/navbar';
import Footer from 'components/ui/footer';
import DataTable from 'components/common/data-table';
import InPageLoading from 'components/common/inPageLoading';
import { connect } from 'react-redux';
import { getPendingSOFListingAction } from './action';

import './style.scss';

class OfficerWorkspace extends Component {
  componentDidMount() {
    const { getPendingSOFListingAction } = this.props;
    getPendingSOFListingAction();
  }

  navigateToDetail = inspectionId => {
    const { history } = this.props;
    history.push(`/vector-inspection/officer-sof?inspectionId=${inspectionId}`);
  };

  render() {
    const {
      ui: { isLoading },
      data: { inspections },
      fontSize,
    } = this.props;

    const columns = [
      {
        Header: 'Breeding Detection',
        accessor: 'breedingDetectionDateTime',
      },
      {
        Header: 'RO',
        accessor: 'regionOfficeCode',
        width: 200,
      },
      {
        Header: 'Address',
        accessor: 'address',
      },
      {
        Header: 'Inspection ID',
        accessor: 'inspectionId',
        Cell: cellInfo => (
          <a href="#" className="text-blue" onClick={() => this.navigateToDetail(cellInfo.row.inspectionId)}>
            {cellInfo.row.inspectionId}
          </a>
        ),
      },
    ];
    return (
      <>
        <Header />
        <div className="main-content workspace__main">
          <NavBar active="task" />
          <div className="contentWrapper">
            <div className="main-title">
              <h1>My Workspace</h1>
            </div>
            <div className="print-barcode--id filterMainWrapper">
              <div className="row">
                <div className="col-2 col-sm-3">
                  <span className="print--title">Print Barcode ID</span>
                </div>
                <div className="col-5 col-sm-9">
                  <div className="print--form-control">
                    <input type="text" className="form-control" placeholder="-Quantity-" />
                  </div>
                  <div className="print--button">
                    <a href="#" className="btn btn-pri">
                      Print
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tabsContainer" style={{ fontSize: `${fontSize}px` }}>
              <DataTable data={inspections} columns={columns} title="Pending SOF" />
            </div>
            <InPageLoading isLoading={isLoading} />
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ global, myWorkspaceReducers: { roOfficer } }, ownProps) => ({
  ...ownProps,
  ...roOfficer,
  fontSize: global.ui.fontSize,
});

const mapDispatchToProps = {
  getPendingSOFListingAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(OfficerWorkspace));
