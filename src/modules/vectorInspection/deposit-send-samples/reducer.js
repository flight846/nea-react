import update from 'react-addons-update';
import moment from 'moment';
import {
  VECTOR_INSPECTION_DEPOSIT_SEND_FILTER,
  VECTOR_INSPECTION_DEPOSIT_LISTING,
  VECTOR_INSPECTION_SEND_LISTING,
  VECTOR_INSPECTION_VALIDATE_SEND,
  VECTOR_INSPECTION_VALIDATE_DEPOSIT,
  VECTOR_INSPECTION_SUBMIT_DEPOSIT,
  VECTOR_INSPECTION_SUBMIT_SEND,
} from './action';

const initialState = {
  ui: {
    isLoading: false,
    isSubmitted: false,
    errorMessage: null,
  },
  data: {
    samples: [],
    filteredSamples: [],
    scannedSample: null,
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case VECTOR_INSPECTION_DEPOSIT_LISTING.PENDING:
    case VECTOR_INSPECTION_SEND_LISTING.PENDING: {
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
        data: {
          samples: { $set: [] },
          filteredSamples: { $set: [] },
        },
      });
    }
    case VECTOR_INSPECTION_VALIDATE_SEND.PENDING:
    case VECTOR_INSPECTION_VALIDATE_DEPOSIT.PENDING:
    case VECTOR_INSPECTION_SUBMIT_DEPOSIT.PENDING:
    case VECTOR_INSPECTION_SUBMIT_SEND.PENDING: {
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
      });
    }
    case VECTOR_INSPECTION_DEPOSIT_LISTING.SUCCESS:
    case VECTOR_INSPECTION_SEND_LISTING.SUCCESS: {
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          samples: { $set: payload },
        },
      });
    }
    case VECTOR_INSPECTION_VALIDATE_DEPOSIT.SUCCESS:
    case VECTOR_INSPECTION_VALIDATE_SEND.SUCCESS: {
      const scannedSample = { ...payload, scannedTime: moment() };
      const {
        data: { samples },
      } = state;
      const index = samples.findIndex(sample => sample.barcodeId === scannedSample.barcodeId);
      samples.push({ ...scannedSample, isScanned: true });
      // if (index >= 0) {
      //   samples[index] = { ...scannedSample, isScanned: true };
      // } else {
      //   samples.push({ ...scannedSample, isScanned: true });
      // }
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          samples: { $set: samples },
          scannedSample: { $set: scannedSample },
        },
      });
    }
    case VECTOR_INSPECTION_SUBMIT_DEPOSIT.SUCCESS:
    case VECTOR_INSPECTION_SUBMIT_SEND.SUCCESS: {
      return update(state, {
        ui: {
          isLoading: { $set: false },
          isSubmitted: { $set: true },
        },
        data: {
          samples: { $set: payload },
        },
      });
    }
    case VECTOR_INSPECTION_DEPOSIT_LISTING.ERROR:
    case VECTOR_INSPECTION_SEND_LISTING.ERROR:
    case VECTOR_INSPECTION_VALIDATE_SEND.ERROR:
    case VECTOR_INSPECTION_VALIDATE_DEPOSIT.ERROR:
    case VECTOR_INSPECTION_SUBMIT_DEPOSIT.ERROR:
    case VECTOR_INSPECTION_SUBMIT_SEND.ERROR: {
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
      });
    }
    case VECTOR_INSPECTION_DEPOSIT_SEND_FILTER: {
      return update(state, {
        data: {
          filteredSamples: { $set: payload },
        },
      });
    }
    default:
      return state;
  }
};

export default reducer;
