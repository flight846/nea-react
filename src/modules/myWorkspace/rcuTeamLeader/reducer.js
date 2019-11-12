import update from 'react-addons-update';
import { VECTOR_INSPECTION_GET_RCU_TL_WORKSPACE } from './action';

const initialState = {
  ui: {
    isLoading: false,
    errorMessage: null,
  },
  data: {
    workspaceList: [],
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case VECTOR_INSPECTION_GET_RCU_TL_WORKSPACE.PENDING:
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
      });
    case VECTOR_INSPECTION_GET_RCU_TL_WORKSPACE.SUCCESS:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          workspaceList: { $set: payload },
        },
      });
    case VECTOR_INSPECTION_GET_RCU_TL_WORKSPACE.ERROR:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          workspaceList: { $set: [] },
        },
      });

    default:
      return state;
  }
};

export default reducer;
