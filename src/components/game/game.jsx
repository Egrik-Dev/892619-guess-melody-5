import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import GameGenreScreen from '../dev-genre/dev-genre';
import GameArtistScreen from '../dev-artist/dev-artist';
import {GameType} from '../../const';
import withActivePlayer from '../../hocks/with-active-player';

const ArtistQuestionScreenWrapped = withActivePlayer(GameArtistScreen);
const GenreQuestionScreenWrapped = withActivePlayer(GameGenreScreen);

class GameScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: 0
    };
    this.onAnswerHandler = this._onAnswerHandler.bind(this);
  }

  _onAnswerHandler() {
    this.setState((prevState) => ({
      step: prevState.step + 1,
    }));
  }

  render() {
    const {questions} = this.props;
    const [gameGenre, gameArtist] = questions;
    const currentGame = questions[this.state.step];

    if (currentGame >= questions.length || !currentGame) {
      return <Redirect to="/" />;
    }

    switch (currentGame.gameType) {
      case GameType.GENRE:
        return (
          <GenreQuestionScreenWrapped
            onAnswer={this.onAnswerHandler}
            questions={gameGenre}
          />
        );
      case GameType.ARTIST:
        return (
          <ArtistQuestionScreenWrapped
            onAnswer={this.onAnswerHandler}
            question={gameArtist}
          />
        );
    }

    return <Redirect to="/" />;
  }
}

GameScreen.propTypes = {
  questions: PropTypes.array.isRequired
};

export default GameScreen;
