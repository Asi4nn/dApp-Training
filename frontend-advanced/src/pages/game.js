import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { PlayerCard } from '../components/playerCard';
import GameContext from '../context/gameContext';

export default function Game(props) {
  const centerStyle = {
    textAlign: "center"
  }

  const containerStyle = {
    background: "#0FBDF0", 
    height: "100%",
    width: "100%",
    borderRadius: "20px",
    paddingBottom: "50px",
  }


  return (
    <Container style={containerStyle}>
      <h1 style={centerStyle}>Game Lobby</h1>
      <Grid container spacing={2}>
        {Array.from(Array(4)).map((_, index) => (
          <Grid item xs={6}>
            <GameContext.Consumer>
              {(state) => (
                <PlayerCard 
                  num={index + 1}
                  colour={state.playerColours[index + 1]}
                  changeColour={state.changePlayerColour}
                />
              )}
            </GameContext.Consumer>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}