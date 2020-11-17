import {ActionType} from '../../actions/action';
import gameProcess from './game-process';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(gameProcess(void 0, {})).toEqual({
    mistakes: 0,
    step: 0,
    isLoading: true
  });
});

it(`Reducer should increment current step by a given value`, () => {
  expect(gameProcess({
    mistakes: 0,
    step: 0,
    isLoading: true
  }, {
    type: ActionType.INC_STEP,
    payload: 1
  })).toEqual({
    mistakes: 0,
    step: 1,
    isLoading: true
  });
});

it(`Reducer should increment mistake by a given value`, () => {
  expect(gameProcess({
    mistakes: 0,
    step: 1,
    isLoading: true
  }, {
    type: ActionType.INK_MISTAKE,
    payload: 1
  })).toEqual({
    mistakes: 1,
    step: 1,
    isLoading: true
  });
});

it(`Reducer should reset all steps and mistakes`, () => {
  expect(gameProcess({
    mistakes: 1,
    step: 1,
    isLoading: true
  }, {
    type: ActionType.RESET_GAME
  })).toEqual({
    mistakes: 0,
    step: 0,
    isLoading: true
  });
});

it(`Reducer should change the Loading flag`, () => {
  expect(gameProcess({
    mistakes: 0,
    step: 0,
    isLoading: true
  }, {
    type: ActionType.LOAD_DONE
  })).toEqual({
    mistakes: 0,
    step: 0,
    isLoading: false
  });
});

