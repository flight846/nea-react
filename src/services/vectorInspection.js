import { request } from 'utils/request';

const VECTOR_INSPECTION_API = {
  GET_GROUND_SURVEILLANCE_LISTING: '/inspmgmt/ground/surveillanceforredcluster',
  GET_GROUND_SURVEILLANCE_DETAIL: '/inspmgmt/ground/surveillanceforredcluster/details',
  GET_QUERY_INSPECTION_FORM_STATUSES: '/vcs2/app/inspmgmt/queryinspectionform/listing',
  GET_QUERY_INSPECTION_FORM_DETAIL: '/vcs2/app/inspmgmt/queryinspectionform/detail',
  GET_DEPOSIT_LISTING: '/starhub-nea-vcs2/api-documentation/InspectionManagement/inspmgmt/sample/deposit/listing',
  GET_SEND_LISTING: '/starhub-nea-vcs2/api-documentation/InspectionManagement/inspmgmt/sample/send/listing',
  VALIDATE_BARCODE_DEPOSIT:
    '/starhub-nea-vcs2/api-documentation/InspectionManagement/inspmgmt/sample/deposit/validatebarcode',
  VALIDATE_BARCODE_SEND:
    '/starhub-nea-vcs2/api-documentation/InspectionManagement/inspmgmt/sample/send/validatebarcode',
  SUBMIT_DEPOSIT: '/starhub-nea-vcs2/api-documentation/InspectionManagement/inspmgmt/sample/deposit/submit',
  SUBMIT_SEND: '/starhub-nea-vcs2/api-documentation/InspectionManagement/inspmgmt/sample/send/submit',
  GET_PENDING_SOF_LISTING: '/starhub-nea-vcs2/api-documentation/InspectionManagement/inspmgmt/sof/listing',
  GET_SOF_DETAIL: '/starhub-nea-vcs2/api-documentation/InspectionManagement/inspmgmt/sof/detail',
  GET_TRACK_LISTING: '/starhub-nea-vcs2/api-documentation/InspectionManagement/inspmgmt/sample/track/listing',
};

export const getGroundSurveillanceDetailService = (
  data = {
    rccId: '16003',
  },
) =>
  request({
    url: VECTOR_INSPECTION_API.GET_GROUND_SURVEILLANCE_DETAIL,
    method: 'POST',
    data,
    functionName: 'groundSurveillanceForRedClusterDetail',
  });

export const getGroundSurveillanceListingService = (data = {}) =>
  request({
    url: VECTOR_INSPECTION_API.GET_GROUND_SURVEILLANCE_LISTING,
    method: 'GET',
    data,
    functionName: 'groundSurveillanceForRedCluster',
  });

export const getQueryInspectionFormDetail = (
  data = {
    object: {
      value: {
        inspectionId: 'VC-20215-11700',
      },
    },
  },
) =>
  request({
    url: VECTOR_INSPECTION_API.GET_QUERY_INSPECTION_FORM_DETAIL,
    method: 'POST',
    data,
    functionName: 'viewQueryInspectionFormDetail',
  });

export const getQueryInspectionFormStatuses = (
  data = {
    roCdList: ['string'],
  },
) =>
  request({
    url: VECTOR_INSPECTION_API.GET_QUERY_INSPECTION_FORM_STATUSES,
    method: 'POST',
    data,
    functionName: 'listQueryInspectionForm',
  });

export const getDepositListingService = () =>
  request({
    host: 'https://virtserver.swaggerhub.com',
    url: VECTOR_INSPECTION_API.GET_DEPOSIT_LISTING,
    method: 'GET',
  });

export const getSendListingService = () =>
  request({
    host: 'https://virtserver.swaggerhub.com',
    url: VECTOR_INSPECTION_API.GET_SEND_LISTING,
    method: 'GET',
  });

export const validateBarcodeDepositService = (data = { barcodeId: 'string' }) =>
  request({
    host: 'https://virtserver.swaggerhub.com',
    url: VECTOR_INSPECTION_API.VALIDATE_BARCODE_DEPOSIT,
    method: 'GET',
    params: data,
  });

export const validateBarcodeSendService = (data = { barcodeId: 'string' }) =>
  request({
    host: 'https://virtserver.swaggerhub.com',
    url: VECTOR_INSPECTION_API.VALIDATE_BARCODE_SEND,
    method: 'GET',
    params: data,
  });

export const submitDepositService = (
  data = {
    samples: [
      {
        barcodeId: 'string',
        rejectReasonCode: 'string',
        rejectReasonOther: 'string',
        rejectFileIds: ['string'],
      },
    ],
  },
) =>
  request({
    host: 'https://virtserver.swaggerhub.com',
    url: VECTOR_INSPECTION_API.SUBMIT_DEPOSIT,
    method: 'POST',
    data,
  });

export const submitSendService = (
  data = {
    samples: [
      {
        barcodeId: 'string',
        rejectReasonCode: 'string',
        rejectReasonOther: 'string',
        rejectFileIds: ['string'],
      },
    ],
  },
) =>
  request({
    host: 'https://virtserver.swaggerhub.com',
    url: VECTOR_INSPECTION_API.SUBMIT_SEND,
    method: 'POST',
    data,
  });

export const getPendingSOFListingService = () =>
  request({
    host: 'https://virtserver.swaggerhub.com',
    url: VECTOR_INSPECTION_API.GET_PENDING_SOF_LISTING,
    method: 'GET',
  });

export const getSOFDetailService = data =>
  request({
    host: 'https://virtserver.swaggerhub.com',
    url: VECTOR_INSPECTION_API.GET_SOF_DETAIL,
    method: 'POST',
    data,
  });

export const getRodentInspectionList = () =>
  request({
    host: 'https://virtserver.swaggerhub.com',
    url: VECTOR_INSPECTION_API.GET_PENDING_SOF_LISTING,
    method: 'GET',
  });

export const getFoggingList = () =>
  request({
    host: 'https://virtserver.swaggerhub.com',
    url: VECTOR_INSPECTION_API.GET_PENDING_SOF_LISTING,
    method: 'GET',
  });

export const getAuditTaskList = () =>
  request({
    host: 'https://virtserver.swaggerhub.com',
    url: VECTOR_INSPECTION_API.GET_PENDING_SOF_LISTING,
    method: 'GET',
  });

export const getLateSubmissionList = () =>
  request({
    host: 'https://virtserver.swaggerhub.com',
    url: VECTOR_INSPECTION_API.GET_PENDING_SOF_LISTING,
    method: 'GET',
  });

export const getBlockSummaryList = data =>
  request({
    host: 'https://virtserver.swaggerhub.com',
    url: VECTOR_INSPECTION_API.GET_PENDING_SOF_LISTING,
    method: 'GET',
  });

export const getTrackListingService = data =>
  request({
    host: 'https://virtserver.swaggerhub.com',
    url: VECTOR_INSPECTION_API.GET_TRACK_LISTING,
    method: 'POST',
    data,
  });
