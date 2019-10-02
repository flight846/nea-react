import { getListTasksClaim } from 'services';
import uuid from 'uuid/v4';

export const GLOBAL_ACTIONS = {
  GET_LIST_TASKS_CLAIM: 'GET_LIST_TASKS_CLAIM',
};

export const fetchListTasksClaim = () => async (dispatch) => {
  const { data } = await getListTasksClaim();

  let list = [];

  for (let i = 0; i < 15; i += 1) {
    const l = (data.graviTrapFindVOList || []).map((item) => ({
      ...item,
      id: uuid(),
    }));

    list = [...list, ...l];
  }

  return dispatch({
    type: GLOBAL_ACTIONS.GET_LIST_TASKS_CLAIM,
    payload: list,
  });
};
