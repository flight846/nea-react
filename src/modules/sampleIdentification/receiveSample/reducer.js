import update from 'react-addons-update';
import moment from 'moment';
import {
  RECEIVE_SAMPLE_FILTER,
  RECEIVE_SAMPLE_VALIDATE_BARCODE,
  RECEIVE_SAMPLE_RESET_REDUCER,
  RECEIVE_SAMPLE_REJECT,
  RECEIVE_SAMPLE_ACCEPT_URGENT,
  RECEIVE_SAMPLE_REACCEPT,
  RECEIVE_SAMPLE_SUBMIT,
} from './action';

const initialState = {
  ui: {
    isLoading: false,
    loadingText: '',
    errorMessage: null,
    isSubmitted: false,
  },
  data: {
    filteredTaskList: [],
    scannedSample: null,
    fileSysConfiguration: null,
    uploadedFileId: '',
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type.includes('_ERROR')) {
    return update(state, {
      ui: {
        isLoading: { $set: false },
        errorMessage: { $set: payload },
      },
      // data: {
      //   scannedSample: { $set: null },
      // },
    });
  }

  switch (type) {
    case RECEIVE_SAMPLE_VALIDATE_BARCODE.PENDING: {
      return update(state, {
        ui: {
          isLoading: { $set: true },
          loadingText: { $set: 'Validating barcode' },
        },
      });
    }
    case RECEIVE_SAMPLE_VALIDATE_BARCODE.SUCCESS: {
      const scannedSample = { ...payload, scannedTime: moment() };
      const { filteredTaskList } = state.data;
      const index = filteredTaskList.findIndex(item => item.barcodeId === scannedSample.barcodeId);
      const newList = index > -1 ? { $splice: [[index, 1, scannedSample]] } : { $push: [scannedSample] };

      return update(state, {
        ui: {
          isLoading: { $set: false },
          errorMessage: { $set: null },
        },
        data: {
          scannedSample: { $set: scannedSample },
          filteredTaskList: newList,
        },
      });
    }
    case RECEIVE_SAMPLE_SUBMIT.PENDING: {
      return update(state, {
        ui: {
          isLoading: { $set: true },
          loadingText: { $set: 'Submitting received samples' },
        },
      });
    }
    case RECEIVE_SAMPLE_SUBMIT.SUCCESS: {
      return update(state, {
        ui: {
          isLoading: { $set: false },
          errorMessage: { $set: null },
          isSubmitted: { $set: true },
        },
        data: {
          filteredTaskList: { $set: payload },
          scannedSample: { $set: null },
        },
      });
    }
    case RECEIVE_SAMPLE_FILTER: {
      return update(state, {
        data: {
          filteredTaskList: { $set: payload },
        },
      });
    }
    case RECEIVE_SAMPLE_REJECT: {
      const {
        data: { filteredTaskList },
      } = state;
      const index = filteredTaskList.findIndex(item => item.barcodeId === payload.barcodeId);
      const updatedList = update(filteredTaskList, {
        [index]: { $set: { ...filteredTaskList[index], ...payload } },
      });
      return update(state, {
        data: {
          filteredTaskList: { $set: updatedList },
          // scannedSample: { $set: null },
        },
      });
    }
    case RECEIVE_SAMPLE_ACCEPT_URGENT: {
      const {
        data: { filteredTaskList, scannedSample },
      } = state;
      const index = filteredTaskList.findIndex(item => item.barcodeId === payload.barcodeId);
      const updatedList = update(filteredTaskList, {
        [index]: { $set: { ...filteredTaskList[index], isUrgentCase: true } },
      });
      const updatedScannedSample = update(scannedSample, {
        isUrgentCase: { $set: true },
      });
      return update(state, {
        data: {
          filteredTaskList: { $set: updatedList },
          scannedSample: { $set: updatedScannedSample },
        },
      });
    }
    case RECEIVE_SAMPLE_REACCEPT: {
      const {
        data: { filteredTaskList },
      } = state;
      const index = filteredTaskList.findIndex(item => item.barcodeId === payload.barcodeId);
      const updatedList = update(filteredTaskList, {
        [index]: { $set: { ...filteredTaskList[index], ...payload } },
      });
      return update(state, {
        data: {
          filteredTaskList: { $set: updatedList },
          //scannedSample: { $set: null },
        },
      });
    }
    case RECEIVE_SAMPLE_RESET_REDUCER:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
