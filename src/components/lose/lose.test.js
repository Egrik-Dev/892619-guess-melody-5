import React from 'react';
import renderer from 'react-test-renderer';
import {LoseScreen} from './lose';

it(`Should LoseScreen render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(<LoseScreen
      onReplayClickButton={noop}
      resetGame={noop}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
