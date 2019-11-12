import update from 'react-addons-update';
import { SAMPLE_IDENTIFICATION_MY_WORKSPACE, SAMPLE_IDENTIFICATION_MY_WORKSPACE_FILTER } from './action';

const initialState = {
  ui: {
    isLoading: false,
    errorMessage: null,
  },
  data: {
    taskList: [],
    filteredTaskList: [],
    scannedSample: null,
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAMPLE_IDENTIFICATION_MY_WORKSPACE.PENDING:
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
      });
    case SAMPLE_IDENTIFICATION_MY_WORKSPACE.SUCCESS:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          taskList: { $set: payload },
          filteredTaskList: { $set: payload },
        },
      });
    case SAMPLE_IDENTIFICATION_MY_WORKSPACE.ERROR:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          taskList: { $set: [] },
        },
      });
    case SAMPLE_IDENTIFICATION_MY_WORKSPACE_FILTER:
      return update(state, {
        data: {
          filteredTaskList: { $set: payload },
        },
      });
    default:
      return state;
  }
};

export default reducer;
