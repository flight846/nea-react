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
import { filterQueryRodentInspectionAction, getRodentInspectionListAction } from './action';
const searchData = [
  {
    label: 'Address of premise',
    value: 'addressOfPremise',
  },
  {
    label: 'Signs of infestation',
    value: 'signsOfInfestation',
  },
  {
    label: 'Breeding habitats',
    value: 'breedingHabitats',
  },
  {
    label: 'Preventive measures',
    value: 'preventiveMeasures',
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
    Header: 'RCC ID',
    accessor: 'rccId',
  },
  {
    Header: 'Inspection Date',
    accessor: 'inspectionDate',
  },
  {
    Header: 'Inspection Time',
    accessor: 'inspectionTime',
  },
  {
    Header: 'RO',
    accessor: 'regionOfficeCode',
    width: 100,
  },
  {
    Header: 'Division',
    accessor: 'division',
  },
  {
    Header: 'Address of premise',
    accessor: 'addressOfPremise',
  },
  {
    Header: 'Inspection Type',
    accessor: 'inspectionType',
  },
  {
    Header: 'Premise Type',
    accessor: 'premiseType',
  },
  {
    Header: 'Land Owner',
    accessor: 'landOwner',
  },
  {
    Header: 'Inspection Type',
    accessor: 'inspectionType',
  },
  {
    Header: 'TC Inspection Type',
    accessor: 'tcInspectionType',
  },
  {
    Header: 'Burrows',
    accessor: 'burrows',
  },
  {
    Header: 'Signs of Infestation',
    accessor: 'signsOfInfestation',
  },
  {
    Header: 'Breeding Habitats',
    accessor: 'breedingHabitats',
  },
  {
    Header: 'Preventive Measures',
    accessor: 'preventiveMeasures',
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
    id: 'division',
    title: 'Division',
    values: ['Ang Mo Kio', 'Aljunied'],
  },
  {
    type: FilterType.SELECT,
    id: 'inspectionType',
    title: 'Inspection Type',
    values: ['PM', 'GR', 'TC', 'CS'],
  },
  {
    type: FilterType.SELECT,
    id: 'premiseType',
    title: 'Premise Type',
    values: ['Market', 'Food centre', 'Vacant', 'FLat', 'Forested area (FO)', 'Bin center'],
  },
  {
    type: FilterType.SELECT,
    id: 'landOwner',
    title: 'Land Owner',
    values: ['SAF', 'Landowner 1', 'Landowner 2'],
  },
  {
    type: FilterType.SELECT,
    id: 'tcInspectionType',
    title: 'TC Inspection Type',
    values: ['NA', 'TC', 'TC Inspection 1', 'TC Inspection 2'],
  },
  {
    type: FilterType.SELECT,
    id: 'signsOfInfestation',
    title: 'Signs of Infestation',
    values: [
      'Dropping',
      'Old Glueboards',
      'Rub Marks',
      'Gnaw Marks',
      'Footprints',
      'Live Rat',
      'Dead Rat',
      'Defect',
      'Burrow',
    ],
  },
  {
    type: FilterType.SELECT,
    id: 'breedingHabitats',
    title: 'Breeding Habitats',
    values: ['Side of stall', 'Behind stall', 'Above stall', 'Dish washing area'],
  },
  {
    type: FilterType.SELECT,
    id: 'preventiveMeasures',
    title: 'Preventive Measures',
    values: ['Burrow sealed', 'Burrow treatment', 'Burrow treated'],
  },
];

class QueryRodentInspection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchType: 'addressOfPremise',
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
    const { getRodentInspectionListAction } = this.props;
    getRodentInspectionListAction().then(() => {
      if (this.filterRef) this.filterRef.onClear();
    });
  }

  filterTaskList = () => {
    const { getRodentInspectionListAction } = this.props;
    const { sortValue, searchType, searchText, datePickerValue, filterValue } = this.state;
    getRodentInspectionListAction({
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
          <NavBar active={'Query Rodent Inspection'} />
          <div className="contentWrapper">
            <div className="main-title">
              <h1>Query Rodent Inspection</h1>
            </div>
            <div className="navbar navbar-expand filterMainWrapper">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <SearchBox
                  name="barcode" // TODO: change it
                  placeholder="Enter keywords"
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

const mapStateToProps = ({ global, vectorInspectionReducers: { queryRodentInspection } }, ownProps) => ({
  ...ownProps,
  ...queryRodentInspection,
  fontSize: global.ui.fontSize,
});

const mapDispatchToProps = {
  filterQueryRodentInspectionAction,
  getRodentInspectionListAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(QueryRodentInspection));
