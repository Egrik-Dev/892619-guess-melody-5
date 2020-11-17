import React from 'react';
import renderer from 'react-test-renderer';
import {WinScreen} from './win-screen';

it(`Should WinScreen render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(<WinScreen
      onReplayClickButton={noop}
      mistakes={2}
      step={7}
      resetGame={noop}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
