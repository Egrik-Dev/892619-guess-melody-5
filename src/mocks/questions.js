const StartSettings = {
  ERRORS_COUNT: 3
};

const ARRAY_MOCKS = [
  {
    gameType: `genre`,
    correctGenre: `rock`,
    answers: [{
      src: `https://muztron.com/pages/f-45254/a/8604da64b027bf7d150d4420b3cb47f1811a26c40b50e2483e7e6482e35a84be`,
      genre: `classic`
    }, {
      src: `https://muztron.com/pages/f-65707/a/4469354130bf101185b0e30936d96c91726f2c7a008f8118fdcfebe6cf9f6680`,
      genre: `rock`
    }, {
      src: `http://muztron.com/pages/f-541862/a/371f7ef789bfe723ce2353244abae175e2e350c2280bc165c6f64d92a9cfc170`,
      genre: `hip-hop`
    }, {
      src: `https://rus.megapesni.com/get/Pi18PZKu8oT0-nZDuyBvDw/1602661015/7802ff07/britney-spears-toxic.mp3`,
      genre: `pop`
    }
    ],
  },
  {
    gameType: `artist`,
    song: {
      artist: `ColdPlay`,
      src: `https://w1.musify.club/track/dl/14338/coldplay-clocks.mp3`
    },
    answers: [{
      picture: `https://www.fillmurray.com/128/130`,
      artist: `Jay-Z`,
    }, {
      picture: `https://www.placecage.com/128/130`,
      artist: `Eminem`,
    }, {
      picture: `https://www.stevensegallery.com/128/127`,
      artist: `ColdPlay`,
    }
    ]
  }
];

export default {ARRAY_MOCKS, StartSettings};
