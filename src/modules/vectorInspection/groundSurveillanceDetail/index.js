import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import Header from 'components/ui/header';
import NavBar from 'components/layout/navbar';
import Footer from 'components/ui/footer';
import InPageLoading from 'components/common/inPageLoading';
import BreadCrumb from 'components/ui/breadcrumb';
import { connect } from 'react-redux';
import DataTable from 'components/common/data-table';
import { getGroundSurveillanceDetailAction } from './action';

class GroundSurveillanceDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rccId: '',
    };
  }

  componentDidMount() {
    const {
      getGroundSurveillanceDetailAction,
      location: { search },
    } = this.props;
    const { rccId } = queryString.parse(search);
    if (rccId) {
      getGroundSurveillanceDetailAction({ rccId });
      this.setState({
        rccId,
      });
    }
  }

  getTrProps = (state, rowInfo) => {
    if (rowInfo && rowInfo.row) {
      const {
        _original: { targetFlag },
      } = rowInfo.row;
      if (targetFlag !== null && targetFlag !== undefined) {
        if (targetFlag) return { className: 'bg-success' };
        return { className: 'bg-danger' };
      }
    }
    return {};
  };

  handleBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { rccId } = this.state;
    const {
      ui: { isLoading },
      data: { clusters },
      fontSize,
    } = this.props;

    const columns = [
      {
        Header: 'Date of Inspection',
        Cell: cellInfo =>
          `${cellInfo.row._original.startDateOfInspection} to ${cellInfo.row._original.endDateOfInspection}`,
      },
      {
        Header: 'Actual no. of Burrows Detected',
        accessor: 'actualNoOfBurrows',
      },
      {
        Header: 'Target no. of burrows',
        accessor: 'targetNoOfBurrows',
      },
    ];
    return (
      <>
        <Header />
        <div className="main-content workspace__main">
          <NavBar active="Ground Surveillance for RCC" />
          <div className="contentWrapper">
            <BreadCrumb page="Ground Surveillance for RCC" parent="Inspection Management" />
            <div className="paddingBottom50">
              <div className="go-back">
                <a href="#" onClick={this.handleBack}>
                  RCCID: {rccId}
                </a>
              </div>
              <div className="tabsContainer" style={{ fontSize: `${fontSize}px` }}>
                <DataTable data={clusters} columns={columns} getTrProps={this.getTrProps} />
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

const mapStateToProps = ({ global, vectorInspectionReducers: { groundSurveillanceDetail } }, ownProps) => ({
  ...ownProps,
  ...groundSurveillanceDetail,
  fontSize: global.ui.fontSize,
});

const mapDispatchToProps = {
  getGroundSurveillanceDetailAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(GroundSurveillanceDetail));
