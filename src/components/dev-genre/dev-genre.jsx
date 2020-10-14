import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {GenreOnRus} from '../../const';


class GameGenreScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      answers: [false, false, false, false],
    };
  }

  render() {
    const {onAnswer, questions, renderPlayer} = this.props;
    const {correctGenre: genre, answers} = questions;
    const {answers: userAnswers} = this.state;

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
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {GenreOnRus.has(genre) ? GenreOnRus.get(genre) : genre} треки</h2>
          <form
            className="game__tracks"
            onSubmit={(evt) => {
              evt.preventDefault();
              onAnswer(questions, this.state.answers);
            }}
          >
            {answers.map((answer, i) => (
              <div key={i} className="track">
                {renderPlayer(answer.src, i)}
                <div className="game__answer">
                  <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`} id={`answer-${i}`}
                    onChange={(evt) => {
                      const value = evt.target.checked;

                      this.setState({
                        answers: [...userAnswers.slice(0, i), value, ...userAnswers.slice(i + 1)]
                      });
                    }}
                  />
                  <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                </div>
              </div>
            )
            )}
            <button className="game__submit button" type="submit" >Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

GameGenreScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
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
