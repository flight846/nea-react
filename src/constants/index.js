const HostAPI = 'http://localhost:3000';
const grantType = 'Bearer';
const defautToken = '';

const hostConfigs = {
  development: {
    HostAPI: 'https://virtserver.swaggerhub.com',
    grantType: 'Bearer',
    defautToken: '',
  },
  uat: {
    HostAPI: 'http://localhost:3000',
    grantType: 'Bearer',
    defautToken: '',
  },
  production: {
    HostAPI: 'http://localhost:3000',
    grantType: 'Bearer',
    defautToken: '',
  },
};

export { HostAPI, grantType, defautToken, hostConfigs };
