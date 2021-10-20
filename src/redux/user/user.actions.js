import { UserActionType } from './user.type';

export const handleMemberLogin = (value) => {
  return {
    type: UserActionType.MEMBER_LOGIN,
    payload: value
  };
};

export const handleMemberLogout = (value) => {
  return {
    type: UserActionType.MEMBER_LOGOUT,
    payload: value
  };
};
