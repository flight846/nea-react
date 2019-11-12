import {
  getDepositListingService,
  getSendListingService,
  submitDepositService,
  submitSendService,
  validateBarcodeDepositService,
  validateBarcodeSendService,
} from 'services/vectorInspection';
import { actionCreator, sortFunc, dateTimeFormatStrings, actionTryCatchCreator } from 'utils';
import Moment from 'moment';

const defaultFilterData = {
  datePickerValue: {
    startDate: null,
    endDate: null,
    selectedValue: 'breedingDetectionDateTime',
  },
};

export const VECTOR_INSPECTION_DEPOSIT_SEND_FILTER = 'VECTOR_INSPECTION_DEPOSIT_SEND_FILTER';
export const sampleQueryStatusFilter = (data = defaultFilterData) => (dispatch, getState) => {
  const {
    vectorInspectionReducers: {
      depositSendSamples: {
        data: { samples },
      },
    },
  } = getState();

  const scannedList = samples
    .filter(sample => sample.isScanned)
    .sort((a, b) => sortFunc(a, b, { id: 'scannedTime', desc: true }));
  if (scannedList.length > 0) {
    scannedList[scannedList.length - 1].hasBottomDivider = true;
  }

  const { datePickerValue } = data;
  const normalList = samples.filter(sample => {
    let check = !sample.isScanned;
    if (datePickerValue) {
      const { startDate, endDate } = datePickerValue;
      const dateCompare = Moment(sample[datePickerValue.selectedValue], dateTimeFormatStrings);
      if (endDate) {
        check = endDate.endOf('day').diff(dateCompare) >= 0 && check;
      }
      if (startDate) {
        check = dateCompare.diff(startDate.startOf('day')) >= 0 && check;
      }
    }
    return check;
  });

  dispatch({
    type: VECTOR_INSPECTION_DEPOSIT_SEND_FILTER,
    payload: [...scannedList, ...normalList],
  });
};

export const VECTOR_INSPECTION_DEPOSIT_LISTING = actionCreator('VECTOR_INSPECTION_DEPOSIT_LISTING');
export const getDepositListingAction = () => async dispatch => {
  const onPending = () => {
    dispatch({
      type: VECTOR_INSPECTION_DEPOSIT_LISTING.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: VECTOR_INSPECTION_DEPOSIT_LISTING.SUCCESS,
      payload: data.samples,
    });
    dispatch(sampleQueryStatusFilter());
  };
  const onError = error => {
    dispatch({
      type: VECTOR_INSPECTION_DEPOSIT_LISTING.ERROR,
      payload: error,
    });
  };
  await actionTryCatchCreator(getDepositListingService(), onPending, onSuccess, onError);
};

export const VECTOR_INSPECTION_SEND_LISTING = actionCreator('VECTOR_INSPECTION_SEND_LISTING');
export const getSendListingAction = () => async dispatch => {
  const onPending = () => {
    dispatch({
      type: VECTOR_INSPECTION_SEND_LISTING.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: VECTOR_INSPECTION_SEND_LISTING.SUCCESS,
      payload: data.samples,
    });
    dispatch(sampleQueryStatusFilter());
  };
  const onError = error => {
    dispatch({
      type: VECTOR_INSPECTION_SEND_LISTING.ERROR,
      payload: error,
    });
  };
  await actionTryCatchCreator(getSendListingService(), onPending, onSuccess, onError);
};

export const VECTOR_INSPECTION_VALIDATE_SEND = actionCreator('VECTOR_INSPECTION_VALIDATE_SEND');
export const validateBarcodeSendAction = barcodeId => async dispatch => {
  const onPending = () => {
    dispatch({
      type: VECTOR_INSPECTION_VALIDATE_SEND.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: VECTOR_INSPECTION_VALIDATE_SEND.SUCCESS,
      payload: data.sample,
    });
    dispatch(sampleQueryStatusFilter());
  };
  const onError = error => {
    dispatch({
      type: VECTOR_INSPECTION_VALIDATE_SEND.ERROR,
      payload: error,
    });
  };
  await actionTryCatchCreator(validateBarcodeSendService({ barcodeId }), onPending, onSuccess, onError);
};

export const VECTOR_INSPECTION_VALIDATE_DEPOSIT = actionCreator('VECTOR_INSPECTION_VALIDATE_DEPOSIT');
export const validateBarcodeDepositAction = barcodeId => async dispatch => {
  const onPending = () => {
    dispatch({
      type: VECTOR_INSPECTION_VALIDATE_DEPOSIT.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: VECTOR_INSPECTION_VALIDATE_DEPOSIT.SUCCESS,
      payload: data.sample,
    });
    dispatch(sampleQueryStatusFilter());
  };
  const onError = error => {
    dispatch({
      type: VECTOR_INSPECTION_VALIDATE_DEPOSIT.ERROR,
      payload: error,
    });
  };
  await actionTryCatchCreator(validateBarcodeDepositService({ barcodeId }), onPending, onSuccess, onError);
};

export const VECTOR_INSPECTION_SUBMIT_DEPOSIT = actionCreator('VECTOR_INSPECTION_SUBMIT_DEPOSIT');
export const submitDepositAction = params => async dispatch => {
  const onPending = () => {
    dispatch({
      type: VECTOR_INSPECTION_SUBMIT_DEPOSIT.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: VECTOR_INSPECTION_SUBMIT_DEPOSIT.SUCCESS,
      payload: data.samples,
    });
    dispatch(sampleQueryStatusFilter());
  };
  const onError = error => {
    dispatch({
      type: VECTOR_INSPECTION_SUBMIT_DEPOSIT.ERROR,
      payload: error,
    });
  };
  await actionTryCatchCreator(submitDepositService(params), onPending, onSuccess, onError);
};

export const VECTOR_INSPECTION_SUBMIT_SEND = actionCreator('VECTOR_INSPECTION_SUBMIT_SEND');
export const submitSendAction = params => async dispatch => {
  const onPending = () => {
    dispatch({
      type: VECTOR_INSPECTION_SUBMIT_SEND.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: VECTOR_INSPECTION_SUBMIT_SEND.SUCCESS,
      payload: data.samples,
    });
    dispatch(sampleQueryStatusFilter());
  };
  const onError = error => {
    dispatch({
      type: VECTOR_INSPECTION_SUBMIT_SEND.ERROR,
      payload: error,
    });
  };
  await actionTryCatchCreator(submitSendService(params), onPending, onSuccess, onError);
};
