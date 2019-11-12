import { getSampleIdentificationMyWorkspace } from 'services/sampleIdentification';
import { actionCreator, actionTryCatchCreator } from 'utils';

export const VECTOR_INSPECTION_GET_RCU_TL_WORKSPACE = actionCreator('VECTOR_INSPECTION_GET_RCU_TL_WORKSPACE');
export const getMyWorkspaceAction = () => async dispatch => {
  const onPending = () => {
    dispatch({
      type: VECTOR_INSPECTION_GET_RCU_TL_WORKSPACE.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: VECTOR_INSPECTION_GET_RCU_TL_WORKSPACE.SUCCESS,
      payload: data.claimTaskVOs,
    });
  };
  const onError = error => {
    dispatch({
      type: VECTOR_INSPECTION_GET_RCU_TL_WORKSPACE.ERROR,
      payload: error,
    });
  };
  await actionTryCatchCreator(getSampleIdentificationMyWorkspace(), onPending, onSuccess, onError);
};
