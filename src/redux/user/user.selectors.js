import { createSelector } from 'reselect';

export const selectUser = (state) => state.user;

export const checkIfLoggedIn = createSelector(
  [selectUser],
  (user) => user.isLoggedIn
);

export const selectUserAuthToken = createSelector(
  [selectUser],
  (user) => user.token
);
