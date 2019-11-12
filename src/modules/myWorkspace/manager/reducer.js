import update from 'react-addons-update';
import {
  VECTOR_INSPECTION_GET_INSPECTION_REQUEST,
  VECTOR_INSPECTION_GET_INSPECTION_FORM_3,
  VECTOR_INSPECTION_GET_RODENT_AUDIT_EXPIRED_TASK,
  VECTOR_INSPECTION_GET_RODENT_AUDIT_SHOW_CAUSE,
  VECTOR_INSPECTION_GET_FOGGING_EXPIRED_TASK,
  VECTOR_INSPECTION_GET_FOGGING_RECOMMENDATION,
} from './action';

const initialState = {
  ui: {
    isLoading: false,
    errorMessage: null,
  },
  data: {
    requests: [],
    forms: [],
    rodentTasks: [],
    rodentShowCause: [],
    foggingTasks: [],
    foggingRecommendations: [],
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case VECTOR_INSPECTION_GET_INSPECTION_REQUEST.PENDING:
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
      });
    case VECTOR_INSPECTION_GET_INSPECTION_REQUEST.SUCCESS:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          requests: { $set: payload },
        },
      });
    case VECTOR_INSPECTION_GET_INSPECTION_REQUEST.ERROR:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          requests: { $set: [] },
        },
      });

    case VECTOR_INSPECTION_GET_INSPECTION_FORM_3.PENDING:
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
      });
    case VECTOR_INSPECTION_GET_INSPECTION_FORM_3.SUCCESS:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          forms: { $set: payload },
        },
      });
    case VECTOR_INSPECTION_GET_INSPECTION_FORM_3.ERROR:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          forms: { $set: [] },
        },
      });

    case VECTOR_INSPECTION_GET_RODENT_AUDIT_EXPIRED_TASK.PENDING:
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
      });
    case VECTOR_INSPECTION_GET_RODENT_AUDIT_EXPIRED_TASK.SUCCESS:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          rodentTasks: { $set: payload },
        },
      });
    case VECTOR_INSPECTION_GET_RODENT_AUDIT_EXPIRED_TASK.ERROR:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          rodentTasks: { $set: [] },
        },
      });

    case VECTOR_INSPECTION_GET_RODENT_AUDIT_SHOW_CAUSE.PENDING:
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
      });
    case VECTOR_INSPECTION_GET_RODENT_AUDIT_SHOW_CAUSE.SUCCESS:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          rodentShowCause: { $set: payload },
        },
      });
    case VECTOR_INSPECTION_GET_RODENT_AUDIT_SHOW_CAUSE.ERROR:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          rodentShowCause: { $set: [] },
        },
      });

    case VECTOR_INSPECTION_GET_FOGGING_EXPIRED_TASK.PENDING:
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
      });
    case VECTOR_INSPECTION_GET_FOGGING_EXPIRED_TASK.SUCCESS:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          foggingTasks: { $set: payload },
        },
      });
    case VECTOR_INSPECTION_GET_FOGGING_EXPIRED_TASK.ERROR:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          foggingTasks: { $set: [] },
        },
      });

    case VECTOR_INSPECTION_GET_FOGGING_RECOMMENDATION.PENDING:
      return update(state, {
        ui: {
          isLoading: { $set: true },
        },
      });
    case VECTOR_INSPECTION_GET_FOGGING_RECOMMENDATION.SUCCESS:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          foggingRecommendations: { $set: payload },
        },
      });
    case VECTOR_INSPECTION_GET_FOGGING_RECOMMENDATION.ERROR:
      return update(state, {
        ui: {
          isLoading: { $set: false },
        },
        data: {
          foggingRecommendations: { $set: [] },
        },
      });
    default:
      return state;
  }
};

export default reducer;
