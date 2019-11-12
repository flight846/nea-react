/* eslint-disable no-console */
/* eslint-disable operator-linebreak */
import { getQueryInspectionFormDetail } from 'services/vectorInspection';
import { actionCreator, actionTryCatchCreator } from 'utils';

export const QUERY_INSPECTION_FORM_DETAIL = actionCreator('QUERY_INSPECTION_FORM_DETAIL');
export const getQueryInspectionFormDetailAction = params => async dispatch => {
  const onPending = () => {
    dispatch({
      type: QUERY_INSPECTION_FORM_DETAIL.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: QUERY_INSPECTION_FORM_DETAIL.SUCCESS,
      payload: data,
    });
  };
  const onError = error => {
    dispatch({
      type: QUERY_INSPECTION_FORM_DETAIL.ERROR,
      payload: error,
    });
  };
  await actionTryCatchCreator(getQueryInspectionFormDetail(params), onPending, onSuccess, onError);
};
