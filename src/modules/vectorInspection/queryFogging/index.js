import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { storeData } from 'utils';

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
import { filterQueryFoggingAction, getFoggingListAction } from './action';
const searchData = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Inspection ID',
    value: 'inspectionId',
  },
  {
    label: 'Address',
    value: 'address',
  },
  {
    label: 'Auditor Name',
    value: 'auditorName',
  },
];

const dateSelectData = [
  {
    label: 'Inspection Date',
    value: 'inspectionDate',
  },
];

const columns = [
  {
    Header: 'Inspection ID',
    accessor: 'inspectionId',
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
    Header: 'Audit Task Status',
    accessor: 'auditTaskStatus',
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
    Header: 'Enforcement Status',
    accessor: 'enforcementStatus',
  },
  {
    Header: 'Non-compliant',
    accessor: 'nonCompliant',
  },
];

const filterData = [
  {
    type: FilterType.SEARCH,
    id: 'division',
    title: 'Division',
    values: ['Ang Mo Kio', 'Aljunied'],
  },
  {
    type: FilterType.SEARCH,
    id: 'auditorNames',
    title: 'Auditor Name',
    values: ['Ages', 'Albert'],
  },
  {
    type: FilterType.SELECT,
    id: 'auditStatus',
    title: 'Audit Task Status',
    values: [
      'Not created',
      'Created',
      'Rejected',
      'Completed',
      'Expired',
      'Expired; Pending Approval',
      'Expired; Closed',
    ],
  },
];

class QueryFogging extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchType: 'all',
      datePickerValue: null,
      filterValue: null,
      sortValue: {
        id: 'foggingDate',
        label: 'Fogging Date',
        desc: false,
      },
    };

    this.filterTaskList = debounce(this.filterTaskList, 500);
  }

  componentDidMount() {
    const { getFoggingListAction } = this.props;
    getFoggingListAction().then(() => {
      if (this.filterRef) this.filterRef.onClear();
    });
  }

  filterTaskList = () => {
    const { filterQueryFoggingAction } = this.props;
    const { sortValue, searchType, searchText, datePickerValue, filterValue } = this.state;
    filterQueryFoggingAction({
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

  onChangeDatePicker = datePickerValue => {
    console.log('TCL: QueryRodentInspection -> datePickerValue', datePickerValue);

    this.setState(
      {
        datePickerValue,
      },
      () => {
        this.filterTaskList();
      },
    );
  };

  onChangeSort = sortValue => {
    console.log('TCL: QueryRodentInspection -> sortValue', sortValue);
    this.setState(
      {
        sortValue,
      },
      () => {
        this.filterTaskList();
      },
    );
  };

  onChangeFilter = data => {
    console.log('TCL: QueryRodentInspection -> data', data);
    this.setState(
      {
        filterValue: data,
      },
      () => {
        this.filterTaskList();
      },
    );
  };

  render() {
    const { searchText, sortValue } = this.state;
    const {
      fontSize,
      ui: { isLoading },
    } = this.props;
    return (
      <Fragment>
        <Header />
        <div className="main-content workspace__main">
          <NavBar active={'Query Fogging'} />
          <div className="contentWrapper">
            <div className="main-title">
              <h1>Query Fogging</h1>
            </div>
            <div className="navbar navbar-expand filterMainWrapper">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <SearchBox
                  name="barcode" // TODO: change it
                  placeholder="Search by keyword"
                  onChangeText={this.onChangeSearchText}
                  searchTypes={searchData}
                  value={searchText}
                  onChangeSearchType={this.onChangeSearchType}
                />
                <DateRangePickerSelect
                  className="navbar-nav filterWrapper ml-auto"
                  onChange={this.onChangeDatePicker}
                  // selectData={[]}
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
            <div className="tabsContainer" style={{ fontSize: `${fontSize}px` }}>
              <DataTable data={[]} columns={columns} />
            </div>
            <InPageLoading isLoading={isLoading} />
            <Footer />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ global, vectorInspectionReducers: { queryFogging } }, ownProps) => ({
  ...ownProps,
  ...queryFogging,
  fontSize: global.ui.fontSize,
});

const mapDispatchToProps = {
  getFoggingListAction,
  filterQueryFoggingAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(QueryFogging));
