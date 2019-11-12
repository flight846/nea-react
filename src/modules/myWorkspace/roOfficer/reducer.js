import update from 'react-addons-update';
import { VECTOR_INSPECTION_GET_PENDING_SOF } from './action';

const initialState = {
  ui: {
    isLoading: false,
    errorMessage: null,
  },
  data: {
    inspections: [],
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case VECTOR_INSPECTION_GET_PENDING_SOF.PENDING:
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
      });
    case VECTOR_INSPECTION_GET_PENDING_SOF.SUCCESS:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          inspections: { $set: payload },
        },
      });
    case VECTOR_INSPECTION_GET_PENDING_SOF.ERROR:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
      });
    default:
      return state;
  }
};

export default reducer;
