import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginScreen from '../login/login';
import ResultScreen from '../result/result';
import LoseScreen from '../lose/lose';
import GameScreen from "../game/game";
import WinScreen from "../win-screen/win-screen";

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={({history}) => (
            <WelcomeScreen
              onPlayButtonClick={() => history.push(`/game`)}
            />
          )}
        />
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/result">
          <ResultScreen />
        </Route>
        <Route
          exact
          path="/lose"
          render={({history}) => (
            <LoseScreen
              onReplayClickButton={() => history.push(`/game`)}
            />
          )}
        />
        <Route
          exact
          path="/win-screen"
          render={({history}) => (
            <WinScreen
              onReplayClickButton={() => history.push(`/game`)}
            />
          )}
        />
        <Route exact path="/game">
          <GameScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
