import update from 'react-addons-update';
import { AUTHENTICATE_TOKEN, UNAUTHENTICATE } from './action';

const initialState = {
  ui: {
    isAuthenticating: false,
  },
  data: {
    user: {
      hasFamilyPass: false,
      isEligible: false,
    },
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTHENTICATE_TOKEN.PENDING:
      return update(state, {
        ui: {
          isAuthenticating: { $set: true },
        },
      });
    case AUTHENTICATE_TOKEN.SUCCESS:
      return update(state, {
        ui: {
          isAuthenticating: { $set: false },
        },
        data: {
          isEligible: { $set: true },
          hasFamilyPass: { $set: payload.hasFamilyPass },
        },
      });
    case AUTHENTICATE_TOKEN.ERROR:
      return update(state, {
        ui: {
          isAuthenticating: { $set: false },
        },
        data: {
          isEligible: { $set: false },
        },
      });
    case UNAUTHENTICATE:
      return update(state, {
        ui: {
          isAuthenticating: { $set: false },
        },
        data: {
          isEligible: { $set: false },
        },
      });
    default:
      return state;
  }
};

export default reducer;
