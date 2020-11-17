import {ActionCreator, ActionType} from './action';

const mockArtist = {
  type: `artist`,
  song: {
    artist: `correct`,
    src: ``,
  },
  answers: [
    {
      artist: `correct`,
      picture: ``,
    }, {
      artist: `incorrect`,
      picture: ``,
    }, {
      artist: `incorrect-2`,
      picture: ``,
    },
  ]
};

const mockGenre = {
  type: `genre`,
  genre: `jazz`,
  answers: [
    {
      genre: `rock`,
      src: ``,
    }, {
      genre: `jazz`,
      src: ``,
    }, {
      genre: `blues`,
      src: ``,
    }, {
      genre: `blues`,
      src: ``,
    }]
};

describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementinting step return correct actions`, () => {
    expect(ActionCreator.nextStep()).toEqual({
      type: ActionType.INC_STEP,
      payload: 1
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload if answer for artist is correct`, () => {
    expect(ActionCreator.makeMistake(
        mockArtist,
        {
          artist: `correct`,
          picture: ``,
        }
    )).toEqual({
      type: ActionType.INK_MISTAKE,
      payload: 0,
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for artist is incorrect`, () => {
    expect(ActionCreator.makeMistake(
        mockArtist,
        {
          artist: `incorrect`,
          picture: ``,
        }
    )).toEqual({
      type: ActionType.INK_MISTAKE,
      payload: 1,
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload if answer for genre is correct`, () => {
    expect(ActionCreator.makeMistake(
        mockGenre,
        [false, true, false, false]
    )).toEqual({
      type: ActionType.INK_MISTAKE,
      payload: 0,
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for genre is incorrect`, () => {
    expect(ActionCreator.makeMistake(
        mockGenre,
        [true, true, false, true]
    )).toEqual({
      type: ActionType.INK_MISTAKE,
      payload: 1,
    });
  });

  it(`Action creator for reset game returns action with undefined payload`, () => {
    expect(ActionCreator.resetGame())
    .toEqual({
      type: ActionType.RESET_GAME
    });
  });
});
