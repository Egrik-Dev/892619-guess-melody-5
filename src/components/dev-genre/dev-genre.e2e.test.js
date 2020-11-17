import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GameGenreScreen from './dev-genre';

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `path`,
        genre: `rock`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `blues`,
      },
    ],
  },
};

const noop = () => {};

configure({adapter: new Adapter()});

it(`When the user makes a selection the form is not sent`, () => {
  const {question} = mock;
  const handleSubmitForm = jest.fn();
  const wrapper = shallow(
      <GameGenreScreen
        userAnswers={[false, false, false, false]}
        mistakes={3}
        onAnswer={noop}
        onSubmitForm={handleSubmitForm}
        onChooseMelody={noop}
        onPlayButtonClick={noop}
        playingPlayers={[true, false, false, false]}
        questions={question}
      />
  );

  const formSendPrevention = jest.fn();
  wrapper.find(`form`).simulate(`submit`, {
    preventDefault: formSendPrevention,
  });
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
  expect(handleSubmitForm).toHaveBeenCalledTimes(1);
});
