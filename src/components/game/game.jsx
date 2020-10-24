import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import GameGenreScreen from '../dev-genre/dev-genre';
import GameArtistScreen from '../dev-artist/dev-artist';
import {GameType, MAX_MISTAKE_COUNT} from '../../const';
import withUserAnswer from '../../hocks/with-user-answer/with-user-answer';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import withAudioPlayer from '../../hocks/with-audio-player/with-audio-player';

const ArtistQuestionScreenWrapped = withAudioPlayer(GameArtistScreen);
const GenreQuestionScreenWrapped = withAudioPlayer(withUserAnswer(GameGenreScreen));

const GameScreen = (props) => {
  const {step, mistakes, questions, onUserAnswer} = props;
  const [gameGenre, gameArtist] = questions;
  const currentGame = questions[step];
  const QUANTITY_ARTIST_CHOICE = 1;

  if (mistakes >= MAX_MISTAKE_COUNT) {
    return <Redirect to="/lose" />;
  }

  if (step >= questions.length || !questions) {
    return <Redirect to="/win-screen" />;
  }

  switch (currentGame.gameType) {
    case GameType.GENRE:
      return (
        <GenreQuestionScreenWrapped
          onAnswer={onUserAnswer}
          questions={gameGenre}
          mistakes={mistakes}
          quantityAnswersChoice={gameGenre.answers && gameGenre.answers.length}
        />
      );
    case GameType.ARTIST:
      return (
        <ArtistQuestionScreenWrapped
          onAnswer={onUserAnswer}
          question={gameArtist}
          mistakes={mistakes}
          quantityAnswersChoice={QUANTITY_ARTIST_CHOICE}
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
  onUserAnswer: PropTypes.func.isRequired
};

export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
