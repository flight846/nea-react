import { getPendingSOFListingService } from 'services/vectorInspection';
import { actionCreator, actionTryCatchCreator } from 'utils';

export const VECTOR_INSPECTION_GET_INSPECTION_REQUEST = actionCreator('VECTOR_INSPECTION_GET_INSPECTION_REQUEST');
export const getInspectionRequestListAction = () => async dispatch => {
  const onPending = () => {
    dispatch({
      type: VECTOR_INSPECTION_GET_INSPECTION_REQUEST.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: VECTOR_INSPECTION_GET_INSPECTION_REQUEST.SUCCESS,
      payload: [],
    });
  };
  const onError = error => {
    dispatch({
      type: VECTOR_INSPECTION_GET_INSPECTION_REQUEST.ERROR,
      payload: error,
    });
  };
  actionTryCatchCreator(getPendingSOFListingService(), onPending, onSuccess, onError);
};

export const VECTOR_INSPECTION_GET_INSPECTION_FORM_3 = actionCreator('VECTOR_INSPECTION_GET_INSPECTION_FORM_3');
export const getInspectionForm3ListAction = () => async dispatch => {
  const onPending = () => {
    dispatch({
      type: VECTOR_INSPECTION_GET_INSPECTION_FORM_3.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: VECTOR_INSPECTION_GET_INSPECTION_FORM_3.SUCCESS,
      payload: [],
    });
  };
  const onError = error => {
    dispatch({
      type: VECTOR_INSPECTION_GET_INSPECTION_FORM_3.ERROR,
      payload: error,
    });
  };
  actionTryCatchCreator(getPendingSOFListingService(), onPending, onSuccess, onError);
};

export const VECTOR_INSPECTION_GET_RODENT_AUDIT_EXPIRED_TASK = actionCreator(
  'VECTOR_INSPECTION_GET_RODENT_AUDIT_EXPIRED_TASK',
);
export const getRodentExpiredTaskListAction = () => async dispatch => {
  const onPending = () => {
    dispatch({
      type: VECTOR_INSPECTION_GET_RODENT_AUDIT_EXPIRED_TASK.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: VECTOR_INSPECTION_GET_RODENT_AUDIT_EXPIRED_TASK.SUCCESS,
      payload: [],
    });
  };
  const onError = error => {
    dispatch({
      type: VECTOR_INSPECTION_GET_RODENT_AUDIT_EXPIRED_TASK.ERROR,
      payload: error,
    });
  };
  actionTryCatchCreator(getPendingSOFListingService(), onPending, onSuccess, onError);
};

export const VECTOR_INSPECTION_GET_RODENT_AUDIT_SHOW_CAUSE = actionCreator(
  'VECTOR_INSPECTION_GET_RODENT_AUDIT_SHOW_CAUSE',
);
export const getRodentShowCauseListAction = () => async dispatch => {
  const onPending = () => {
    dispatch({
      type: VECTOR_INSPECTION_GET_RODENT_AUDIT_SHOW_CAUSE.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: VECTOR_INSPECTION_GET_RODENT_AUDIT_SHOW_CAUSE.SUCCESS,
      payload: [],
    });
  };
  const onError = error => {
    dispatch({
      type: VECTOR_INSPECTION_GET_RODENT_AUDIT_SHOW_CAUSE.ERROR,
      payload: error,
    });
  };
  actionTryCatchCreator(getPendingSOFListingService(), onPending, onSuccess, onError);
};

export const VECTOR_INSPECTION_GET_FOGGING_EXPIRED_TASK = actionCreator('VECTOR_INSPECTION_GET_FOGGING_EXPIRED_TASK');
export const getFoggingExpiredTaskListAction = () => async dispatch => {
  const onPending = () => {
    dispatch({
      type: VECTOR_INSPECTION_GET_FOGGING_EXPIRED_TASK.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: VECTOR_INSPECTION_GET_FOGGING_EXPIRED_TASK.SUCCESS,
      payload: [],
    });
  };
  const onError = error => {
    dispatch({
      type: VECTOR_INSPECTION_GET_FOGGING_EXPIRED_TASK.ERROR,
      payload: error,
    });
  };
  actionTryCatchCreator(getPendingSOFListingService(), onPending, onSuccess, onError);
};

export const VECTOR_INSPECTION_GET_FOGGING_RECOMMENDATION = actionCreator(
  'VECTOR_INSPECTION_GET_FOGGING_RECOMMENDATION',
);
export const getFoggingRecommendationListAction = () => async dispatch => {
  const onPending = () => {
    dispatch({
      type: VECTOR_INSPECTION_GET_FOGGING_RECOMMENDATION.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: VECTOR_INSPECTION_GET_FOGGING_RECOMMENDATION.SUCCESS,
      payload: [],
    });
  };
  const onError = error => {
    dispatch({
      type: VECTOR_INSPECTION_GET_FOGGING_RECOMMENDATION.ERROR,
      payload: error,
    });
  };
  actionTryCatchCreator(getPendingSOFListingService(), onPending, onSuccess, onError);
};
