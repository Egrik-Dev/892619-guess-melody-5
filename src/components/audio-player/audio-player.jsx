import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._audioRef = createRef();

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.audio = this._audioRef.current;

    const {src} = this.props;
    this.audio.src = src;

    this.audio.oncanplaythrough = () => {
      return this.setState({
        isLoading: false
      });
    };
  }

  componentWillUnmount() {
    this.audio = this._audioRef.current;
    this.audio.oncanplaythrough = null;
  }

  render() {
    const {isLoading} = this.state;
    const {onPlayButtonClick, isPlaying} = this.props;
    return (
      <React.Fragment>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          disabled={isLoading}
          type="button"
          onClick={onPlayButtonClick}
        >
        </button>
        <div className="track__status">
          <audio
            autoPlay={isPlaying}
            ref={this._audioRef}
          />
        </div>
      </React.Fragment>
    );
  }

  componentDidUpdate() {
    if (this.props.isPlaying) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }
}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired
};

export default AudioPlayer;
