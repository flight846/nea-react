/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/prefer-default-export */
import { request } from 'utils/request';

const FILE_OPERATION_API = {
  UPLOAD: '/vcs2/app/fileOperation/upload',
  DOWNLOAD: '/starhub-nea-vcs2/api-documentation/CommonAPI/fileoperation/download',
  DELETE: '/starhub-nea-vcs2/api-documentation/CommonAPI/fileoperation/delete',
  GET_CONFIGS: '/vcs2/app/fileOperation/configurations',
};

export const uploadFile = (
  data = {
    file: {},
    fileStatus: 'string',
    submissionType: 'string',
    submissionId: 'string',
  },
) =>
  request({
    url: FILE_OPERATION_API.UPLOAD,
    method: 'POST',
    data,
    functionName: 'uploadFile',
  });

export const downloadFile = (
  data = {
    fileId: '',
  },
) =>
  request({
    host: 'https://virtserver.swaggerhub.com',
    url: `${FILE_OPERATION_API.DOWNLOAD}?query=${data.fileId}`,
    method: 'GET',
  });

export const deleteFile = (
  data = {
    fileId: '',
  },
) =>
  request({
    host: 'https://virtserver.swaggerhub.com',
    url: `${FILE_OPERATION_API.DELETE}?fileId=${data.fileId}`,
    method: 'DELETE',
  });

export const getSysConfigurations = (
  data = {
    submissionType: '',
    submissionId: '',
  },
) =>
  request({
    url: FILE_OPERATION_API.GET_CONFIGS,
    method: 'POST',
    data,
    functionName: 'getSysConfigurations',
  });
