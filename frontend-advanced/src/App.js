import React from 'react';
import { GameContextProvider } from './context/gameContext';
import Game from './pages/game';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


export default function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <Redirect to="/game"></Redirect>
        </Route>

        <Route path="/game">
          <GameContextProvider>
            <Game/>
          </GameContextProvider>
        </Route>
      </Switch>

    </Router>
  )
}
