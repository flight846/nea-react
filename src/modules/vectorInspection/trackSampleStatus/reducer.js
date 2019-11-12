import update from 'react-addons-update';
import { VECTOR_INSPECTION_GET_TRACK_LISTING, VECTOR_INSPECTION_GET_TRACK_LISTING_FILTER } from './action';

const initialState = {
  ui: {
    isLoading: false,
  },
  data: {
    samples: [],
    filteredSamples: [],
  },
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case VECTOR_INSPECTION_GET_TRACK_LISTING.PENDING: {
      return update(state, { ui: { isLoading: { $set: true } } });
    }
    case VECTOR_INSPECTION_GET_TRACK_LISTING.SUCCESS: {
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          samples: { $set: payload.samples },
        },
      });
    }
    case VECTOR_INSPECTION_GET_TRACK_LISTING.ERROR: {
      return update(state, { ui: { isLoading: { $set: false } } });
    }
    case VECTOR_INSPECTION_GET_TRACK_LISTING_FILTER: {
      return update(state, { data: { filteredSamples: { $set: payload } } });
    }
    default:
      return { ...state };
  }
};
