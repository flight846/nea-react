/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-fragments */
import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';

import BreadCrumb from 'components/ui/breadcrumb';
import Header from 'components/ui/header';
import NavBar from 'components/layout/navbar';
import Footer from 'components/ui/footer';
import Sort from 'components/common/sort';
import SearchBox from 'components/common/searchBox';
import DataTable from 'components/common/data-table';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import DateRangePickerSelect from 'components/common/dateRangPickerSelect';
import Filter, { FilterType } from 'components/common/filter';
import InPageLoading from 'components/common/inPageLoading';
import { sampleQueryStatusSearch, sampleQueryStatusFilter, defaultFilterValue } from './action';

import './style.scss';

const searchData = [
  {
    label: 'Barcode ID',
    value: 'barcodeId',
  },
  {
    label: 'Officer Name',
    value: 'officerName',
  },
  {
    label: 'Lab Analyst Name',
    value: 'analystName',
  },
];

const dateSelectData = [
  {
    label: 'Breeding Detection',
    value: 'breedingDectionDate',
  },
  {
    label: 'Received by EHI',
    value: 'receivedDate',
  },
];

class QuerySampleStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...defaultFilterValue,
    };

    this.filterTaskList = debounce(this.filterTaskList, 500);
  }

  componentDidMount() {
    const { sampleQueryStatusSearchAction } = this.props;
    sampleQueryStatusSearchAction().then(() => {
      if (this.filterRef) this.filterRef.onClear();
    });
  }

  filterTaskList = () => {
    const { sampleQueryStatusFilterAction } = this.props;
    const { sortValue, searchType, searchText, datePickerValue, filterValue } = this.state;
    sampleQueryStatusFilterAction({
      sortValue,
      searchType,
      searchText,
      datePickerValue,
      filterValue,
    });
  };

  onChangeSearchType = event => {
    this.setState(
      {
        searchType: event.target.value,
      },
      () => {
        this.filterTaskList();
      },
    );
  };

  onChangeSearchText = text => {
    this.setState(
      {
        searchText: text,
      },
      () => {
        this.filterTaskList();
      },
    );
  };

  onChangeFilter = data => {
    this.setState(
      {
        filterValue: data,
      },
      () => {
        this.filterTaskList();
      },
    );
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

  onChangeDatePicker = datePickerValue => {
    this.setState(
      {
        datePickerValue,
      },
      () => {
        this.filterTaskList();
      },
    );
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
    const { history } = this.props;
    history.push(`/sample-identification/detail?barcodeId=${barcodeId}`);
  };

  render() {
    const { sortValue, searchText } = this.state;
    const {
      ui: { isLoading },
      data: { filteredTaskList, taskList },
      fontSize,
    } = this.props;
    const filterData = [
      {
        type: FilterType.SELECT,
        id: 'regions',
        title: 'RO',
        values: ['CRO', 'ERO', 'WRO'],
      },
      {
        type: FilterType.SEARCH,
        id: 'officerNames',
        title: 'Officer Name',
        values: Array.from(new Set(taskList.map(item => item.officerName).sort())),
      },
      {
        type: FilterType.SEARCH,
        id: 'labAnalystNames',
        title: 'Lab Analyst Name',
        values: Array.from(new Set(taskList.map(item => item.analystName).sort())),
      },
      {
        type: FilterType.SELECT,
        id: 'statuses',
        title: 'Status',
        values: ['Sending to EHI', 'Received by EHI', 'Pending Identification', 'Identified', 'Rejected'],
      },
    ];
    const columns = [
      {
        Header: 'Breeding Detection',
        accessor: 'breedingDectionDate',
      },
      {
        Header: 'Received by EHI',
        accessor: 'receivedDate',
      },
      {
        Header: 'RO',
        accessor: 'regionOfficeCode',
        width: 100,
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
        Header: 'Lab Analyst Name',
        accessor: 'analystName',
      },
      {
        Header: 'Status',
        accessor: 'sampleStatus',
      },
    ];
    return (
      <Fragment>
        <Header />
        <div className="main-content workspace__main">
          <NavBar active="Query Sample Status" />
          <div className="contentWrapper">
            <BreadCrumb page="Query Sample Status" parent="Sample Management" />
            <div className="main-title">
              <h1>Query Sample Status</h1>
            </div>
            <div className="navbar navbar-expand filterMainWrapper">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <SearchBox
                  name="barcode"
                  placeholder="Search for"
                  onChangeText={this.onChangeSearchText}
                  searchTypes={searchData}
                  value={searchText}
                  onChangeSearchType={this.onChangeSearchType}
                />
                <DateRangePickerSelect
                  className="navbar-nav filterWrapper ml-auto"
                  onChange={this.onChangeDatePicker}
                  selectData={dateSelectData}
                />
                <Filter
                  ref={ref => {
                    this.filterRef = ref;
                  }}
                  className="navbar-nav filterWrapper"
                  onChange={this.onChangeFilter}
                  data={filterData}
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
                <DataTable data={filteredTaskList} columns={columns} />
              </div>
            </div>
            <InPageLoading isLoading={isLoading} />
            <Footer />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ global, sampleIdentificationReducers: { querySampleStatus } }, ownProps) => ({
  ...ownProps,
  ...querySampleStatus,
  fontSize: global.ui.fontSize,
});

const mapDispatchToProps = {
  sampleQueryStatusSearchAction: sampleQueryStatusSearch,
  sampleQueryStatusFilterAction: sampleQueryStatusFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(QuerySampleStatus));
