import update from 'react-addons-update';
import { GET_LATE_SUBMISSION_LIST, FILTER_LATE_SUBMISSION } from './action';

const initialState = {
  ui: {
    isLoading: false,
    errorMessage: null,
  },
  data: {
    list: [],
    filteredList: [],
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_LATE_SUBMISSION_LIST.PENDING:
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
      });
    case GET_LATE_SUBMISSION_LIST.SUCCESS:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          list: { $set: [] },
          filteredList: { $set: [] },
        },
      });
    case GET_LATE_SUBMISSION_LIST.ERROR:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          list: { $set: [] },
          filteredList: { $set: [] },
        },
      });
    case FILTER_LATE_SUBMISSION:
      return update(state, {
        data: {
          filteredList: { $set: payload },
        },
      });
    default:
      return state;
  }
};

export default reducer;
