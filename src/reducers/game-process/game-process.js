import {extend} from '../../utils';
import {ActionType} from '../../actions/action';

const initialState = {
  mistakes: 0,
  step: 0,
  isLoading: true
};

const gameProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INC_STEP:
      return extend(state, {step: state.step + action.payload});

    case ActionType.INK_MISTAKE:
      return extend(state, {mistakes: state.mistakes + action.payload});

    case ActionType.RESET_GAME:
      return extend(state, {mistakes: 0, step: 0});

    case ActionType.LOAD_DONE:
      return extend(state, {isLoading: false});

    default:
      break;
  }

  return state;
};

export default gameProcess;
