import React from "react";
import PropTypes from 'prop-types';
import WelcomeScreen from "../welcome-screen/welcome-screen";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import GameArtistScreen from '../dev-artist/dev-artist';
import GameGenreScreen from '../dev-genre/dev-genre';
import LoginScreen from '../login/login';
import ResultScreen from '../result/result';
import LoseScreen from '../lose/lose';
import GameScreen from "../game/game";

const App = (props) => {
  const {questions, errorsCount} = props;
  const [genreMocks, artistMocks] = questions;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={({history}) => (
            <WelcomeScreen
              errorsCount={errorsCount}
              onPlayButtonClick={() => history.push(`/game`)}
            />
          )}
        />
        <Route exact path='/dev-artist'>
          <GameArtistScreen
            onAnswer={() => {}}
            question={artistMocks}
          />
        </Route>
        <Route exact path="/dev-genre">
          <GameGenreScreen
            onAnswer={() => {}}
            questions={genreMocks}
          />
        </Route>
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
          <GameScreen
            questions={props.questions}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
