import { getGroundSurveillanceDetailService } from 'services/vectorInspection';
import { actionCreator, actionTryCatchCreator } from 'utils';

export const GET_GROUND_SURVEILLANCE_DETAIL = actionCreator('GET_GROUND_SURVEILLANCE_DETAIL');
export const getGroundSurveillanceDetailAction = () => async dispatch => {
  const onPending = () => {
    dispatch({
      type: GET_GROUND_SURVEILLANCE_DETAIL.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: GET_GROUND_SURVEILLANCE_DETAIL.SUCCESS,
      payload: data,
    });
  };
  const onError = error => {
    dispatch({
      type: GET_GROUND_SURVEILLANCE_DETAIL.ERROR,
      payload: error,
    });
  };
  await actionTryCatchCreator(getGroundSurveillanceDetailService(), onPending, onSuccess, onError);
};
