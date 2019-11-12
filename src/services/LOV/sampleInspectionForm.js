/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/prefer-default-export */
import { request } from 'utils/request';
import { SampleFindingStatusLOV } from 'constants/data-list';

const SPECIMEN_ADMINISTRATION_API = {
  GET_SPECIMENS: '/vcs2/app/specimen/lov',
  GET_SPECIES_FOR_SPECIMEN: '/vcs2/app/specimen/getInfoForSpecimen',
  GET_RODENT_SPECIMEN_TYPE: '/vcs2/app/mastercd/lov',
  GET_SURVEY_PURPOSE: '/vcs2/app/mastercd/lov',
  GET_SAMPLE_TREATMENT: '/vcs2/app/mastercd/lov',
};

export const getSpecimenLOV = () =>
  request({
    url: SPECIMEN_ADMINISTRATION_API.GET_SPECIMENS,
    method: 'GET',
    functionName: 'getSpecimenLov',
  });

export const getSpeciesForSpecimenLOV = (
  data = {
    specimenTypeCode: 'string',
  },
) =>
  request({
    url: SPECIMEN_ADMINISTRATION_API.GET_SPECIES_FOR_SPECIMEN,
    method: 'POST',
    data,
    functionName: 'getInfoForSpecimen',
  });

export const getRodentSpecimenTypeLOV = (
  data = {
    mastCode: 'VCS_SPM_TP',
  },
) =>
  request({
    url: SPECIMEN_ADMINISTRATION_API.GET_RODENT_SPECIMEN_TYPE,
    method: 'POST',
    data,
    functionName: 'getMasterCdLov',
  });

export const getSurveyPurposeLOV = (
  data = {
    mastCode: 'VCS_SMP_TP',
  },
) =>
  request({
    url: SPECIMEN_ADMINISTRATION_API.GET_SURVEY_PURPOSE,
    method: 'POST',
    data,
    functionName: 'getMasterCdLov',
  });

export const getSampleTreatmentLOV = (
  data = {
    mastCode: 'VCS_SMP_TM',
  },
) =>
  request({
    url: SPECIMEN_ADMINISTRATION_API.GET_SAMPLE_TREATMENT,
    method: 'POST',
    data,
    functionName: 'getMasterCdLov',
  });

export const getFindingStatusLOV = (
  data = {
    mastCode: 'VCS_SMP_TT',
  },
) => ({ status: 200, data: SampleFindingStatusLOV });
