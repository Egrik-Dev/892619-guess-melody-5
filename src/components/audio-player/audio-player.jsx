import React from 'react';
import PropTypes from 'prop-types';

const audioPlayer = (props) => {
  const {isLoading, onPlayButtonClick, isPlaying, id, children} = props;

  return (
    <React.Fragment>
      <button
        className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
        disabled={isLoading}
        type="button"
        onClick={() => onPlayButtonClick(id)}
      >
      </button>
      <div className="track__status">
        {children}
      </div>
    </React.Fragment>
  );
};

audioPlayer.propTypes = {
  id: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default audioPlayer;
