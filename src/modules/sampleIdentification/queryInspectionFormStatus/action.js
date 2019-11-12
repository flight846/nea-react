/* eslint-disable no-console */
/* eslint-disable operator-linebreak */
import { getQueryInspectionFormStatuses } from 'services/vectorInspection';
import { actionCreator, sortFunc, dateTimeFormatStrings, actionTryCatchCreator } from 'utils';
import Moment from 'moment';

export const defaultFilterValue = {
  sortValue: {
    id: 'breedingDetectionDateTime',
    label: 'Date and Time Collected',
    desc: false,
  },
  filterValue: null,
  datePickerValue: null,
  searchText: '',
  searchType: 'inspectionId',
};

export const FORM_QUERY_STATUS_FILTER = 'FORM_QUERY_STATUS_FILTER';
export const formQueryStatusFilter = ({ searchText, searchType, sortValue, filterValue, datePickerValue }) => (
  dispatch,
  getState,
) => {
  const {
    sampleIdentificationReducers: {
      queryInspectionFormStatus: {
        data: { taskList },
      },
    },
  } = getState();

  const filteredList = taskList
    .filter(item => {
      let check = true;
      if (searchType && searchText) {
        // console.log('Search', searchType, searchText, item[searchType]);
        check = searchText === '' || item[searchType].toLowerCase().includes(searchText.toLowerCase());
      }
      if (datePickerValue) {
        const { startDate, endDate } = datePickerValue;
        const dateCompare = Moment(item[datePickerValue.selectedValue], dateTimeFormatStrings);
        if (endDate) {
          check = endDate.endOf('day').diff(dateCompare) >= 0 && check;
        }
        if (startDate) {
          check = dateCompare.diff(startDate.startOf('day')) >= 0 && check;
        }
      }
      if (filterValue) {
        // console.log('Filter', filterValue);
        const { regions, statuses } = filterValue;
        if (regions && regions.length > 0) {
          check = check && regions.includes(item.regionOfficeCode);
        }
        if (statuses && statuses.length > 0) {
          check = check && statuses.includes(item.inspectionFormStatus);
        }
      }
      return check;
    })
    .sort((a, b) => sortFunc(a, b, sortValue));

  dispatch({
    type: FORM_QUERY_STATUS_FILTER,
    payload: filteredList,
  });
};

export const FORM_QUERY_STATUS_SEARCH = actionCreator('FORM_QUERY_STATUS_SEARCH');
export const formQueryStatusSearch = () => async dispatch => {
  const onPending = () => {
    dispatch({
      type: FORM_QUERY_STATUS_SEARCH.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: FORM_QUERY_STATUS_SEARCH.SUCCESS,
      payload: data.inspections,
    });
    dispatch(formQueryStatusFilter(defaultFilterValue));
  };
  const onError = error => {
    dispatch({
      type: FORM_QUERY_STATUS_SEARCH.ERROR,
      payload: error,
    });
  };
  await actionTryCatchCreator(getQueryInspectionFormStatuses(), onPending, onSuccess, onError);
};
