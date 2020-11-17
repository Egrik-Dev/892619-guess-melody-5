import MockAdapter from 'axios-mock-adapter';
import {createApi} from '../../services/api';
import {ActionType} from '../../actions/action';
import {checkAuth, login} from '../../actions/action-api';
import user from './user';

const api = createApi(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual({
    authorizationStatus: `NO_AUTH`
  });
});

it(`Reducer should update authorizationStatus to "auth"`, () => {
  expect(user({
    authorizationStatus: `NO_AUTH`
  }, {
    type: ActionType.CHANGE_USER_STATUS,
    payload: `AUTH`
  })).toEqual({
    authorizationStatus: `AUTH`
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkingAuthorization = checkAuth();

    apiMock
    .onGet(`/login`)
    .reply(200, [{fake: true}]);

    return checkingAuthorization(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_USER_STATUS,
          payload: `AUTH`
        });
      });
  });

  it(`Should make a correct API post response to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `test@test.ru`, password: `123456`};
    const loginFunc = login(fakeUser);

    apiMock
    .onPost(`/login`)
    .reply(200, [{fake: true}]);

    return loginFunc(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_USER_STATUS,
          payload: `AUTH`
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `/win-screen`
        });
      });
  });
});
