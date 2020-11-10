import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import {Switch, Route, Router} from 'react-router-dom';
import LoginScreen from '../login/login';
import LoseScreen from '../lose/lose';
import GameScreen from "../game/game";
import WinScreen from "../win-screen/win-screen";
import browserHistory from '../../browser-history';
import PrivateRoute from '../private-route/private-route';
import {connect} from 'react-redux';
import {ActionCreator} from '../../actions/action';
import {fetchQuestions, checkAuth} from '../../actions/action-api';
import PropTypes from 'prop-types';

const onPlayButtonClick = (history) => history.push(`/game`);

const App = (props) => {
  const {isLoading, fetchQuestionsAction, checkAuthAction, loadDone} = props;

  React.useEffect(() => {
    Promise.all([
      fetchQuestionsAction(),
      checkAuthAction()
    ])
    .then(() => loadDone());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route
          exact
          path="/"
          render={({history}) => (
            <WelcomeScreen
              onPlayButtonClick={() => onPlayButtonClick(history)}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({history}) => (
            <LoginScreen
              onReplayClickButton={() => onPlayButtonClick(history)}
            />
          )}
        >
        </Route>
        <Route
          exact
          path="/lose"
          render={({history}) => (
            <LoseScreen
              onReplayClickButton={() => onPlayButtonClick(history)}
            />
          )}
        />
        <PrivateRoute
          exact
          path={`/win-screen`}
          render={({history}) => {
            return (
              <WinScreen
                onReplayClickButton={() => onPlayButtonClick(history)}
              />
            );
          }}
        />
        <Route exact path="/game">
          <GameScreen/>
        </Route>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fetchQuestionsAction: PropTypes.func.isRequired,
  checkAuthAction: PropTypes.func.isRequired,
  loadDone: PropTypes.func.isRequired
};

const mapStateToProps = ({GAME}) => ({
  isLoading: GAME.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestionsAction() {
    dispatch(fetchQuestions());
  },

  checkAuthAction() {
    dispatch(checkAuth());
  },

  loadDone() {
    dispatch(ActionCreator.loadDone());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
