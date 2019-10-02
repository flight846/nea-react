import update from 'react-addons-update';
import {
  COMMON_POOL_SEARCH,
  COMMON_POOL_FILTER,
  COMMON_POOL_GROUP_CLAIM,
  HIDE_CLAIM_MODAL,
} from './action';

const initialState = {
  ui: {
    isLoading: false,
    showClaimModal: false,
  },
  data: {
    taskList: [],
    filteredTaskList: [],
    claimFailedTasks: [],
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case COMMON_POOL_SEARCH.PENDING:
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
      });
    case COMMON_POOL_SEARCH.SUCCESS:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          taskList: { $set: payload },
          filteredTaskList: { $set: payload },
        },
      });
    case COMMON_POOL_SEARCH.ERROR:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          taskList: { $set: [] },
        },
      });
    case COMMON_POOL_FILTER:
      return update(state, {
        data: {
          filteredTaskList: { $set: payload },
        },
      });
    case COMMON_POOL_GROUP_CLAIM.PENDING:
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
      });
    case COMMON_POOL_GROUP_CLAIM.SUCCESS:
      return update(state, {
        ui: {
          isLoading: { $set: false },
          showClaimModal: { $set: true },
        },
        data: {
          claimFailedTasks: { $set: payload },
        },
      });
    case COMMON_POOL_GROUP_CLAIM.ERROR:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
      });
    case HIDE_CLAIM_MODAL:
      return update(state, {
        ui: {
          showClaimModal: { $set: false },
        },
      });
    default:
      return state;
  }
};

export default reducer;
