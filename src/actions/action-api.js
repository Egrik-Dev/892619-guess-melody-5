import {ActionCreator} from './action';

export const fetchQuestions = () => (dispatch, _getState, api) => {
  api.get(`/questions`)
    .then(({data}) => dispatch(ActionCreator.loadQuestions(data)));
};
