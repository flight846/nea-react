import update from 'react-addons-update';

import { QUERY_INSPECTION_FORM_DETAIL } from './action';

const initialState = {
  ui: {
    isLoading: false,
    errorMessage: null,
    isSubmitted: false,
  },
  data: {
    formDetail: null,
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case QUERY_INSPECTION_FORM_DETAIL.PENDING: {
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
      });
    }
    case QUERY_INSPECTION_FORM_DETAIL.SUCCESS: {
      return update(state, {
        ui: {
          isLoading: { $set: false },
          errorMessage: { $set: null },
        },
        data: {
          formDetail: { $set: payload },
        },
      });
    }
    case QUERY_INSPECTION_FORM_DETAIL.ERROR: {
      return update(state, {
        ui: {
          isLoading: { $set: false },
          errorMessage: { $set: payload },
        },
      });
    }
    default:
      return state;
  }
};

export default reducer;
