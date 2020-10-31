import React from 'react';
import PropTypes from 'prop-types';
import Mistakes from '../mistakes/mistakes';
import Player from "../audio-player/audio-player";
import withAudio from "../../hocks/with-audio/with-audio";

const AudioPlayer = withAudio(Player);

const GameArtistScreen = (props) => {
  const {question, mistakes, onAnswer, playingPlayers, onPlayButtonClick} = props;
  const {song, answers} = question;

  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={
            {
              filter: `url("#blur")`,
              transform: `rotate(-90deg) scaleY(-1)`,
              transformOrigin: `center`
            }
          }/>
        </svg>

        <div className="game__mistakes">
          <Mistakes
            mistakes={mistakes}
          />
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <AudioPlayer
              id={0}
              isPlaying={playingPlayers[0]}
              src={song.src}
              onPlayButtonClick={onPlayButtonClick}
            />
          </div>
        </div>

        <form className="game__artist">
          {answers.map((answer, i) => (
            <div key={i} className="artist">
              <input className="artist__input visually-hidden" type="radio" name="answer" value={`answer-${i}`} id={`answer-${i}`}
                onChange={(evt) => {
                  evt.preventDefault();

                  onAnswer(question, answer);
                }}
              />
              <label className="artist__name" htmlFor={`answer-${i}`}>
                <img className="artist__picture" src={answer.picture} alt={answer.artist}/>
                {answer.artist}
              </label>
            </div>
          ))}
        </form>
      </section>
    </section>
  );
};

GameArtistScreen.propTypes = {
  playingPlayers: PropTypes.array.isRequired,
  mistakes: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      picture: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired
    })).isRequired,
    type: PropTypes.string.isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  }).isRequired
};

export default GameArtistScreen;
