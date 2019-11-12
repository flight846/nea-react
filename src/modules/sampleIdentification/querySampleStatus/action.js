import { getQueriesStatus } from 'services/sampleIdentification';
import { actionCreator, sortFunc, dateTimeFormatStrings, actionTryCatchCreator } from 'utils';
import Moment from 'moment';

export const defaultFilterValue = {
  sortValue: {
    id: 'breedingDectionDate',
    label: 'Breeding Detection',
    desc: false,
  },
  filterValue: null,
  datePickerValue: null,
  searchText: '',
  searchType: 'barcodeId',
};

export const SAMPLE_QUERY_STATUS_FILTER = 'SAMPLE_QUERY_STATUS_FILTER';
export const sampleQueryStatusFilter = ({ searchText, searchType, sortValue, filterValue, datePickerValue }) => (
  dispatch,
  getState,
) => {
  const {
    sampleIdentificationReducers: {
      querySampleStatus: {
        data: { taskList },
      },
    },
  } = getState();
  const filteredList = taskList
    .filter(item => {
      let check = true;
      if (searchType && searchText) {
        // console.log('Search', searchType, searchText);
        check =
          searchText === '' || (item[searchType] && item[searchType].toLowerCase().includes(searchText.toLowerCase()));
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
        const { regions, officerNames, labAnalystNames, statuses } = filterValue;
        if (regions && regions.length > 0) {
          check = check && regions.includes(item.regionOfficeCode);
        }
        if (officerNames && officerNames.length > 0) {
          check = check && officerNames.includes(item.officerName);
        }
        if (labAnalystNames && labAnalystNames.length > 0) {
          check = check && labAnalystNames.includes(item.analystName);
        }
        if (statuses && statuses.length > 0) {
          check = check && statuses.includes(item.sampleStatus);
        }
      }
      return check;
    })
    .sort((a, b) => sortFunc(a, b, sortValue));

  dispatch({
    type: SAMPLE_QUERY_STATUS_FILTER,
    payload: filteredList,
  });
};

export const SAMPLE_QUERY_STATUS_SEARCH = actionCreator('SAMPLE_QUERY_STATUS_SEARCH');
export const sampleQueryStatusSearch = () => async dispatch => {
  const onPending = () => {
    dispatch({
      type: SAMPLE_QUERY_STATUS_SEARCH.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: SAMPLE_QUERY_STATUS_SEARCH.SUCCESS,
      payload: data.sampleIdList,
    });
    dispatch(sampleQueryStatusFilter(defaultFilterValue));
  };
  const onError = error => {
    dispatch({
      type: SAMPLE_QUERY_STATUS_SEARCH.ERROR,
      payload: error,
    });
  };
  await actionTryCatchCreator(getQueriesStatus(), onPending, onSuccess, onError);
};
