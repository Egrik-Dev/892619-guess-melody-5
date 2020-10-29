import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {createPlayersArr} from '../../utils';

const withAudioPlayer = (Component) => {
  class WithAudioPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        playingPlayers: createPlayersArr(this.props.quantityAnswersChoice)
      };

      this.onPlayButtonClick = this._onPlayButtonClick.bind(this);
    }

    _onPlayButtonClick(id) {
      const stateArr = this.state.playingPlayers.slice(0);
      const avtivePlayerId = stateArr.indexOf(true);
      const emptyArr = new Array(this.props.quantityAnswersChoice).fill(false);

      if (avtivePlayerId === id) {
        this.setState({playingPlayers: emptyArr});
      } else {
        const newState = emptyArr;
        newState[id] = true;
        this.setState({playingPlayers: newState});
      }
    }

    render() {
      const {playingPlayers} = this.state;

      return <Component
        {...this.props}
        onPlayButtonClick={this.onPlayButtonClick}
        playingPlayers={playingPlayers}
        onSubmitForm={this.onSubmitForm}
        onChooseMelody={this.onChooseMelody}
      />;
    }
  }

  WithAudioPlayer.propTypes = {
    onAnswer: PropTypes.func.isRequired,
    quantityAnswersChoice: PropTypes.number.isRequired,
    questions: PropTypes.shape({
      answers: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired
      })).isRequired,
      genre: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired
    })
  };

  return WithAudioPlayer;
};


export default withAudioPlayer;
