import React from 'react';
import GameContext from './context/gameContext';
import Game from './pages/game';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerColours: {
        1: "",
        2: "",
        3: "",
        4: "",
      },
      changePlayerColour: (num, colour) => {
        if (!Object.values(this.state.playerColours).includes(colour) || colour === "") {
          this.setState(({ playerColours }) => ({
            playerColours: {
              ...playerColours,
              [num]: colour
            } 
          })) 
        }
        else {
          alert(colour + " is already taken");
        }
      }
    }

    
  }  

  render() {
    return (
      <GameContext.Provider value={this.state}>
        <Game/>
      </GameContext.Provider>
    )
  }
}

export default App;
