import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginScreen from '../login/login';
import ResultScreen from '../result/result';
import LoseScreen from '../lose/lose';
import GameScreen from "../game/game";

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={({history}) => (
            <WelcomeScreen
              // errorsCount={errorsCount}
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
        <Route exact path="/lose">
          <LoseScreen />
        </Route>
        <Route exact path="/game">
          <GameScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
