import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {LoseScreen} from './lose';

configure({adapter: new Adapter()});

it(`click on "Play again" button`, () => {
  const handleReplayButtonClick = jest.fn();
  const handleResetAction = jest.fn();

  const wrapper = shallow(
      <LoseScreen
        onReplayClickButton={handleReplayButtonClick}
        resetGame={handleResetAction}
      />
  );

  wrapper.find(`.replay`).simulate(`click`);
  expect(handleReplayButtonClick).toHaveBeenCalledTimes(1);
  expect(handleResetAction).toHaveBeenCalledTimes(1);
});
