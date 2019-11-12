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
import { filterAuditTaskAction, getAuditTaskListAction } from './action';
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
    label: 'Inspected as at',
    value: 'inspected',
  },
  {
    label: 'Audited as at',
    value: 'audited',
  },
];

const columns = [
  {
    Header: 'Task Type',
    accessor: 'taskType',
  },
  {
    Header: 'Task ID',
    accessor: 'taskId',
  },
  {
    Header: 'Inspection Date',
    accessor: 'inspectionDate',
  },
  {
    Header: 'Audit Date',
    accessor: 'auditDate',
  },
  {
    Header: 'RO',
    accessor: 'ro',
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
    Header: 'Location',
    accessor: 'location',
  },
  {
    Header: 'Action Taken by Contractor',
    accessor: 'contractorAction',
  },
  {
    Header: 'Audit Status',
    accessor: 'auditStatus',
  },
  {
    Header: 'Burrow Count Discrepancies',
    accessor: 'burrowCount',
  },
  {
    Header: "Contractor's Reply Date ",
    accessor: 'contractorReplyDate',
  },
  {
    Header: 'Show Cause Status',
    accessor: 'causeStatus',
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
    type: FilterType.SELECT,
    id: 'taskType',
    title: 'Task Type',
    values: [
      'Base - TC',
      'Base - NTC',
      'Base - Vacant',
      'Optional - CRC',
      'Optional - Bin Chute',
      'Optional - Bin Centre',
      'Feedback',
    ],
  },
  {
    type: FilterType.SELECT,
    id: 'showCauseStatus',
    title: 'Show Cause Status',
    values: ['Pending SC decision', 'Pending explanation', 'Explanation received', 'SC; closed'],
  },
  {
    type: FilterType.SELECT,
    id: 'auditStatus',
    title: 'Audit Status',
    values: ['Created', 'Rejected', 'Completed', 'Expired'],
  },
];

class QueryAuditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchType: 'all',
      datePickerValue: null,
      filterValue: null,
      sortValue: {
        id: 'inspectionDate',
        label: 'Inspection Date',
        desc: false,
      },
    };

    this.filterTaskList = debounce(this.filterTaskList, 500);
  }

  componentDidMount() {
    const { getAuditTaskListAction } = this.props;
    getAuditTaskListAction().then(() => {
      if (this.filterRef) this.filterRef.onClear();
    });
  }

  filterTaskList = () => {
    const { filterAuditTaskAction } = this.props;
    const { sortValue, searchType, searchText, datePickerValue, filterValue } = this.state;
    filterAuditTaskAction({
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
          <NavBar active={'Query Audit Task'} />
          <div className="contentWrapper">
            <div className="main-title">
              <h1>Query Audit Tasks</h1>
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

const mapStateToProps = ({ global, vectorInspectionReducers: { queryAuditTask } }, ownProps) => ({
  ...ownProps,
  ...queryAuditTask,
  fontSize: global.ui.fontSize,
});

const mapDispatchToProps = {
  getAuditTaskListAction,
  filterAuditTaskAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(QueryAuditTask));
