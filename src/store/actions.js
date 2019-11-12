export const GLOBAL_ACTIONS = {
  TOGGLE_MENU: 'TOGGLE_MENU',
  CHANGE_FONT_SIZE: 'CHANGE_FONT_SIZE',
  UPDATE_USER_ROLE: 'UPDATE_USER_ROLE',
};

export const toggleMenu = () => dispatch => {
  dispatch({
    type: GLOBAL_ACTIONS.TOGGLE_MENU,
  });
};

export const changeFontsize = payload => dispatch => {
  dispatch({
    type: GLOBAL_ACTIONS.CHANGE_FONT_SIZE,
    payload,
  });
};

export const updateUserRole = payload => dispatch => {
  dispatch({
    type: GLOBAL_ACTIONS.UPDATE_USER_ROLE,
    payload,
  });
};
