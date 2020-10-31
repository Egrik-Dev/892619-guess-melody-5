import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../actions/action';

const WinScreen = (props) => {
  const {onReplayClickButton, resetGame, step, mistakes} = props;
  const correctlyQuestionAnswers = step - mistakes;

  const onReplayClickHandler = () => {
    resetGame();
    onReplayClickButton();
  };

  return (
    <section className="result">
      <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">Вы ответили правильно на {correctlyQuestionAnswers} вопросов и совершили {mistakes} ошибки</p>
      <button
        className="replay"
        type="button"
        onClick={onReplayClickHandler}
      >Сыграть ещё раз
      </button>
    </section>
  );
};

const mapStateToProps = ({GAME}) => ({
  step: GAME.step,
  mistakes: GAME.mistakes,
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  }
});

WinScreen.propTypes = {
  onReplayClickButton: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  resetGame: PropTypes.func.isRequired
};

export {WinScreen};
export default connect(mapStateToProps, mapDispatchToProps)(WinScreen);
