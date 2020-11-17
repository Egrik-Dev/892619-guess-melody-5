import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ItemMelody from './item-melody';

configure({adapter: new Adapter()});

it(`Click on a melody passes the id and Boolean value to the callback function`, () => {
  const handleChooseMelody = jest.fn();

  const wrapper = shallow(
      <ItemMelody
        onChooseMelody={handleChooseMelody}
        id={2}
        userAnswer={false}
      />
  );

  wrapper.find(`.game__input`).simulate(`change`, {target: {checked: true}});
  expect(handleChooseMelody).toHaveBeenCalledTimes(1);
  expect(handleChooseMelody.mock.calls[0][0]).toEqual(2);
});
