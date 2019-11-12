import update from 'react-addons-update';
import { GET_QUERY_FOGGING, FILTER_QUERY_FOGGING } from './action';

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
    case GET_QUERY_FOGGING.PENDING:
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
      });
    case GET_QUERY_FOGGING.SUCCESS:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          list: { $set: [] },
          filteredList: { $set: [] },
        },
      });
    case GET_QUERY_FOGGING.ERROR:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          list: { $set: [] },
          filteredList: { $set: [] },
        },
      });
    case FILTER_QUERY_FOGGING:
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
