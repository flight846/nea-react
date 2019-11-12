import { getSampleIdentificationMyWorkspace } from 'services/sampleIdentification';
import { actionCreator, actionTryCatchCreator } from 'utils';

export const SAMPLE_IDENTIFICATION_MY_WORKSPACE_FILTER = 'SAMPLE_IDENTIFICATION_MY_WORKSPACE_FILTER';
export const sampleMyWorkspaceFilter = () => (dispatch, getState) => {
  const {
    myWorkspaceReducers: {
      ehiAnalyst: {
        data: { taskList },
      },
    },
  } = getState();
  const urgentList = taskList.filter(item => item.isUrgentCase);

  const lateList = taskList.filter(item => !item.isUrgentCase && item.isPrioritized);

  const normalList = taskList.filter(item => !item.isUrgentCase && !item.isPrioritized);

  dispatch({
    type: SAMPLE_IDENTIFICATION_MY_WORKSPACE_FILTER,
    payload: [...urgentList, ...lateList, ...normalList],
  });
};

export const SAMPLE_IDENTIFICATION_MY_WORKSPACE = actionCreator('SAMPLE_IDENTIFICATION_MY_WORKSPACE');
export const sampleMyWorkspaceSearch = () => async dispatch => {
  const onPending = () => {
    dispatch({
      type: SAMPLE_IDENTIFICATION_MY_WORKSPACE.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: SAMPLE_IDENTIFICATION_MY_WORKSPACE.SUCCESS,
      payload: data.claimTaskVOs,
    });
    dispatch(sampleMyWorkspaceFilter());
  };
  const onError = error => {
    dispatch({
      type: SAMPLE_IDENTIFICATION_MY_WORKSPACE.ERROR,
      payload: error,
    });
  };
  await actionTryCatchCreator(getSampleIdentificationMyWorkspace(), onPending, onSuccess, onError);
};
