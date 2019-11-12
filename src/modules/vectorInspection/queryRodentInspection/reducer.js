import update from 'react-addons-update';
import { GET_QUERY_RODENT_INSPECTION, FILTER_QUERY_RODENT_INSPECTION } from './action';

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
    case GET_QUERY_RODENT_INSPECTION.PENDING:
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
      });
    case GET_QUERY_RODENT_INSPECTION.SUCCESS:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          list: { $set: [] },
          filteredList: { $set: [] },
        },
      });
    case GET_QUERY_RODENT_INSPECTION.ERROR:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          list: { $set: [] },
          filteredList: { $set: [] },
        },
      });
    case FILTER_QUERY_RODENT_INSPECTION:
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
