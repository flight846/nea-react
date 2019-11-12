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
import DateRangePickerSelect from 'components/common/dateRangPickerSelect';
import Filter, { FilterType } from 'components/common/filter';
import { formQueryStatusSearch, formQueryStatusFilter, defaultFilterValue } from './action';

import './style.scss';

const filterData = [
  {
    type: FilterType.SELECT,
    id: 'regions',
    title: 'RO',
    values: ['CRO', 'ERO', 'WRO'],
  },
  {
    type: FilterType.SELECT,
    id: 'statuses',
    title: 'Status',
    values: ['Ready to submit', 'Submitted', 'Not Submitted'],
  },
];

const searchData = [
  {
    label: 'Inspection Form ID',
    value: 'inspectionId',
  },
  {
    label: 'Officer Name',
    value: 'officerName',
  },
  {
    label: 'Lab Analyst Name',
    value: 'labAnalystName',
  },
];

const dateSelectData = [
  {
    label: 'Date and Time Collected',
    value: 'breedingDetectionDateTime',
  },
  {
    label: 'Submitted as at',
    value: 'receivedDateTime',
  },
];

class QueryInspectionFormStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...defaultFilterValue,
    };

    this.filterTaskList = debounce(this.filterTaskList, 500);
  }

  componentDidMount() {
    const { formQueryStatusSearchAction } = this.props;
    formQueryStatusSearchAction();
  }

  filterTaskList = () => {
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

  navigateToDetail = inspectionId => {
    const { history } = this.props;
    history.push(`/sample-identification/detail?inspectionId=${inspectionId}`);
  };

  render() {
    const { sortValue, searchText } = this.state;
    const {
      ui: { isLoading },
      data: { filteredTaskList },
      fontSize,
    } = this.props;

    const columns = [
      {
        Header: 'Date and Time Collected',
        accessor: 'breedingDetectionDateTime',
        width: 250,
      },
      {
        Header: 'RO',
        accessor: 'regionOfficeCode',
        width: 100,
      },
      {
        Header: 'Officer Name',
        accessor: 'officerName',
        width: 250,
      },
      {
        Header: 'Inspection Form ID',
        accessor: 'inspectionId',
        Cell: cellInfo => (
          <a href="#" className="text-blue" onClick={() => this.navigateToDetail(cellInfo.row.inspectionId)}>
            {cellInfo.row.inspectionId}
          </a>
        ),
        width: 250,
      },
      {
        Header: 'Lab Analyst Name',
        accessor: 'labAnalystName',
        width: 250,
      },
      {
        Header: 'Status',
        accessor: 'inspectionFormStatus',
        width: 200,
      },
      {
        Header: 'Submitted as at',
        accessor: 'receivedDateTime',
        width: 200,
      },
    ];
    return (
      <>
        <Header />
        <div className="main-content workspace__main">
          <NavBar active="Query Inspection Form Status" />
          <div className="contentWrapper">
            <BreadCrumb page="Query Inspection Form Status" parent="Sample Management" />
            <div className="main-title">
              <h1>Query Inspection Form Status</h1>
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
                <Filter className="navbar-nav filterWrapper" onChange={this.onChangeFilter} data={filterData} />
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

const mapStateToProps = ({ global, sampleIdentificationReducers: { queryInspectionFormStatus } }, ownProps) => ({
  ...ownProps,
  ...queryInspectionFormStatus,
  fontSize: global.ui.fontSize,
});

const mapDispatchToProps = {
  formQueryStatusSearchAction: formQueryStatusSearch,
  formQueryStatusFilterAction: formQueryStatusFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(QueryInspectionFormStatus));
