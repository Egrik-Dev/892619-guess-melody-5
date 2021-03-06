import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import GameGenreScreen from '../dev-genre/dev-genre';
import GameArtistScreen from '../dev-artist/dev-artist';
import {GameType, MAX_MISTAKE_COUNT} from '../../const';
import withUserAnswer from '../../hocks/with-user-answer/with-user-answer';
import {connect} from 'react-redux';
import {ActionCreator} from '../../actions/action';
import withAudioPlayer from '../../hocks/with-audio-player/with-audio-player';

const ArtistQuestionScreenWrapped = withAudioPlayer(GameArtistScreen);
const GenreQuestionScreenWrapped = withAudioPlayer(withUserAnswer(GameGenreScreen));

const GameScreen = (props) => {
  const {step, mistakes, questions, onUserAnswer} = props;
  const currentGame = questions[step];
  const QUANTITY_ARTIST_CHOICE = 1;

  if (mistakes >= MAX_MISTAKE_COUNT) {
    return <Redirect to="/lose" />;
  }

  if (step >= questions.length || !questions) {
    return <Redirect to="/win-screen" />;
  }

  switch (currentGame.type) {
    case GameType.GENRE:
      return (
        <GenreQuestionScreenWrapped
          key={step}
          onAnswer={onUserAnswer}
          questions={currentGame}
          mistakes={mistakes}
          quantityAnswersChoice={currentGame.answers && currentGame.answers.length}
        />
      );
    case GameType.ARTIST:
      return (
        <ArtistQuestionScreenWrapped
          key={step}
          onAnswer={onUserAnswer}
          question={currentGame}
          mistakes={mistakes}
          quantityAnswersChoice={QUANTITY_ARTIST_CHOICE}
        />
      );
  }

  return <Redirect to="/" />;
};

const mapStateToProps = ({GAME, DATA}) => ({
  step: GAME.step,
  mistakes: GAME.mistakes,
  questions: DATA.questions
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
