import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {WinScreen} from './win-screen';

configure({adapter: new Adapter()});

it(`click on "Play again" button`, () => {
  const handleReplayButtonClick = jest.fn();
  const handleResetAction = jest.fn();

  const wrapper = shallow(
      <WinScreen
        onReplayClickButton={handleReplayButtonClick}
        resetGame={handleResetAction}
        mistakes={2}
        step={7}
      />
  );

  wrapper.find(`.replay`).simulate(`click`);
  expect(handleReplayButtonClick).toHaveBeenCalledTimes(1);
  expect(handleResetAction).toHaveBeenCalledTimes(1);
});
