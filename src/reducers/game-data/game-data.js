import {extend} from '../../utils';
import {ActionType} from '../../actions/action';

const initialState = {
  questions: []
};

const gameData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_QUESTIONS:
      return extend(state, {questions: action.payload});

    default:
      break;
  }

  return state;
};

export default gameData;
