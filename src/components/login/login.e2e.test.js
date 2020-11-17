import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {LoginScreen} from './login';

configure({adapter: new Adapter()});

it(`click on "Play again" button`, () => {
  const handleReplayButtonClick = jest.fn();
  const handleResetAction = jest.fn();

  const wrapper = shallow(
      <LoginScreen
        onReplayClickButton={handleReplayButtonClick}
        onSubmit={() => {}}
        resetGame={handleResetAction}
      />
  );

  wrapper.find(`.replay`).simulate(`click`);
  expect(handleReplayButtonClick).toHaveBeenCalledTimes(1);
  expect(handleResetAction).toHaveBeenCalledTimes(1);
});
