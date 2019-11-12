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
import { filterBlockSummaryAction, getBlockSummaryListAction } from './action';
const searchData = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Road Name',
    value: 'roadName',
  },
  {
    label: 'Postal Code',
    value: 'postalCode',
  },
];

const dateSelectData = [
  {
    label: 'Inspection Date From',
    value: 'inspectionDateFrom',
  },
  {
    label: 'Inspection Date To',
    value: 'inspectionDateTo',
  },
];

const columns = [
  {
    Header: 'Inspection Date From',
    accessor: 'inspectionDateFrom',
  },
  {
    Header: 'Inspection Date To',
    accessor: 'inspectionDateTo',
  },
  {
    Header: 'Road name',
    accessor: 'roadName',
  },
  {
    Header: 'Block',
    accessor: 'block',
  },
  {
    Header: 'Postal Code',
    accessor: 'postalCode',
  },
  {
    Header: 'Premise Type',
    accessor: 'premiseType',
  },
  {
    Header: 'RO',
    accessor: 'ro',
    width: 100,
  },

  {
    Header: 'Division',
    accessor: 'division',
  },
  {
    Header: 'Officer Name',
    accessor: 'officerName',
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
    type: FilterType.SEARCH,
    id: 'officerName',
    title: 'Officer Name',
    values: ['Agnes', 'Albert'],
  },
];

const fakeData = Array(100)
  .fill('temp')
  .map((_, index) => {
    const v = `Temp value: ${index}`;
    return {
      inspectionDateFrom: v,
      inspectionDateTo: v,
      roadName: v,
      block: v,
      postalCode: v,
      premiseType: v,
      ro: v,
      division: v,
      officerName: v,
    };
  });

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
    const { getBlockSummaryListAction } = this.props;
    getBlockSummaryListAction().then(() => {
      if (this.filterRef) this.filterRef.onClear();
    });
  }

  filterTaskList = () => {
    const { filterBlockSummaryAction } = this.props;
    const { sortValue, searchType, searchText, datePickerValue, filterValue } = this.state;
    filterBlockSummaryAction({
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

  getTrProps = (state, rowInfo, instance) => {
    return {
      onClick: debounce(() => this.onRowClick(rowInfo), 500),
    };
  };

  onRowClick = rowInfo => {
    console.log('TCL: QueryFogging -> onRowClick -> rowInfo', rowInfo);
    const path = '/vector-inspection/blockchart';
    this.props.history.push(path);
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
          <NavBar active={'Block Summary'} />
          <div className="contentWrapper">
            <div className="main-title">
              <h1>Block Summary</h1>
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
              <DataTable data={fakeData} columns={columns} getTrProps={this.getTrProps} />
            </div>
            <InPageLoading isLoading={isLoading} />
            <Footer />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ global, vectorInspectionReducers: { blockSummary } }, ownProps) => ({
  ...ownProps,
  ...blockSummary,
  fontSize: global.ui.fontSize,
});

const mapDispatchToProps = {
  getBlockSummaryListAction,
  filterBlockSummaryAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(QueryFogging));
