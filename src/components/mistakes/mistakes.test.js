import React from 'react';
import renderer from 'react-test-renderer';
import Mistakes from './mistakes';

it(`Should Mistakes render correctly`, () => {
  const tree = renderer
    .create(<Mistakes
      mistakes={3}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
