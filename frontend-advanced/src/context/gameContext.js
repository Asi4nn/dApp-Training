import React, { useState } from 'react'

export const GameContext = React.createContext();

export function GameContextProvider({children}) {
  const [state, updateState] = useState({
    playerColours: {
      1: "",
      2: "",
      3: "",
      4: "",
    },
  });

  const changePlayerColour = (num, colour) => {
    if (!Object.values(state.playerColours).includes(colour) || colour === "") {
      updateState(({ playerColours }) => ({
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

  return (
    <GameContext.Provider value={{state: state, changePlayerColour: changePlayerColour}}>
      {children}
    </GameContext.Provider>
  )
}

export function useGameContext() {
  const context = React.useContext(GameContext)
  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameContextProvider')
  }
  return context
}

export function GameContextConsumer({children}) {

  return (
    <GameContext.Consumer>
      {(context) => {
        if (context === undefined) {
          throw new Error('GameContextConsumer must be used within a GameContextProvider')
        }
        return children(context)
      }}
    </GameContext.Consumer>
  )
}