import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';
import {MAX_MISTAKE_COUNT} from '../../const';

it(`Should WelcomeScreen render correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      errorsCount={MAX_MISTAKE_COUNT}
      onPlayButtonClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
