import axios from 'axios';
import { grantType, hostConfigs } from 'constants/index';
import { getData } from 'utils';

export const request = async ({
  host = '',
  url = '',
  method = 'GET',
  params = {},
  data = {},
  headers = {},
  _token,
}) => {
  const token = _token || await getData('token');
  const res = await axios({
    url: `${host || hostConfigs.development.HostAPI}${url}`,
    method,
    data,
    params,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${grantType} ${token}`,
      ...headers,
    },
  });
  return res;
};

export const fakeRequest = (response) => new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      status: 200,
      data: response,
    });
  }, 1500);
});

export default request;
