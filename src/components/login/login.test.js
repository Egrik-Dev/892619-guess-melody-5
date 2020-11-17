import React from 'react';
import renderer from 'react-test-renderer';
import {LoginScreen} from './login';

it(`Should LoginScreen render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(<LoginScreen
      onSubmit={noop}
      onReplayClickButton={noop}
      resetGame={noop}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
