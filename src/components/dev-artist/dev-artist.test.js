import React from 'react';
import renderer from 'react-test-renderer';
import GameArtistScreen from './dev-artist';

const question = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [{
    picture: `https://api.adorable.io/avatars/128/0`,
    artist: `John Snow`,
  }, {
    picture: `https://api.adorable.io/avatars/128/1`,
    artist: `Jack Daniels`,
  }, {
    picture: `https://api.adorable.io/avatars/128/2`,
    artist: `Jim Beam`,
  }],
};

it(`Should GameArtistScreen render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create((<GameArtistScreen
      playingPlayers={[true, false, false, false]}
      mistakes={3}
      onAnswer={noop}
      onPlayButtonClick={noop}
      question={question}
    />), {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
