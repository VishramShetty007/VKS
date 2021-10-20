import { INITIAL_STATE_USER as INITIAL_STATE } from './user.data';
import { UserActionType } from './user.type';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionType.MEMBER_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        details: action.payload.details,
        token: action.payload.token
      };

    case UserActionType.MEMBER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        details: null,
        token: null,
        tslDetails: null,
        status: null
      };

    default:
      return state;
  }
};
