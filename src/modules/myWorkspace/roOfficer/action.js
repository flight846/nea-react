import { getPendingSOFListingService } from 'services/vectorInspection';
import { actionCreator, actionTryCatchCreator } from 'utils';

export const VECTOR_INSPECTION_GET_PENDING_SOF = actionCreator('VECTOR_INSPECTION_GET_PENDING_SOF');
export const getPendingSOFListingAction = () => async dispatch => {
  const onPending = () => {
    dispatch({
      type: VECTOR_INSPECTION_GET_PENDING_SOF.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: VECTOR_INSPECTION_GET_PENDING_SOF.SUCCESS,
      payload: data.inspections,
    });
  };
  const onError = error => {
    dispatch({
      type: VECTOR_INSPECTION_GET_PENDING_SOF.ERROR,
      payload: error,
    });
  };
  actionTryCatchCreator(getPendingSOFListingService(), onPending, onSuccess, onError);
};
