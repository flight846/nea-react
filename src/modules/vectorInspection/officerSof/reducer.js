import update from 'react-addons-update';
import { VECTOR_INSPECTION_GET_SOF_DETAIL, VECTOR_INSPECTION_RESET_SOF_DETAIL } from './action';

const initialState = {
  ui: {
    isLoading: false,
    errorMessage: null,
  },
  data: {},
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case VECTOR_INSPECTION_GET_SOF_DETAIL.PENDING: {
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
      });
    }
    case VECTOR_INSPECTION_GET_SOF_DETAIL.SUCCESS: {
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: { $set: payload },
      });
    }
    case VECTOR_INSPECTION_GET_SOF_DETAIL.ERROR: {
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
      });
    }
    case VECTOR_INSPECTION_RESET_SOF_DETAIL: {
      return initialState;
    }
    default:
      return state;
  }
};

export default reducer;
