// import { fakeRequest } from 'utils/request';
import { searchAnalystTasks } from 'services';
import { actionCreator } from 'utils';
// import { dataSuccess } from 'constants/fake-analyst-tasks';

export const ANALYST_TASK_SEARCH = actionCreator('ANALYST_TASK_SEARCH');
export const analystTaskSearch = () => async dispatch => {
  try {
    dispatch({
      type: ANALYST_TASK_SEARCH.PENDING,
    });

    const { status, data } = await searchAnalystTasks();
    //const data = dataSuccess;

    if (status === 200 && data.status === 'Pass') {
      dispatch({
        type: ANALYST_TASK_SEARCH.SUCCESS,
        payload: data.graviTrapFindVOList,
      });
    } else {
      dispatch({
        type: ANALYST_TASK_SEARCH.ERROR,
      });
    }
  } catch (error) {
    dispatch({
      type: ANALYST_TASK_SEARCH.ERROR,
    });
  }
};

export const ANALYST_TASK_FILTER = 'ANALYST_TASK_FILTER';
export const analystTaskFilter = data => (dispatch, getState) => {
  const {
    myWorkspaceReducer: {
      data: { taskList },
    },
  } = getState();
  const filteredList = taskList
    .filter(item => {
      let checkSearch = item[data.searchType]
        .toLowerCase()
        .includes(data.searchText.toLowerCase());
      const { statuses, divisions, premises } = data.filterValue;
      if (statuses.length > 0 && !statuses.includes('All')) {
        checkSearch = checkSearch && statuses.includes(item.status);
      }
      if (divisions.length > 0 && !divisions.includes('All')) {
        checkSearch = checkSearch && divisions.includes(item.divisionCd);
      }
      if (premises.length > 0 && !premises.includes('All')) {
        checkSearch = checkSearch && premises.includes(item.premise);
      }
      return checkSearch;
    })
    .sort((a, b) => {
      if (data.sortValue.desc) {
        return a[data.id] > b[data.id];
      }
      return a[data.id] < b[data.id];
    });
  dispatch({
    type: ANALYST_TASK_FILTER,
    payload: filteredList,
  });
};
