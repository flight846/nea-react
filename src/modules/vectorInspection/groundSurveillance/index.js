import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from 'components/ui/header';
import NavBar from 'components/layout/navbar';
import Footer from 'components/ui/footer';
import Sort from 'components/common/sort';
import SearchBox from 'components/common/searchBox';
import InPageLoading from 'components/common/inPageLoading';
import BreadCrumb from 'components/ui/breadcrumb';
import { connect } from 'react-redux';
import DataTable from 'components/common/data-table';
import { debounce } from 'lodash';
import {
  getGroundSurveillanceListingAction,
  groundSurveillanceListingFilterAction,
  defaultFilterValue,
} from './action';

class GroundSurveillanceListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...defaultFilterValue,
    };

    this.filterCluster = debounce(this.filterCluster, 500);
  }

  componentDidMount() {
    const { getGroundSurveillanceListingAction } = this.props;
    getGroundSurveillanceListingAction();
  }

  filterCluster = () => {
    const { formQueryStatusFilterAction } = this.props;
    const { sortValue, searchType, searchText, datePickerValue, filterValue } = this.state;
    formQueryStatusFilterAction({
      sortValue,
      searchType,
      searchText,
      datePickerValue,
      filterValue,
    });
  };

  onChangeSearchText = text => {
    this.setState(
      {
        searchText: text,
      },
      () => {
        this.filterCluster();
      },
    );
  };

  onChangeSort = sortValue => {
    this.setState(
      {
        sortValue,
      },
      () => {
        this.filterCluster();
      },
    );
  };

  navigateToDetail = rccId => {
    const { history } = this.props;
    history.push(`/vector-inspection/detail?rccId=${rccId}`);
  };

  getTrProps = (state, rowInfo) => {
    if (rowInfo && rowInfo.row) {
      return {
        onClick: () => {
          this.navigateToDetail(rowInfo.row.rccId);
        },
      };
    }
    return {};
  };

  render() {
    const { sortValue, searchText } = this.state;
    const {
      ui: { isLoading },
      data: { filteredClusters },
      fontSize,
    } = this.props;

    const columns = [
      {
        Header: 'RCC ID',
        accessor: 'rccId',
      },
      {
        Header: 'Verification by RCU',
        accessor: 'something',
      },
      {
        Header: '1st mth from date of verification',
        accessor: 'something',
      },
      {
        Header: '2nd mth from date of verification',
        Cell: cellInfo => (
          <a href="#" className="text-blue" onClick={() => this.navigateToDetail(cellInfo.row.rccId)}>
            {cellInfo.row.rccId}
          </a>
        ),
      },
      {
        Header: '3rd mth from date of verification',
        accessor: 'something',
      },
    ];
    return (
      <>
        <Header />
        <div className="main-content workspace__main">
          <NavBar active="Ground Surveillance for RCC" />
          <div className="contentWrapper">
            <BreadCrumb page="Ground Surveillance for RCC" parent="Inspection Management" />
            <div className="main-title">
              <h1>Ground Surveillance for RCC</h1>
            </div>
            <div className="navbar navbar-expand filterMainWrapper">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <SearchBox
                  name="barcode"
                  placeholder="Search by RCC ID"
                  onChangeText={this.onChangeSearchText}
                  value={searchText}
                />
                <Sort
                  className="navbar-nav sortWrapper"
                  data={columns}
                  value={sortValue}
                  desc={sortValue.desc}
                  onChange={this.onChangeSort}
                />
              </div>
            </div>
            <div className="paddingBottom50 tabsContainer">
              <div style={{ fontSize: `${fontSize}px` }}>
                <DataTable data={filteredClusters} columns={columns} getTrProps={this.getTrProps} />
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

const mapStateToProps = ({ global, vectorInspectionReducers: { groundSurveillanceListing } }, ownProps) => ({
  ...ownProps,
  ...groundSurveillanceListing,
  fontSize: global.ui.fontSize,
});

const mapDispatchToProps = {
  getGroundSurveillanceListingAction,
  groundSurveillanceListingFilterAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(GroundSurveillanceListing));
