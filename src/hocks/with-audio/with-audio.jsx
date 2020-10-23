import React, {createRef, PureComponent} from 'react';
import PropTypes from 'prop-types';

const withAudio = (Component) => {
  class WithAudio extends PureComponent {
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

    componentDidUpdate() {
      if (this.props.isPlaying) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    }

    render() {
      const {isLoading} = this.state;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
        >
          <audio
            ref={this._audioRef}
          />
        </Component>
      );
    }
  }

  WithAudio.propTypes = {
    onPlayButtonClick: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPlaying: PropTypes.bool.isRequired,
  };

  return WithAudio;
};

export default withAudio;
