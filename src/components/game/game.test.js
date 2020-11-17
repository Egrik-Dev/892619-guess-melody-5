import React from 'react';
import renderer from 'react-test-renderer';
import {GameScreen} from './game';

const questions = [
  {
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
  },
  {
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
  }
];

const noop = () => {};

describe(`Render GameScreen`, () => {
  it(`Should GameGenreScreen render correctly`, () => {
    const tree = renderer
    .create((<GameScreen
      step={0}
      onUserAnswer={noop}
      questions={questions}
      mistakes={2}
    />), {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should GameArtistScreen render correctly`, () => {
    const tree = renderer
    .create((<GameScreen
      step={1}
      onUserAnswer={noop}
      questions={questions}
      mistakes={2}
    />), {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
