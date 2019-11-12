import { getBlockSummaryList } from 'services/vectorInspection';
import { actionCreator, sortFunc, dateTimeFormatStrings, actionTryCatchCreator } from 'utils';
import Moment from 'moment';

export const FILTER_BLOCK_SUMMARY = 'FILTER_BLOCK_SUMMARY';
export const filterBlockSummaryAction = ({ searchText, searchType, sortValue, filterValue, datePickerValue }) => (
  dispatch,
  getState,
) => {
  const {
    vectorInspectionReducers: {
      queryFogging: {
        data: { list },
      },
    },
  } = getState();
  console.log('TCL: searchType', searchType);

  const filteredList = list;
  // .filter(item => {
  //   let check = true;
  //   if (searchType && searchText) {
  //     // console.log('Search', searchType, searchText);
  //     check =
  //       searchText === '' || (item[searchType] && item[searchType].toLowerCase().includes(searchText.toLowerCase()));
  //   }
  //   if (datePickerValue) {
  //     const { startDate, endDate } = datePickerValue;
  //     const dateCompare = Moment(item[datePickerValue.selectedValue], dateTimeFormatStrings);
  //     if (endDate) {
  //       check = endDate.endOf('day').diff(dateCompare) >= 0 && check;
  //     }
  //     if (startDate) {
  //       check = dateCompare.diff(startDate.startOf('day')) >= 0 && check;
  //     }
  //   }
  //   if (filterValue) {
  //     // console.log('Filter', filterValue);
  //     const { regions, officerNames, labAnalystNames, statuses } = filterValue;
  //     if (regions && regions.length > 0) {
  //       check = check && regions.includes(item.regionOfficeCode);
  //     }
  //     if (officerNames && officerNames.length > 0) {
  //       check = check && officerNames.includes(item.officerName);
  //     }
  //     if (labAnalystNames && labAnalystNames.length > 0) {
  //       check = check && labAnalystNames.includes(item.analystName);
  //     }
  //     if (statuses && statuses.length > 0) {
  //       check = check && statuses.includes(item.sampleStatus);
  //     }
  //   }
  //   return check;
  // })
  // .sort((a, b) => sortFunc(a, b, sortValue));

  dispatch({
    type: FILTER_BLOCK_SUMMARY,
    payload: filteredList,
  });
};

export const GET_BLOCK_SUMMARY = actionCreator('GET_BLOCK_SUMMARY');
export const getBlockSummaryListAction = () => async dispatch => {
  const onPending = () => {
    dispatch({
      type: GET_BLOCK_SUMMARY.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: GET_BLOCK_SUMMARY.SUCCESS,
      payload: data.sampleIdList,
    });
    dispatch(
      filterBlockSummaryAction({
        sortValue: {
          id: 'breedingDectionDate',
          label: 'Breeding Detection',
          desc: false,
        },
      }),
    );
  };
  const onError = error => {
    dispatch({
      type: GET_BLOCK_SUMMARY.ERROR,
      payload: error,
    });
  };
  await actionTryCatchCreator(getBlockSummaryList(), onPending, onSuccess, onError);
};
