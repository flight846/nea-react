const HostAPI = 'http://localhost:3000';
const grantType = 'Bearer';
const defautToken = '';

const hostConfigs = {
  development: {
    HostAPI: 'http://104.215.187.41:8080',
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

const UserRole = {
  Admin: 'Admin',
  EHI_Analyst: 'EHI_Analyst',
  EHI_Admin: 'EHI_Admin',
  RO_Officer: 'RO_Officer',
  RO_TL: 'RO_TL',
  Manager: 'Manager',
  RCU_Officer: 'RCU_Officer',
  RCU_TL: 'RCU_TL',
};

export { HostAPI, grantType, defautToken, hostConfigs, UserRole };
