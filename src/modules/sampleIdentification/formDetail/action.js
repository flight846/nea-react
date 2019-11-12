/* eslint-disable no-console */
/* eslint-disable operator-linebreak */
import { getSampleInfo, certifyFindings, submitFindingService } from 'services/sampleIdentification';
import { getQueryInspectionFormDetail } from 'services/vectorInspection';
import { actionCreator, actionTryCatchCreator } from 'utils';

export const GET_SAMPLE_INFO = actionCreator('GET_SAMPLE_INFO');
export const getFormDetailAction = params => async dispatch => {
  const onPending = () => {
    dispatch({
      type: GET_SAMPLE_INFO.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: GET_SAMPLE_INFO.SUCCESS,
      payload: data,
    });
  };
  const onError = error => {
    dispatch({
      type: GET_SAMPLE_INFO.ERROR,
      payload: error,
    });
  };

  const { barcodeId } = params;
  if (barcodeId) {
    await actionTryCatchCreator(getSampleInfo(params), onPending, onSuccess, onError);
  } else {
    await actionTryCatchCreator(getQueryInspectionFormDetail(params), onPending, onSuccess, onError);
  }
};

export const FORM_DETAIL_CERTIFY_FINDINGS = actionCreator('FORM_DETAIL_CERTIFY_FINDINGS');
export const certifyFindingWithEmails = params => async dispatch => {
  const onPending = () => {
    dispatch({
      type: FORM_DETAIL_CERTIFY_FINDINGS.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: FORM_DETAIL_CERTIFY_FINDINGS.SUCCESS,
      payload: data,
    });
  };
  const onError = error => {
    dispatch({
      type: FORM_DETAIL_CERTIFY_FINDINGS.ERROR,
      payload: error,
    });
  };
  await actionTryCatchCreator(certifyFindings(params), onPending, onSuccess, onError);
};

export const FORM_DETAIL_SUBMIT_FINDINGS = actionCreator('FORM_DETAIL_SUBMIT_FINDINGS');
export const submitFindingAction = params => async dispatch => {
  const onPending = () => {
    dispatch({
      type: FORM_DETAIL_SUBMIT_FINDINGS.PENDING,
    });
  };
  const onSuccess = () => {
    dispatch({
      type: FORM_DETAIL_SUBMIT_FINDINGS.SUCCESS,
      payload: params,
    });
  };
  const onError = error => {
    dispatch({
      type: FORM_DETAIL_SUBMIT_FINDINGS.ERROR,
      payload: error,
    });
  };
  await actionTryCatchCreator(submitFindingService(params), onPending, onSuccess, onError);
};

export const FORM_DETAIL_ADD_FINDINGS = 'FORM_DETAIL_ADD_FINDINGS';
export const addFindingAction = sampleId => dispatch => {
  dispatch({
    type: FORM_DETAIL_ADD_FINDINGS,
    payload: sampleId,
  });
};

export const FORM_DETAIL_REMOVE_FINDINGS = 'FORM_DETAIL_REMOVE_FINDINGS';
export const removeFindingAction = data => dispatch => {
  dispatch({
    type: FORM_DETAIL_REMOVE_FINDINGS,
    payload: data,
  });
};

export const FORM_DETAIL_TOGGLE_FINDINGS = 'FORM_DETAIL_TOGGLE_FINDINGS';
export const toggleFindingAction = findingIds => dispatch => {
  dispatch({
    type: FORM_DETAIL_TOGGLE_FINDINGS,
    payload: findingIds,
  });
};

export const FORM_DETAIL_RESET_REDUCER = 'FORM_DETAIL_RESET_REDUCER';
export const resetFormDetailReducer = () => dispatch => {
  dispatch({
    type: FORM_DETAIL_RESET_REDUCER,
  });
};
