import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import GameGenreScreen from '../dev-genre/dev-genre';
import GameArtistScreen from '../dev-artist/dev-artist';
import {GameType} from '../../const';
import withActivePlayer from '../../hocks/with-active-player';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const ArtistQuestionScreenWrapped = withActivePlayer(GameArtistScreen);
const GenreQuestionScreenWrapped = withActivePlayer(GameGenreScreen);

const GameScreen = (props) => {
  const {step, mistakes, questions, resetGame, onUserAnswer} = props;
  const [gameGenre, gameArtist] = questions;
  const currentGame = questions[step];

  if (step >= questions.length || !questions) {
    resetGame();
    return <Redirect to="/" />;
  }

  switch (currentGame.gameType) {
    case GameType.GENRE:
      return (
        <GenreQuestionScreenWrapped
          onAnswer={onUserAnswer}
          questions={gameGenre}
          mistakes={mistakes}
        />
      );
    case GameType.ARTIST:
      return (
        <ArtistQuestionScreenWrapped
          onAnswer={onUserAnswer}
          question={gameArtist}
          mistakes={mistakes}
        />
      );
  }

  return <Redirect to="/" />;
};

const mapStateToProps = (state) => ({
  step: state.step,
  mistakes: state.mistakes,
  questions: state.questions
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.nextStep());
    dispatch(ActionCreator.makeMistake(question, answer));
  },
});

GameScreen.propTypes = {
  step: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  resetGame: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired
};

export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
