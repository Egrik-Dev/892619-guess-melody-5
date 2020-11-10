import React, {createRef} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../actions/action';
import {login} from '../../actions/action-api';
import PropTypes from 'prop-types';

const LoginScreen = (props) => {
  const {onSubmit, onReplayClickButton, resetGame} = props;
  const loginRef = createRef();
  const passRef = createRef();

  const onHandleSubmit = React.useCallback((evt) => {
    evt.preventDefault();

    const userLogin = loginRef.current.value;
    const userPass = passRef.current.value;

    onSubmit({userLogin, userPass});
  });

  const onReplayClickHandler = () => {
    resetGame();
    onReplayClickButton();
  };

  return (
    <section className="login">
      <div className="login__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/></div>
      <h2 className="login__title">Вы настоящий меломан!</h2>
      <p className="login__text">Хотите узнать свой результат? Представтесь!</p>
      <form className="login__form" action="">
        <p className="login__field">
          <label className="login__label" htmlFor="name">Логин</label>
          <input ref={loginRef} className="login__input" type="text" name="name" id="name"/>
        </p>
        <p className="login__field">
          <label className="login__label" htmlFor="password">Пароль</label>
          <input ref={passRef} className="login__input" type="text" name="password" id="password"/>
          <span className="login__error">Неверный пароль</span>
        </p>
        <button onClick={onHandleSubmit} className="login__button button" type="submit">Войти</button>
      </form>
      <button onClick={onReplayClickHandler} className="replay" type="button">Сыграть ещё раз</button>
    </section>
  );
};

LoginScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onReplayClickButton: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },

  resetGame() {
    dispatch(ActionCreator.resetGame());
  }
});

export {LoginScreen};
export default connect(null, mapDispatchToProps)(LoginScreen);
