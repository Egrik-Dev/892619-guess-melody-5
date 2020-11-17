import {ActionCreator} from './action';
import {AuthorizationStatus} from '../const';

export const fetchQuestions = () => (dispatch, _getState, api) => (
  api.get(`/questions`)
    .then(({data}) => dispatch(ActionCreator.loadQuestions(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => {
      dispatch(ActionCreator.changeAuthorizationStatus(`AUTH`));
    })
);

export const login = ({userLogin: email, userPass: password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.changeAuthorizationStatus(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/win-screen`)))
);
