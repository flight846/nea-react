import { getSOFDetailService } from 'services/vectorInspection';
import { actionCreator, actionTryCatchCreator } from 'utils';

export const VECTOR_INSPECTION_GET_SOF_DETAIL = actionCreator('VECTOR_INSPECTION_GET_SOF_DETAIL');
export const getSOFDetailAction = inspectionId => async dispatch => {
  const onPending = () => {
    dispatch({
      type: VECTOR_INSPECTION_GET_SOF_DETAIL.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: VECTOR_INSPECTION_GET_SOF_DETAIL.SUCCESS,
      payload: data,
    });
  };
  const onError = error => {
    dispatch({
      type: VECTOR_INSPECTION_GET_SOF_DETAIL.ERROR,
      payload: error,
    });
  };
  await actionTryCatchCreator(getSOFDetailService({ inspectionId }), onPending, onSuccess, onError);
};

export const VECTOR_INSPECTION_RESET_SOF_DETAIL = 'VECTOR_INSPECTION_RESET_SOF_DETAIL';
export const resetSOFDetailAction = () => dispatch => {
  dispatch({
    type: VECTOR_INSPECTION_RESET_SOF_DETAIL,
  });
};
