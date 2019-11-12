import { getGroundSurveillanceListingService } from 'services/vectorInspection';
import { actionCreator, sortFunc, actionTryCatchCreator } from 'utils';

export const defaultFilterValue = {
  sortValue: {
    id: 'rccId',
    desc: false,
  },
  searchText: '',
  searchType: 'rccId',
};

export const GROUND_SURVEILLANCE_LISTING_FILTER = 'GROUND_SURVEILLANCE_LISTING_FILTER';
export const groundSurveillanceListingFilterAction = ({ searchText, searchType, sortValue }) => (
  dispatch,
  getState,
) => {
  const {
    vectorInspectionReducers: {
      groundSurveillanceListing: {
        data: { clusters },
      },
    },
  } = getState();

  const filteredList = clusters
    .filter(item => {
      let check = true;
      if (searchType && searchText) {
        // console.log('Search', searchType, searchText, item[searchType]);
        check = searchText === '' || item[searchType].toLowerCase().includes(searchText.toLowerCase());
      }
      return check;
    })
    .sort((a, b) => sortFunc(a, b, sortValue));

  dispatch({
    type: GROUND_SURVEILLANCE_LISTING_FILTER,
    payload: filteredList,
  });
};

export const GET_GROUND_SURVEILLANCE_LISTING = actionCreator('GET_GROUND_SURVEILLANCE_LISTING');
export const getGroundSurveillanceListingAction = () => async dispatch => {
  const onPending = () => {
    dispatch({
      type: GET_GROUND_SURVEILLANCE_LISTING.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: GET_GROUND_SURVEILLANCE_LISTING.SUCCESS,
      payload: data.clusters,
    });
    dispatch(groundSurveillanceListingFilterAction(defaultFilterValue));
  };
  const onError = error => {
    dispatch({
      type: GET_GROUND_SURVEILLANCE_LISTING.ERROR,
      payload: error,
    });
  };
  await actionTryCatchCreator(getGroundSurveillanceListingService(), onPending, onSuccess, onError);
};
