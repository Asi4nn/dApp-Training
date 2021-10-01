import { Box, Divider, MenuItem, Select } from "@material-ui/core";
import React from "react";
import "./playerCard.css"

/**
 * 
 * @param {string}    colour         current colour of the player 
 * @param {int}       num            player number (1-4)
 * @param {function}  changeColour   function to change the colour of a player
 */
export function PlayerCard(props) {
  const colours = ["Red", "Yellow", "Green", "Blue"]

  const bg = {
    // backgroundColor: props.colours[props.num] === "" ? "#777" : props.colours[props.num]
    backgroundColor: "#777"
  }

  if (props.colour === "Red") {
    bg.backgroundColor = "#ff0005"
  }
  else if (props.colour === "Yellow") {
    bg.backgroundColor = "#fff200"
  }
  else if (props.colour === "Green") {
    bg.backgroundColor = "#00ff37"
  }
  else if (props.colour === "Blue") {
    bg.backgroundColor = "#0072ff"
  }

  const handleChange = (event) => {
    props.changeColour(props.num, event.target.value);
  }

  return (
    <Box className="player-card" style={bg}>
      <h2>Player {props.num}</h2>
      <Divider />
        <Select
          className="colour-dropdown"
          value={props.colour}
          label="Choose Colour"
          onChange={handleChange}
        >
          <MenuItem value={""}>{"None"}</MenuItem>
          {
            colours.map((val) => (
              <MenuItem value={val}>{val}</MenuItem>
            ))
          }
        </Select>
    </Box>
  )
}