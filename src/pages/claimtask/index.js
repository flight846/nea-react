/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-fragments */
import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import { debounce, difference } from 'lodash';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Header from 'components/ui/header';
import NavBar from 'components/layout/navbar';
import ShowList from 'components/ui/showlist';
import Footer from 'components/ui/footer';
import Sort from 'components/common/sort';
import Paging from 'components/common/pagination';
import InPageLoading from 'components/common/inPageLoading';
import AuditTaskFilter from 'components/common/audit-task-filter';
import { toast } from 'react-toastify';

import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';
import { commonPoolSearch, commonPoolFilter, commonPoolClaim, hideClaimModal } from './action';

import './style.scss';

class ClaimTask extends Component {
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
      selectedTask: [],
      isSelectingAllTask: 0,
    };

    this.filterTaskList = debounce(this.filterTaskList, 500);
  }

  componentDidMount() {
    const { commonPoolSearchAction } = this.props;
    commonPoolSearchAction();
  }

  filterTaskList = () => {
    const { commonPoolFilterAction } = this.props;
    const { sortValue, filterValue, searchType, searchText } = this.state;
    commonPoolFilterAction({ sortValue, filterValue, searchType, searchText });
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

  onCheckTaskId = taskId => {
    const { selectedTask } = this.state;
    const {
      data: { filteredTaskList },
    } = this.props;
    const tasks = new Set(selectedTask);
    if (tasks.has(taskId)) {
      tasks.delete(taskId);
    } else {
      tasks.add(taskId);
    }
    const isSelectingAllTask = this.checkSelectAll(tasks, filteredTaskList);
    this.setState({
      selectedTask: Array.from(tasks),
      isSelectingAllTask,
    });
  };

  onCheckAllTask = () => {
    const { isSelectingAllTask, selectedTask } = this.state;
    const {
      data: { filteredTaskList },
    } = this.props;
    const setTasks = new Set(selectedTask);
    if (isSelectingAllTask === 1) {
      filteredTaskList.forEach(e => {
        setTasks.delete(e.vcs2CaseId);
      });
      this.setState({
        selectedTask: Array.from(setTasks),
        //isSelectingAllTask: setTasks.size === 0 ? 0 : 2,
        isSelectingAllTask: 0,
      });
    } else {
      filteredTaskList.forEach(e => {
        setTasks.add(e.vcs2CaseId);
      });
      this.setState({
        selectedTask: Array.from(setTasks),
        isSelectingAllTask: 1,
        //isSelectingAllTask: setTasks.size === filteredTaskList.length ? 1 : 2,
      });
    }
  };

  checkSelectAll = (selectedTask, tasks) => {
    if (selectedTask.length === 0) {
      return 0;
    }
    const selectedArray = Array.from(selectedTask).sort();
    const array = Array.from(tasks.map(item => item.vcs2CaseId)).sort();
    console.log(array, selectedArray, difference(array, selectedArray));
    return difference(array, selectedArray).length === 0 ? 1 : 0;

    // if (JSON.stringify(selectedArray) === JSON.stringify(array)) {
    //   return 1;
    // }
    // return 0;
    //return 2;
  };

  onClaimTasks = () => {
    const { selectedTask } = this.state;
    const { commonPoolClaimAction } = this.props;
    if (selectedTask.length === 0) {
      toast.error('Please select any tasks first.');
    } else {
      commonPoolClaimAction(selectedTask);
    }
  };

  toggleClaimModal = () => {
    const { hideClaimModalAction } = this.props;
    hideClaimModalAction();
  };

  render() {
    const {
      page,
      pageSize,
      isShowFilter,
      isShowSort,
      sortValue,
      selectedTask,
      isSelectingAllTask,
    } = this.state;
    const {
      ui: { isLoading, showClaimModal },
      data: { filteredTaskList, claimFailedTasks },
      fontSize,
    } = this.props;

    let doubleCheckSelectingAll = this.checkSelectAll(selectedTask, filteredTaskList);
    console.log(doubleCheckSelectingAll, isSelectingAllTask);
    doubleCheckSelectingAll =
      doubleCheckSelectingAll === isSelectingAllTask ? isSelectingAllTask : doubleCheckSelectingAll;

    const columns = [
      {
        width: 64,
        Cell: cellInfo => (
          <div style={{ textAlign: 'center' }}>
            <input
              type="checkbox"
              className="checkbox"
              checked={selectedTask.includes(cellInfo.row.vcs2CaseId)}
              onChange={() => this.onCheckTaskId(cellInfo.row.vcs2CaseId)}
            />
          </div>
        ),
        Header: () => {
          return (
            <input
              type="checkbox"
              className="checkbox"
              checked={doubleCheckSelectingAll === 1}
              ref={input => {
                if (input) {
                  input.indeterminate = doubleCheckSelectingAll === 2;
                }
              }}
              onChange={() => this.onCheckAllTask()}
            />
          );
        },
      },
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
    ];
    return (
      <Fragment>
        <Header />
        <div className="main-content workspace__main">
          <NavBar active="task" />
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
                        statusFilter={false}
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
            <div className="workspace__table" style={{ fontSize: `${fontSize}px` }}>
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
              <div className="workspace__claim_button_container">
                <Button
                  className="claimButton"
                  outline
                  size="lg"
                  color="primary"
                  onClick={this.onClaimTasks}
                >
                  Claim Tasks
                </Button>
              </div>
            </div>
            <InPageLoading isLoading={isLoading} />
            <Footer />
          </div>
          <Modal isOpen={showClaimModal} toggle={this.toggleClaimModal}>
            <ModalHeader toggle={this.toggleClaimModal}>Claim Result</ModalHeader>
            <ModalBody>
              {claimFailedTasks.length === 0 ? (
                'Successfully claimed selected tasks'
              ) : (
                <div>
                  Some tasks are failed to claim:
                  <ul>
                    {claimFailedTasks.map((task, index) => (
                      <li key={`failed_task__${index}`}>
                        - {task.taskId} : {task.message}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" size="lg" onClick={this.toggleClaimModal}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ global, claimTaskReducer }, ownProps) => ({
  ...ownProps,
  ...claimTaskReducer,
  fontSize: global.ui.fontSize,
});

const mapDispatchToProps = {
  commonPoolSearchAction: commonPoolSearch,
  commonPoolFilterAction: commonPoolFilter,
  commonPoolClaimAction: commonPoolClaim,
  hideClaimModalAction: hideClaimModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClaimTask);
