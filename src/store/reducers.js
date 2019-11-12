import update from 'react-addons-update';
import { combineReducers } from 'redux';

import { getData } from 'utils';

import uiReducer from 'pages/ui/reducer';
import myWorkspaceReducers from 'modules/myWorkspace/reducer';
import sampleIdentificationReducers from 'modules/sampleIdentification/reducer';
import vectorInspectionReducers from 'modules/vectorInspection/reducer';
import { GLOBAL_ACTIONS } from './actions';

const initialState = {
  ui: {
    loading: false,
    showMenu: false,
    fontSize: 16,
    userRole: getData('userRole'),
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

    case GLOBAL_ACTIONS.UPDATE_USER_ROLE:
      return update(state, {
        ui: {
          userRole: { $set: action.payload },
        },
      });

    default:
      return state;
  }
};

export default combineReducers({
  global,
  uiReducer,
  myWorkspaceReducers,
  sampleIdentificationReducers,
  vectorInspectionReducers,
});
