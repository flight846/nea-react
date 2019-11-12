/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/prefer-default-export */
import { request } from 'utils/request';

const API = {
  AUTHENTICATE_TOKEN: '/api/authenticate/token',
  GET_LIST_TASKS_CLAIM:
    '/starhub-nea-vcs2/api-documentation/EHI-GraviTrapAudit/gtAudit/auditTasks/commonPool/search',
  ANALYST_TASK_SEARCH:
    '/starhub-nea-vcs2/api-documentation/EHI-GraviTrapAudit/gtAudit/auditTasks/analystTasks/search',
  COMMON_POOL_SEARCH:
    '/starhub-nea-vcs2/api-documentation/EHI-GraviTrapAudit/gtAudit/auditTasks/commonPool/search',
  COMMON_POOL_CLAIM:
    '/starhub-nea-vcs2/api-documentation/EHI-GraviTrapAudit/gtAudit/auditTasks/commonPool/claim',
};

export const authenticateTokenService = token =>
  request({
    host: 'https://virtserver.swaggerhub.com',
    url: API.AUTHENTICATE_TOKEN,
    method: 'POST',
    data: { token },
  });

export const getListTasksClaim = (
  data = {
    pageSize: 0,
    pageIndex: 0,
    sortOrder: 'string',
    sortColumn: 'string',
  },
) =>
  request({
    host: 'https://virtserver.swaggerhub.com',
    url: API.GET_LIST_TASKS_CLAIM,
    method: 'POST',
    data,
  });

export const searchAnalystTasks = (
  data = {
    pageSize: 0,
    pageIndex: 0,
    sortOrder: 'string',
    sortColumn: 'string',
  },
) =>
  request({
    host: 'https://virtserver.swaggerhub.com',
    url: API.ANALYST_TASK_SEARCH,
    method: 'POST',
    data,
  });

export const searchCommonPools = (
  data = {
    pageSize: 0,
    pageIndex: 0,
    sortOrder: 'string',
    sortColumn: 'string',
  },
) =>
  request({
    host: 'https://virtserver.swaggerhub.com',
    url: API.COMMON_POOL_SEARCH,
    method: 'POST',
    data,
  });

export const claimCommonPools = (
  data = {
    caseId: 'string',
  },
) =>
  request({
    host: 'https://virtserver.swaggerhub.com',
    url: API.COMMON_POOL_CLAIM,
    method: 'POST',
    data,
  });
