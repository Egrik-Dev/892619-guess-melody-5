import React from 'react';
import renderer from 'react-test-renderer';
import GameGenreScreen from './dev-genre';

const questions = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `blues`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `jazz`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }],
};

it(`Should GameGenreScreen render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create((<GameGenreScreen
      userAnswers={[true, false, true, true]}
      mistakes={2}
      onAnswer={noop}
      onSubmitForm={noop}
      onChooseMelody={noop}
      onPlayButtonClick={noop}
      playingPlayers={[true, false, false, false]}
      questions={questions}
    />), {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
