import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen';

configure({adapter: new Adapter()});

it(`click on "Start game" button`, () => {
  const handlePlayButtonClick = jest.fn();

  const wrapper = shallow(
      <WelcomeScreen
        onPlayButtonClick={handlePlayButtonClick}
      />
  );

  wrapper.find(`.welcome__button`).simulate(`click`);
  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
});
