export const GameType = {
  ARTIST: `artist`,
  GENRE: `genre`
};

export const GenreType = {
  CLASSIC: `classic`,
  ROCK: `rock`,
  HIP_HOP: `hip-hop`,
  POP: `pop`
};

export const GenreOnRus = new Map([
  [GenreType.CLASSIC, `классика`],
  [GenreType.ROCK, `рок`],
  [GenreType.HIP_HOP, `хип-хоп`],
  [GenreType.POP, `поп`]
]);

export const MAX_MISTAKE_COUNT = 20;
