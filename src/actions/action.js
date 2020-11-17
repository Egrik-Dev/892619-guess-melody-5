import {GameType} from '../const';

export const ActionType = {
  INC_STEP: `INC_STEP`,
  INK_MISTAKE: `INK_MISTAKE`,
  RESET_GAME: `RESET_GAME`,
  LOAD_QUESTIONS: `LOAD_QUESTIONS`,
  CHANGE_USER_STATUS: `CHANGE_USER_STATUS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_DONE: `LOAD_DONE`
};

const checkAnswerGenreGame = (questions, userAnswer) => {
  return userAnswer.every((it, i) => {
    return it === (questions.answers[i].genre === questions.genre);
  });
};

const checkAnswerArtistGame = (rightAnswer, userAnswer) => {
  return (rightAnswer.song.artist === userAnswer.artist);
};

export const ActionCreator = {
  resetGame: () => ({
    type: ActionType.RESET_GAME
  }),

  nextStep: () => ({
    type: ActionType.INC_STEP,
    payload: 1
  }),

  makeMistake: (question, answer) => {
    let answerIsCorrect = false;

    switch (question.type) {
      case GameType.ARTIST:
        answerIsCorrect = checkAnswerArtistGame(question, answer);
        break;

      case GameType.GENRE:
        answerIsCorrect = checkAnswerGenreGame(question, answer);
        break;
    }

    return {
      type: ActionType.INK_MISTAKE,
      payload: answerIsCorrect ? 0 : 1
    };
  },

  loadQuestions: (questions) => ({
    type: ActionType.LOAD_QUESTIONS,
    payload: questions
  }),

  changeAuthorizationStatus: (status) => ({
    type: ActionType.CHANGE_USER_STATUS,
    payload: status
  }),

  redirectToRoute: (route) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: route
  }),

  loadDone: () => ({
    type: ActionType.LOAD_DONE
  })
};
