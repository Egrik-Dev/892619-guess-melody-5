import React from 'react';
import renderer from 'react-test-renderer';
import ItemMelody from './item-melody';

it(`Should ItemMelody render correctly`, () => {
  const tree = renderer
    .create(<ItemMelody
      userAnswer={true}
      onChooseMelody={() => {}}
      id={1}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
