import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import GameGenreScreen from '../dev-genre/dev-genre';
import GameArtistScreen from '../dev-artist/dev-artist';
import {GameType} from '../../const';

class GameScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: 0
    };
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
          <GameGenreScreen
            onAnswer={() => {
              this.setState((prevState) => ({
                step: prevState.step + 1,
              }));
            }}
            questions={gameGenre}
          />
        );
      case GameType.ARTIST:
        return (
          <GameArtistScreen
            onAnswer={() => {
              this.setState((prevState) => ({
                step: prevState.step + 1,
              }));
            }}
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
