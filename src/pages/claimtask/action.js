// import { fakeRequest } from 'utils/request';
import axios from 'axios';
import { searchCommonPools, claimCommonPools } from 'services';
import { actionCreator } from 'utils';
//import { dataSuccess } from 'constants/fake-analyst-tasks';

export const HIDE_CLAIM_MODAL = 'HIDE_CLAIM_MODAL';
export const hideClaimModal = () => dispatch => {
  dispatch({
    type: HIDE_CLAIM_MODAL,
  });
};

export const COMMON_POOL_GROUP_CLAIM = actionCreator('COMMON_POOL_GROUP_CLAIM');
export const commonPoolClaim = taskIDs => async dispatch => {
  try {
    dispatch({
      type: COMMON_POOL_GROUP_CLAIM.PENDING,
    });

    const taskRequests = [];
    taskIDs.forEach(element => {
      taskRequests.push(claimCommonPools({ caseId: element }));
    });
    axios.all(taskRequests).then(results => {
      const failedTask = [];

      results.forEach(element => {
        const { status, data, config } = element;
        const configObj = JSON.parse(config.data);
        if (status === 200) {
          // if (data.status === 'Pass') {
          //   failedTask.push({
          //     taskId: configObj.caseId,
          //     message: 'Task already claimed',
          //   });
          // }
          if (data.status === 'Fail') {
            failedTask.push({
              taskId: configObj.caseId,
              message: data.errorMessageList.join(', '),
            });
          }
        } else {
          failedTask.push({
            taskId: configObj.caseId,
            message: 'Network Error',
          });
        }
      });

      dispatch({
        type: COMMON_POOL_GROUP_CLAIM.SUCCESS,
        payload: failedTask,
      });
    });
  } catch (error) {
    dispatch({
      type: COMMON_POOL_GROUP_CLAIM.ERROR,
    });
  }
};

export const COMMON_POOL_SEARCH = actionCreator('COMMON_POOL_SEARCH');
export const commonPoolSearch = () => async dispatch => {
  try {
    dispatch({
      type: COMMON_POOL_SEARCH.PENDING,
    });

    const { status, data } = await searchCommonPools();
    //const data = dataSuccess;

    if (status === 200 && data.status === 'Pass') {
      dispatch({
        type: COMMON_POOL_SEARCH.SUCCESS,
        payload: data.graviTrapFindVOList,
      });
    } else {
      dispatch({
        type: COMMON_POOL_SEARCH.ERROR,
      });
    }
  } catch (error) {
    dispatch({
      type: COMMON_POOL_SEARCH.ERROR,
    });
  }
};

export const COMMON_POOL_FILTER = 'COMMON_POOL_FILTER';
export const commonPoolFilter = data => (dispatch, getState) => {
  const {
    claimTaskReducer: {
      data: { taskList },
    },
  } = getState();
  const filteredList = taskList
    .filter(item => {
      let checkSearch = item[data.searchType]
        .toLowerCase()
        .includes(data.searchText.toLowerCase());
      const { divisions, premises } = data.filterValue;
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
    type: COMMON_POOL_FILTER,
    payload: filteredList,
  });
};
