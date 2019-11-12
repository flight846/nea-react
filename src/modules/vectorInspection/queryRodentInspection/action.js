import { getRodentInspectionList } from 'services/vectorInspection';
import { actionCreator, sortFunc, dateTimeFormatStrings, actionTryCatchCreator } from 'utils';
import Moment from 'moment';

export const FILTER_QUERY_RODENT_INSPECTION = 'FILTER_QUERY_RODENT_INSPECTION';
export const filterQueryRodentInspectionAction = ({
  searchText,
  searchType,
  sortValue,
  filterValue,
  datePickerValue,
}) => (dispatch, getState) => {
  const {
    vectorInspectionReducers: {
      queryRodentInspection: {
        data: { list },
      },
    },
  } = getState();
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
    type: FILTER_QUERY_RODENT_INSPECTION,
    payload: filteredList,
  });
};

export const GET_QUERY_RODENT_INSPECTION = actionCreator('GET_QUERY_RODENT_INSPECTION');
export const getRodentInspectionListAction = () => async dispatch => {
  const onPending = () => {
    dispatch({
      type: GET_QUERY_RODENT_INSPECTION.PENDING,
    });
  };
  const onSuccess = data => {
    dispatch({
      type: GET_QUERY_RODENT_INSPECTION.SUCCESS,
      payload: data.sampleIdList,
    });
    dispatch(
      filterQueryRodentInspectionAction({
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
      type: GET_QUERY_RODENT_INSPECTION.ERROR,
      payload: error,
    });
  };
  await actionTryCatchCreator(getRodentInspectionList(), onPending, onSuccess, onError);
};
