import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from 'components/ui/header';
import TabNav from 'components/ui/tabnav';
import NavBar from 'components/layout/navbar';
import Footer from 'components/ui/footer';
import Sort from 'components/common/sort';
import SearchBox from 'components/common/searchBox';
import BreadCrumb from 'components/ui/breadcrumb';
import InPageLoading from 'components/common/inPageLoading';
import { connect } from 'react-redux';
import DataTable from 'components/common/data-table';
import { debounce } from 'lodash';
import {
  sampleTaskSearch,
  sampleTaskFilter,
  claimSampleAction,
  resetClaimTaskReducer,
  defaultFilterValue,
} from './action';

import './style.scss';

class ClaimTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...defaultFilterValue,
      barcodeId: '',
      activeTabNav: '0',
    };

    this.filterTaskList = debounce(this.filterTaskList, 500);
  }

  componentDidMount() {
    const { sampleTaskSearchAction } = this.props;
    sampleTaskSearchAction();
  }

  filterTaskList = () => {
    const { sampleTaskFilterAction } = this.props;
    const { sortValue, selectedRegion } = this.state;
    sampleTaskFilterAction({ sortValue, selectedRegion });
  };

  onSubmitBarcode = event => {
    event.preventDefault();
    const { barcodeId } = this.state;
    const { claimSampleAction } = this.props;

    if (barcodeId && barcodeId.trim()) {
      claimSampleAction({ barcodeId: barcodeId.trim() }).then(() => {
        // TODO: need to get Sample Id in order to push to detail
        this.navigateToDetail(barcodeId);
      });
    }
  };

  onChangeSort = sortValue => {
    this.setState(
      {
        sortValue,
      },
      () => {
        this.filterTaskList();
      },
    );
  };

  onSelectRegion = selectedRegion => {
    this.setState({ selectedRegion }, () => {
      this.filterTaskList();
    });
  };

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
    const { resetClaimTaskReducerAction, history } = this.props;
    resetClaimTaskReducerAction();
    this.setState({
      barcodeId: '',
    });
    history.push(`/sample-identification/detail?barcodeId=${barcodeId}`);
  };

  toggleTabNav = tab => {
    let selectedRegion = '';
    switch (tab) {
      case '1':
        selectedRegion = 'CRO';
        break;
      case '2':
        selectedRegion = 'ERO';
        break;
      case '3':
        selectedRegion = 'WRO';
        break;
      default:
        selectedRegion = '';
        break;
    }
    this.setState({ selectedRegion, activeTabNav: tab }, () => {
      this.filterTaskList();
    });
  };

  render() {
    const { sortValue, barcodeId, activeTabNav } = this.state;
    const {
      ui: { isLoading },
      data: { filteredTaskList, taskList },
      fontSize,
    } = this.props;

    const allCount = taskList.length;
    const centralCount = taskList.filter(item => item.regionOfficeCode === 'CRO').length;
    const eastCount = taskList.filter(item => item.regionOfficeCode === 'ERO').length;
    const westCount = taskList.filter(item => item.regionOfficeCode === 'WRO').length;
    const tabNavMenu = [`All (${allCount})`, `CRO (${centralCount})`, `ERO (${eastCount})`, `WRO (${westCount})`];

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
    ];

    return (
      <>
        <Header />
        <div className="main-content workspace__main" style={{ fontSize: `${fontSize}px` }}>
          <NavBar active="Claim Task" />
          <div className="contentWrapper">
            <BreadCrumb page="Claim Task" parent="Sample Management" />
            <div className="main-title">
              <h1>Claim Task</h1>
            </div>
            <nav className="tab__main">
              <div className="tabsContainer">
                <TabNav onToggleTab={this.toggleTabNav} activeTab={activeTabNav} menu={tabNavMenu} />
              </div>
            </nav>
            <div className="navbar navbar-expand filterMainWrapper">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <SearchBox
                  autoFocus
                  name="barcode"
                  placeholder="Please scan or enter Barcode ID"
                  value={barcodeId}
                  onSubmit={this.onSubmitBarcode}
                  onChangeText={text => this.setState({ barcodeId: text })}
                />
                <Sort
                  className="navbar-nav sortWrapper ml-auto"
                  data={columns}
                  value={sortValue}
                  desc={sortValue.desc}
                  onChange={this.onChangeSort}
                />
              </div>
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

const mapStateToProps = ({ global, sampleIdentificationReducers: { claimTask } }, ownProps) => ({
  ...ownProps,
  ...claimTask,
  fontSize: global.ui.fontSize,
});

const mapDispatchToProps = {
  sampleTaskSearchAction: sampleTaskSearch,
  sampleTaskFilterAction: sampleTaskFilter,
  claimSampleAction,
  resetClaimTaskReducerAction: resetClaimTaskReducer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ClaimTask));
