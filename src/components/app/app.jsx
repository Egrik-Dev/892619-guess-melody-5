import React from "react";
import PropTypes from 'prop-types';
import WelcomeScreen from "../welcome-screen/welcome-screen";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import GameArtistScreen from '../dev-artist/dev-artist';
import GameGenreScreen from '../dev-genre/dev-genre';
import LoginScreen from '../login/login';
import ResultScreen from '../result/result';
import LoseScreen from '../lose/lose';

const App = (props) => {
  const {errorsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen errorsCount={errorsCount} />
        </Route>
        <Route exact path='/dev-artist'>
          <GameArtistScreen />
        </Route>
        <Route exact path="/dev-genre">
          <GameGenreScreen />
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
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired
};

export default App;
