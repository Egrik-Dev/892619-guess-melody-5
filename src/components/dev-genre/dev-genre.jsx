import React from 'react';
import PropTypes from 'prop-types';
import {GenreOnRus} from '../../const';
import Mistakes from '../mistakes/mistakes';
import ItemMelody from '../item-melody/item-melody';
import Player from "../audio-player/audio-player";
import withAudio from "../../hocks/with-audio/with-audio";

const AudioPlayer = withAudio(Player);

const GameGenreScreen = (props) => {
  const {
    onSubmitForm,
    onChooseMelody,
    onPlayButtonClick,
    playingPlayers,
    questions,
    mistakes,
    userAnswers
  } = props;
  const {correctGenre: genre, answers} = questions;

  const onSubmitFormHandler = (evt) => {
    evt.preventDefault();
    onSubmitForm();
  };

  return (
    <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={
              {
                filter: `url("#blur")`,
                transform: `rotate(-90deg) scaleY(-1)`,
                transformOrigin: `center`
              }
            }/>
        </svg>

        <div className="game__mistakes">
          <Mistakes mistakes={mistakes}/>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите {GenreOnRus.has(genre) ? GenreOnRus.get(genre) : genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={onSubmitFormHandler}
        >
          {answers.map((answer, i) => (
            <div className="track" key={i}>
              <AudioPlayer
                id={i}
                isPlaying={playingPlayers[i]}
                src={answer.src}
                onPlayButtonClick={onPlayButtonClick}
              />
              <ItemMelody
                userAnswer={userAnswers[i]}
                onChooseMelody={onChooseMelody}
                id={i}
              />
            </div>
          )
          )}
          <button className="game__submit button" type="submit" >Ответить</button>
        </form>
      </section>
    </section>
  );
};

GameGenreScreen.propTypes = {
  userAnswers: PropTypes.array.isRequired,
  mistakes: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  onChooseMelody: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  playingPlayers: PropTypes.array.isRequired,
  questions: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired
    })).isRequired,
    correctGenre: PropTypes.string.isRequired,
    gameType: PropTypes.string.isRequired
  }).isRequired
};

export default GameGenreScreen;
