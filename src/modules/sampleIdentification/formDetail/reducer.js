import update from 'react-addons-update';
import _ from 'lodash';

import {
  GET_SAMPLE_INFO,
  FORM_DETAIL_CERTIFY_FINDINGS,
  FORM_DETAIL_RESET_REDUCER,
  FORM_DETAIL_ADD_FINDINGS,
  FORM_DETAIL_SUBMIT_FINDINGS,
  FORM_DETAIL_TOGGLE_FINDINGS,
  FORM_DETAIL_REMOVE_FINDINGS,
} from './action';

const initialState = {
  ui: {
    isLoading: false,
    errorMessage: null,
    isSubmitted: false,
    editingFindingIds: new Set(),
  },
  data: {
    formDetail: null,
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FORM_DETAIL_SUBMIT_FINDINGS.PENDING:
    case FORM_DETAIL_CERTIFY_FINDINGS.PENDING:
    case GET_SAMPLE_INFO.PENDING: {
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
      });
    }
    case GET_SAMPLE_INFO.SUCCESS: {
      return update(state, {
        ui: {
          isLoading: { $set: false },
          errorMessage: { $set: null },
        },
        data: {
          formDetail: { $set: payload },
        },
      });
    }
    case FORM_DETAIL_CERTIFY_FINDINGS.SUCCESS: {
      return update(state, {
        ui: {
          isLoading: { $set: false },
          errorMessage: { $set: null },
          isSubmitted: { $set: true },
        },
      });
    }
    case FORM_DETAIL_CERTIFY_FINDINGS.ERROR: {
      return update(state, {
        ui: {
          isLoading: { $set: false },
          errorMessage: { $set: payload },
        },
      });
    }
    case FORM_DETAIL_SUBMIT_FINDINGS.SUCCESS: {
      const data = payload;
      const {
        ui: { editingFindingIds },
        data: {
          formDetail: {
            analysis: { habitatGroups },
          },
        },
      } = state;
      const { findingsId } = data.sampleFindingsVO;
      let habitatIndex = -1;
      let sampleIndex = -1;
      let findingIndex = -1;
      habitatGroups.forEach((habitat, hIndex) => {
        if (habitat.samples) {
          habitat.samples.forEach((sample, sIndex) => {
            if (sample.findings) {
              sample.findings.forEach((finding, fIndex) => {
                if (finding.findingsId === findingsId) {
                  habitatIndex = hIndex;
                  sampleIndex = sIndex;
                  findingIndex = fIndex;
                }
              });
            }
          });
        }
      });
      if (habitatIndex === -1 || sampleIndex === -1 || findingIndex === -1) {
        return update(state, {
          ui: {
            isLoading: { $set: false },
            errorMessage: { $set: 'Failed to submit findings' },
          },
        });
      }
      if (editingFindingIds.has(findingsId)) editingFindingIds.delete(findingsId);
      habitatGroups[habitatIndex].samples[sampleIndex].findings[findingIndex] = data;
      return update(state, {
        ui: {
          isLoading: { $set: false },
          errorMessage: { $set: null },
          editingFindingIds: { $set: editingFindingIds },
        },
        data: {
          formDetail: {
            analysis: {
              habitatGroups: { $set: habitatGroups },
            },
          },
        },
      });
    }
    case FORM_DETAIL_SUBMIT_FINDINGS.ERROR:
    case GET_SAMPLE_INFO.ERROR: {
      return update(state, {
        ui: {
          isLoading: { $set: false },
          errorMessage: { $set: payload },
        },
      });
    }
    case FORM_DETAIL_TOGGLE_FINDINGS: {
      const {
        ui: { editingFindingIds },
      } = state;
      if (editingFindingIds.has(payload)) editingFindingIds.delete(payload);
      else editingFindingIds.add(payload);
      return update(state, {
        ui: {
          editingFindingIds: { $set: editingFindingIds },
        },
      });
    }
    case FORM_DETAIL_ADD_FINDINGS: {
      const sampleId = payload;
      const {
        ui: { editingFindingIds },
        data: {
          formDetail: {
            analysis: { habitatGroups },
          },
        },
      } = state;
      let habitatIndex = -1;
      let sampleIndex = -1;
      habitatGroups.forEach((habitat, hIndex) => {
        if (habitat.samples) {
          habitat.samples.forEach((sample, sIndex) => {
            if (sample.sampleId === sampleId) {
              habitatIndex = hIndex;
              sampleIndex = sIndex;
            }
          });
        }
      });
      if (habitatIndex === -1 || sampleIndex === -1) {
        return update(state, {
          ui: {
            isLoading: { $set: false },
            errorMessage: { $set: 'Failed to add findings' },
          },
        });
      }
      const findingsId = _.uniqueId('local_finding_');
      editingFindingIds.add(findingsId);
      const findingEmpty = {
        findingsId,
        findingStatus: 'Pending',
        specimenName: '',
        speciesName: '',
        vectorOfDisease: '',
        purpose: '',
        researcherName: '',
        specimenStage: [],
        specimenType: '',
        remarks: '',
        sampleTreatment: '',
      };
      if (habitatGroups[habitatIndex].samples[sampleIndex].findings) {
        habitatGroups[habitatIndex].samples[sampleIndex].findings.push(findingEmpty);
      } else {
        habitatGroups[habitatIndex].samples[sampleIndex].findings = [findingEmpty];
      }
      return update(state, {
        ui: {
          isLoading: { $set: false },
          errorMessage: { $set: null },
          editingFindingIds: { $set: editingFindingIds },
        },
        data: {
          formDetail: {
            analysis: {
              habitatGroups: { $set: habitatGroups },
            },
          },
        },
      });
    }
    case FORM_DETAIL_REMOVE_FINDINGS: {
      const { findingsId, sampleId } = payload;
      const {
        ui: { editingFindingIds },
        data: {
          formDetail: {
            analysis: { habitatGroups },
          },
        },
      } = state;
      let habitatIndex = -1;
      let sampleIndex = -1;
      habitatGroups.forEach((habitat, hIndex) => {
        if (habitat.samples) {
          habitat.samples.forEach((sample, sIndex) => {
            if (sample.sampleId === sampleId) {
              habitatIndex = hIndex;
              sampleIndex = sIndex;
            }
          });
        }
      });
      if (habitatIndex === -1 || sampleIndex === -1) {
        return update(state, {
          ui: {
            isLoading: { $set: false },
            errorMessage: { $set: 'Failed to remove findings' },
          },
        });
      }
      editingFindingIds.delete(findingsId);
      const fIndex = habitatGroups[habitatIndex].samples[sampleIndex].findings.findIndex(
        item => item.findingsId === findingsId,
      );
      habitatGroups[habitatIndex].samples[sampleIndex].findings.splice(fIndex, 1);
      return update(state, {
        ui: {
          isLoading: { $set: false },
          errorMessage: { $set: null },
          editingFindingIds: { $set: editingFindingIds },
        },
        data: {
          formDetail: {
            analysis: {
              habitatGroups: { $set: habitatGroups },
            },
          },
        },
      });
    }
    case FORM_DETAIL_RESET_REDUCER:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
