export const GLOBAL_ACTIONS = {
  TOGGLE_MENU: 'TOGGLE_MENU',
  CHANGE_FONT_SIZE: 'CHANGE_FONT_SIZE',
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
