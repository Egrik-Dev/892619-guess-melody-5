const AVATAR_URL = `https://api.adorable.io/avatars/128`;
const StartSettings = {
  ERRORS_COUNT: 3
};

const ARRAY_MOCKS = [
  {
    gameType: `genre`,
    correctGenre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `classic`
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `hip-hop`
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `pop`
    }
    ],
  },
  {
    gameType: `artist`,
    song: {
      artist: `ColdPlay`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`
    },
    answers: [{
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jay-Z`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Eminem`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `ColdPlay`,
    }
    ]
  }
];

export default {ARRAY_MOCKS, StartSettings};
