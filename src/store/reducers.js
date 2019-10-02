import update from 'react-addons-update';
import { combineReducers } from 'redux';
import uiReducer from 'pages/ui/reducer';
import myWorkspaceReducer from 'pages/myworkspace/reducer';
import claimTaskReducer from 'pages/claimtask/reducer';
import { GLOBAL_ACTIONS } from './actions';

const initialState = {
  ui: {
    loading: false,
    showMenu: false,
    fontSize: 16,
  },
  data: {},
};

const global = (state = initialState, action) => {
  switch (action.type) {
    case GLOBAL_ACTIONS.TOGGLE_MENU:
      return update(state, {
        ui: {
          showMenu: { $set: !state.ui.showMenu },
        },
      });
    case GLOBAL_ACTIONS.CHANGE_FONT_SIZE:
      return update(state, {
        ui: {
          fontSize: { $set: action.payload },
        },
      });

    default:
      return state;
  }
};

export default combineReducers({
  global,
  uiReducer,
  myWorkspaceReducer,
  claimTaskReducer,
});
