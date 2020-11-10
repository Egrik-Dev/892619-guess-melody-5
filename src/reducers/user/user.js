import {extend} from '../../utils';
import {ActionType} from '../../actions/action';

const initialState = {
  authorizationStatus: `NO_AUTH`
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_USER_STATUS:
      return extend(state, {authorizationStatus: action.payload});

    default:
      break;
  }

  return state;
};

export default user;
