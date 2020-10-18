import {extend} from '../utils';
import {ActionType} from './action';
import {ARRAY_MOCKS} from '../mocks/questions';
import {MAX_MISTAKE_COUNT} from '../const';

const initialState = {
  mistakes: 0,
  step: 0,
  questions: ARRAY_MOCKS
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INC_STEP:
      return extend(state, {step: state.step + action.payload});

    case ActionType.INK_MISTAKE:
      if (state.mistakes >= MAX_MISTAKE_COUNT) {
        return extend({}, initialState);
      }

      return extend(state, {mistakes: state.mistakes + action.payload});

    case ActionType.RESET_GAME:
      return extend({}, initialState);

    default:
      break;
  }

  return state;
};
