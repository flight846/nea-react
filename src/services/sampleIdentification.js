import { request } from 'utils/request';

const SAMPLE_IDENTIFICATION_API = {
  CLAIM_SAMPLE: '/vcs2/app/sampleId/identify/claimSample',
  GET_LIST_TASKS_CLAIM: '/vcs2/app/sampleId/identify/commonpool',
  VALIDATE_SCANNED_BARCODE: '/vcs2/app/sampleId/recSamp/validateBarcode',
  GET_SAMPLE_IDENTIFICATION_MY_WORKSPACE: '/vcs2/app/sampleId/identify/workspace',
  GET_QUERIES_STATUS: '/vcs2/app/sampleId/query/sampleStatus',
  GET_QUERY_INSPECTION_FORM_STATUSES: '/vcs2/app/inspmgmt/queryinspectionform/listing',
  GET_SAMPLE_INFO: '/vcs2/app/sampleId/identify/sampleInfo',
  SUBMIT_RECEIVED_SAMPLE: '/vcs2/app/sampleId/recSamp/submitReceivedSamples',
  CERTIFY_FINDINGS: '/vcs2/app/sampleId/identify/certifyInspectionForm',
  SUBMIT_FINDINGS: '/vcs2/app/sampleId/identify/submitFindings',
  GET_EMAIL_GROUPS: '/vcs2/app/sampleId/identify/getCertifyGroups',
};

export const getListTasksClaim = (data = { roCdList: ['string'] }) =>
  request({
    url: SAMPLE_IDENTIFICATION_API.GET_LIST_TASKS_CLAIM,
    method: 'GET',
    functionName: 'ehiCommonpool',
    data,
  });

export const claimSampleService = (data = { barcodeId: 'string' }) =>
  request({
    url: SAMPLE_IDENTIFICATION_API.CLAIM_SAMPLE,
    method: 'POST',
    data,
    functionName: 'claimSample',
  });

export const validateScannedBarcode = (data = { barcodeId: 'string' }) =>
  request({
    url: SAMPLE_IDENTIFICATION_API.VALIDATE_SCANNED_BARCODE,
    method: 'POST',
    data,
    functionName: 'validateRecSampleBarcode',
  });

export const getSampleIdentificationMyWorkspace = () =>
  request({
    url: SAMPLE_IDENTIFICATION_API.GET_SAMPLE_IDENTIFICATION_MY_WORKSPACE,
    method: 'GET',
    functionName: 'ehiWorkspace',
  });

export const getQueriesStatus = () =>
  request({
    url: SAMPLE_IDENTIFICATION_API.GET_QUERIES_STATUS,
    method: 'GET',
    functionName: 'listQuerySampleStatus',
  });

export const getSampleInfo = (
  data = {
    barcodeId: 'string',
  },
) =>
  request({
    url: SAMPLE_IDENTIFICATION_API.GET_SAMPLE_INFO,
    method: 'POST',
    data,
    functionName: 'querySampleInfo',
  });

export const submitReceivedSample = (
  data = {
    receiveList: [
      {
        barcodeId: 'string',
        rejReasonOth: 'string',
        rejReasonCdList: ['string'],
        rejFileList: ['string'],
      },
    ],
  },
) =>
  request({
    url: SAMPLE_IDENTIFICATION_API.SUBMIT_RECEIVED_SAMPLE,
    method: 'POST',
    data,
    functionName: 'submitReceivedSamples',
  });

export const certifyFindings = (
  data = {
    emailList: ['string'],
  },
) =>
  request({
    url: SAMPLE_IDENTIFICATION_API.CERTIFY_FINDINGS,
    method: 'POST',
    data,
    functionName: 'certifyInspectionForm',
  });

export const submitFindingService = (
  data = {
    barcodeId: 'string',
    sampleId: 'string',
    sampleFindingsVO: {
      findingsId: 'string',
      specimenCode: 'string',
      speciesCode: 'string',
      remarks: 'string',
      specimenTypeCode: 'string',
      sampleTreatmentCode: 'string',
      researchPurpose: 'string',
      researchBy: 'string',
      specimenStages: ['string'],
      maleCount: 0,
      femaleCount: 0,
      unidentifiedCount: 0,
      status: 'string',
    },
    sampleRejectionVO: {
      remarks: 'string',
      fileIdList: ['string'],
    },
  },
) =>
  request({
    url: SAMPLE_IDENTIFICATION_API.SUBMIT_FINDINGS,
    method: 'POST',
    data,
    functionName: 'submitFindings',
  });

export const getEmailGroupsLOV = () =>
  request({
    url: SAMPLE_IDENTIFICATION_API.GET_EMAIL_GROUPS,
    method: 'GET',
    functionName: 'getCertifyGroups',
  });
