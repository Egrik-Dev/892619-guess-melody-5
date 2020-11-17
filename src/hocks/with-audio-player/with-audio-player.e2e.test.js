import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withAudioPlayer from './with-audio-player';

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

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withAudioPlayer(MockComponent);

it(`Should create active players arr`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        onAnswer={() => {}}
        quantityAnswersChoice={4}
        questions={mock.question}
      />);

  expect(wrapper.state().playingPlayers).toEqual([true, false, false, false]);
});
