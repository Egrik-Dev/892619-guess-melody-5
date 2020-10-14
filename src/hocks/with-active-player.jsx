import React, {PureComponent} from 'react';
import AudioPLayer from '../components/audio-player/audio-player';

const withActivePlayer = (Component) => {
  return class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: 0
      };
    }
    render() {
      const {activePlayerId} = this.state;

      return <Component
        {...this.props}
        renderPlayer={(src, id) => {
          return (
            <AudioPLayer
              isPlaying={activePlayerId === id}
              src={src}
              onPlayButtonClick={() => {
                this.setState({
                  activePlayerId: activePlayerId === id ? -1 : id
                });
              }}
            />
          );
        }}
      />;
    }
  };
};

export default withActivePlayer;
