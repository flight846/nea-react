import moment from 'moment-timezone';
import { toast } from 'react-toastify';

export const storeData = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.log('storeData', error);
  }
};

export const getData = key => {
  let res = '';
  try {
    res = localStorage.getItem(key);
  } catch (error) {
    console.log('getData', error);
  }
  return res;
};

export const actionCreator = (actionName, extraField = []) => {
  const actionType = {
    NAME: actionName,
    PENDING: `${actionName}_PENDING`,
    SUCCESS: `${actionName}_SUCCESS`,
    ERROR: `${actionName}_ERROR`,
  };
  extraField.forEach(field => {
    actionType[field] = `${actionName}_${field}`;
  });

  return actionType;
};

export const actionTryCatchCreator = async (service, onPending, onSucess, onError) => {
  try {
    if (onPending) onPending();
    const { status, data } = await service;
    if (status === 200) {
      const errorArray = data.errorMessage || data.errorMessageList || [];
      if (data.status === 'Pass') {
        if (onSucess) onSucess(data);
        if (errorArray.length > 0) {
          toast.error(errorArray.join(', '));
        }
      } else {
        throw errorArray.join(', ');
      }
    } else {
      throw String(`HTTP code ${status}`);
    }
  } catch (error) {
    if (typeof error === 'object') {
      toast.error(error.message);
    } else {
      toast.error(error);
    }
    if (onError) onError(error);
    throw error;
  }
};

export const dateTimeFormatStrings = [
  'DD/MM/YYYY hh:mm',
  'DD/MM/YYYY hh:mm A',
  'DD/MM/YYYY HH:mm',
  'DD/MM/YYYY HH:mm:ss',
  'YYYY/MM/DD HH:mm:ss',
];

export const dateFormatString = 'DD MMM YYYY';
export const timeFormatString = 'hh:mm A';

export const dateStringFromDate = date => moment(date).format(dateFormatString);
export const timeStringFromDate = date => moment(date).format(timeFormatString);

export const sortFunc = (a, b, sortValue) => {
  const { id, desc } = sortValue;
  const first = a[id];
  const second = b[id];
  const firstDate = moment(first, dateTimeFormatStrings, true);
  const secondDate = moment(second, dateTimeFormatStrings, true);
  if (firstDate.isValid() && secondDate.isValid()) {
    if (desc) {
      return firstDate.isSameOrBefore(secondDate) ? 1 : -1;
    }
    return firstDate.isSameOrAfter(secondDate) ? 1 : -1;
  }
  if (desc) {
    return first <= second ? 1 : -1;
  }
  return first >= second ? 1 : -1;
};

// export { getData, storeData, actionCreator, actionTryCatchCreator, sortFunc };
