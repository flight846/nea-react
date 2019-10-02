import moment from 'moment-timezone';

const storeData = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.log('storeData', error);
  }
};

const getData = (key) => {
  let res = '';
  try {
    res = localStorage.getItem(key);
  } catch (error) {
    console.log('getData', error);
  }
  return res;
};

const actionCreator = (actionName, extraField = []) => {
  const actionType = {
    NAME: actionName,
    PENDING: `${actionName}_PENDING`,
    SUCCESS: `${actionName}_SUCCESS`,
    ERROR: `${actionName}_ERROR`,
  };
  extraField.forEach((field) => {
    actionType[field] = `${actionName}_${field}`;
  });

  return actionType;
};

export const dateFormatString = 'DD MMM YYYY';
export const timeFormatString = 'hh:mm A';

export const dateStringFromDate = (date) => moment(date).format(dateFormatString);
export const timeStringFromDate = (date) => moment(date).format(timeFormatString);

export { getData, storeData, actionCreator };
