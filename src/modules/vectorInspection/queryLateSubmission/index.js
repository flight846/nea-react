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
import { filterLateSubmissionAction, getLateSubmissionListAction } from './action';
const searchData = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Task ID',
    value: 'taskId',
  },
  {
    label: 'Location',
    value: 'location',
  },
];

const dateSelectData = [
  {
    label: 'Expected Date',
    value: 'expected',
  },
  {
    label: 'Submitted Date',
    value: 'submitted',
  },
];

const columns = [
  {
    Header: 'RO',
    accessor: 'ro',
    width: 100,
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
    Header: 'Report Type',
    accessor: 'reportType',
  },
  {
    Header: 'Report File Name',
    accessor: 'reportFileName',
  },
  {
    Header: 'Expected Date',
    accessor: 'expectedDate',
  },
  {
    Header: 'Actual Date',
    accessor: 'actualDate',
  },

  {
    Header: 'No. of days of delay',
    accessor: 'location',
  },
  {
    Header: 'Show Cause Status',
    accessor: 'causeStatus',
  },
];

const filterData = [
  {
    type: FilterType.SELECT,
    id: 'regions',
    title: 'RO',
    values: ['Central', 'Eastern', 'Western'],
  },
  {
    type: FilterType.SELECT,
    id: 'reportType',
    title: 'Report Type',
    values: ['Daily Report', 'Feedback Report'],
  },
  {
    type: FilterType.SELECT,
    id: 'showCauseStatus',
    title: 'Show Cause Status',
    values: [
      'No lapses',
      "Pending TL's recommendation",
      'No SC; Pending Manager approval',
      'No SC; Manager approved',
      "Pending contractor's explanation",
      'Contractor replied; Pending Manager approval',
      'Contractor replied; Manager approved',
      'Contractor replied; SM approved',
    ],
  },
];

class QueryLateSubmission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchType: 'all',
      datePickerValue: null,
      filterValue: null,
      sortValue: {
        id: 'ro',
        label: 'RO',
        desc: false,
      },
    };

    this.filterTaskList = debounce(this.filterTaskList, 500);
  }

  componentDidMount() {
    const { getLateSubmissionListAction } = this.props;
    getLateSubmissionListAction().then(() => {
      if (this.filterRef) this.filterRef.onClear();
    });
  }

  filterTaskList = () => {
    const { filterLateSubmissionAction } = this.props;
    const { sortValue, searchType, searchText, datePickerValue, filterValue } = this.state;
    filterLateSubmissionAction({
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
    console.log('TCL: ÷ -> datePickerValue', datePickerValue);

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
    console.log('TCL: ÷ -> sortValue', sortValue);
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
    console.log('TCL: ÷ -> data', data);
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
          <NavBar active={'Query Late Submission'} />
          <div className="contentWrapper">
            <div className="main-title">
              <h1>Query Late Submission</h1>
            </div>
            <div className="navbar navbar-expand filterMainWrapper">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <SearchBox
                  name="barcode" // TODO: change it
                  placeholder="Search by report file name"
                  onChangeText={this.onChangeSearchText}
                  searchTypes={[]}
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

const mapStateToProps = ({ global, vectorInspectionReducers: { queryLateSubmission } }, ownProps) => ({
  ...ownProps,
  ...queryLateSubmission,
  fontSize: global.ui.fontSize,
});

const mapDispatchToProps = {
  getLateSubmissionListAction,
  filterLateSubmissionAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(QueryLateSubmission));
