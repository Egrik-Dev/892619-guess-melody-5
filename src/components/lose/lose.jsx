import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../actions/action';

const LoseScreen = (props) => {
  const {onReplayClickButton, resetGame} = props;

  const onReplayClickHandler = () => {
    resetGame();
    onReplayClickButton();
  };

  return (
    <section className="result">
      <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/></div>
      <h2 className="result__title">Какая жалость!</h2>
      <p className="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
      <button
        className="replay"
        type="button"
        onClick={onReplayClickHandler}>
          Попробовать ещё раз
      </button>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  }
});

LoseScreen.propTypes = {
  onReplayClickButton: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired
};

export {LoseScreen};
export default connect(null, mapDispatchToProps)(LoseScreen);
