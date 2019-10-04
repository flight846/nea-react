/* eslint-disable react/jsx-fragments */
import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/ui/header';
import NavBar from 'components/layout/navbar';
import ShowList from 'components/ui/showlist';
import Footer from 'components/ui/footer';
import Sort from 'components/common/sort';
import Paging from 'components/common/pagination';
import AuditTaskFilter from 'components/common/audit-task-filter';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import { debounce } from 'lodash';
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';
import { analystTaskSearch, analystTaskFilter } from './action';

import './style.scss';

const columns = [
  {
    Header: 'Premise',
    accessor: 'premise',
  },
  {
    Header: 'Division',
    accessor: 'divisionCd',
  },
  {
    Header: 'Task ID',
    accessor: 'vcs2CaseId',
    Cell: cellInfo => (
      <Link className="text-blue" to={`/task/${cellInfo.row.vcs2CaseId}`}>
        {cellInfo.row.vcs2CaseId}
      </Link>
    ),
    width: 150,
  },
  {
    Header: 'Address',
    accessor: 'roadName',
    width: 200,
  },
  {
    Header: 'Trap Code',
    accessor: 'trapCd',
  },
  {
    Header: 'Eweek',
    accessor: 'eweek',
  },
  {
    Header: 'Sample Bottles',
    accessor: 'analystBottleCnt',
  },
  {
    Header: 'Specimen',
    accessor: 'analystSpecimentCnt',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
];

class MyWorkspace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowFilter: false,
      isShowSort: false,
      page: 0,
      pageSize: 10,
      sortValue: {
        id: 'premise',
        label: 'Premise',
        desc: true,
      },
      filterValue: {
        divisions: [],
        premises: [],
        statuses: [],
      },
      searchType: 'vcs2CaseId',
      searchText: '',
    };

    this.filterTaskList = debounce(this.filterTaskList, 500);
  }

  componentDidMount() {
    const { analystTaskSearchAction } = this.props;
    analystTaskSearchAction();
  }

  filterTaskList = () => {
    const { analystTaskFilterAction } = this.props;
    const { sortValue, filterValue, searchType, searchText } = this.state;
    analystTaskFilterAction({ sortValue, filterValue, searchType, searchText });
    this.setState({
      page: 0,
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

  onChangeSearchText = event => {
    const text = event.target.value;
    this.setState(
      {
        searchText: text,
      },
      () => {
        this.filterTaskList();
      },
    );
  };

  onChangePageSize = event => {
    this.setState({
      pageSize: event.target.value,
    });
  };

  onChangePage = number => {
    this.setState({
      page: number,
    });
  };

  toggleFilter = () => {
    this.setState(preState => ({
      isShowFilter: !preState.isShowFilter,
      isShowSort: false,
    }));
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

  toggleSort = () => {
    this.setState(preState => ({
      isShowFilter: false,
      isShowSort: !preState.isShowSort,
    }));
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

  render() {
    const { page, pageSize, isShowFilter, isShowSort, sortValue } = this.state;

    const {
      ui: { isLoading },
      data: { filteredTaskList },
      fontSize,
    } = this.props;
    return (
      <Fragment>
        <Header />
        <div className="main-content workspace__main">
          <NavBar active="workspace" />
          <div className="contentWrapper">
            <div className="main-title">
              <h1>My Workspace</h1>
            </div>
            <div className="workspace__filter">
              <div className="filterWrapper">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="workspace__search">
                      <div className="form-group showList">
                        <select
                          className="form-control"
                          id="sel1"
                          onChange={this.onChangeSearchType}
                        >
                          <option value="vcs2CaseId">Task ID</option>
                          <option value="roadName">Address</option>
                        </select>
                      </div>
                      <div className="searchWrapper">
                        <input
                          type="text"
                          className="searchTextfield"
                          placeholder="Search by keyword"
                          onChange={this.onChangeSearchText}
                        />
                        <SearchIcon className="searchIcon" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 filterSortWrapper">
                    <div className="workspace__sort">
                      <AuditTaskFilter
                        isShowFilter={isShowFilter}
                        toggle={this.toggleFilter}
                        onChange={this.onChangeFilter}
                      />
                      <Sort
                        data={columns}
                        value={sortValue}
                        desc={sortValue.desc}
                        isShowSort={isShowSort}
                        toggle={this.toggleSort}
                        onChange={this.onChangeSort}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ShowList
              pageSize={pageSize}
              totalItems={filteredTaskList.length}
              onChangePageSize={this.onChangePageSize}
            />
            {isLoading ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 300,
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="lds-ripple">
                    <div />
                    <div />
                  </div>
                  <span>Loading</span>
                </div>
              </div>
            ) : (
              <div
                className="workspace__table"
                style={{ fontSize: `${fontSize}px` }}
              >
                <ReactTable
                  data={filteredTaskList}
                  columns={columns}
                  page={page}
                  pageSize={pageSize}
                  showPagination={false}
                  sorted={[sortValue]}
                  sortable={false}
                  style={{ marginBottom: 16 }}
                />
                <Paging
                  number={page}
                  totalPages={filteredTaskList.length / pageSize}
                  onClickPager={this.onChangePage}
                />
              </div>
            )}

            <Footer />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ global, myWorkspaceReducer }, ownProps) => ({
  ...ownProps,
  ...myWorkspaceReducer,
  fontSize: global.ui.fontSize,
});

const mapDispatchToProps = {
  analystTaskSearchAction: analystTaskSearch,
  analystTaskFilterAction: analystTaskFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyWorkspace);
