import update from 'react-addons-update';
import { GET_GROUND_SURVEILLANCE_DETAIL } from './action';

const initialState = {
  ui: {
    isLoading: false,
    errorMessage: null,
  },
  data: {
    cluster: [],
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_GROUND_SURVEILLANCE_DETAIL.PENDING:
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
      });
    case GET_GROUND_SURVEILLANCE_DETAIL.SUCCESS:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          cluster: { $set: payload },
        },
      });
    case GET_GROUND_SURVEILLANCE_DETAIL.ERROR:
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
