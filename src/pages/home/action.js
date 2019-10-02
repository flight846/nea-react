import { fakeRequest } from 'utils/request';
import { actionCreator } from 'utils';

export const UNAUTHENTICATE = 'UNAUTHENTICATE';
export const AUTHENTICATE_TOKEN = actionCreator('AUTHENTICATE_TOKEN');
export const authenticateTokenAction = email => async (dispatch) => {
  try {
    dispatch({
      type: AUTHENTICATE_TOKEN.PENDING,
    });

    const { data, code } = await fakeRequest(email);

    if (code === 200) {
      dispatch({
        type: AUTHENTICATE_TOKEN.SUCCESS,
        payload: data,
      });
    } else if (code === 401) {
      dispatch({
        type: UNAUTHENTICATE,
      });
    } else {
      dispatch({
        type: AUTHENTICATE_TOKEN.ERROR,
      });
    }
  } catch (error) {
    dispatch({
      type: AUTHENTICATE_TOKEN.ERROR,
    });
    console.log(error);
  }
};
