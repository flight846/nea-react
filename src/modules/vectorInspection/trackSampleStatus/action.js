import { actionCreator, actionTryCatchCreator } from 'utils';
import { getTrackListingService } from 'services/vectorInspection';

export const VECTOR_INSPECTION_GET_TRACK_LISTING_FILTER = 'VECTOR_INSPECTION_GET_TRACK_LISTING_FILTER';
export const getTrackListingFilterAction = ({ searchText, searchType, sortValue, filterValue }) => (
  dispatch,
  getState,
) => {
  console.log('SEARCH TEXT', searchText);
  console.log('SEARCH TYPE', searchType);
  console.log('SORT VALUE', sortValue);
  console.log('FILTER VALUE', filterValue);

  const {
    vectorInspectionReducers: {
      trackStatus: {
        data: { samples },
      },
    },
  } = getState();

  const filteredSamples = samples.filter(item => {
    let check = true;

    if (searchType && searchText) {
      check =
        searchText === '' || (item[searchType] && item[searchType].toLowerCase().includes(searchText.toLowerCase()));
    }

    if (filterValue) {
      // console.log('Filter', filterValue);
      const { receivedDateTime, sampleStatusDesc } = filterValue;
      if (receivedDateTime && receivedDateTime.length > 0) {
        check = check && item.receivedDateTime?.match(receivedDateTime);
      }

      if (sampleStatusDesc && sampleStatusDesc.length > 0) {
        check = check && item.sampleStatusDesc?.match(sampleStatusDesc);
      }
    }

    return check;
  });

  dispatch({
    type: VECTOR_INSPECTION_GET_TRACK_LISTING_FILTER,
    payload: filteredSamples,
  });
};

export const VECTOR_INSPECTION_GET_TRACK_LISTING = actionCreator('VECTOR_INSPECTION_GET_TRACK_LISTING');
export const getTrackListingAction = params => async dispatch => {
  const onPending = () => {
    dispatch({ type: VECTOR_INSPECTION_GET_TRACK_LISTING.PENDING });
  };
  const onSuccess = data => {
    console.log(data);

    dispatch({
      type: VECTOR_INSPECTION_GET_TRACK_LISTING.SUCCESS,
      payload: data,
    });

    dispatch(getTrackListingFilterAction({}));
  };
  const onError = error => {
    dispatch({ type: VECTOR_INSPECTION_GET_TRACK_LISTING.ERROR, payload: error });
  };

  await actionTryCatchCreator(getTrackListingService(params), onPending, onSuccess, onError);
};
