import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component as a class.
 */
export default function Home(props) {

  const classes = useStyles();
  const [wordPack, setWordPack] = React.useState('basic (easy)');
  const [sessionValue, setSessions] = React.useState(1);
  const [difficulty, setDifficulty] = React.useState('0.4');

  const handleWordpackChange = (event) => {
    setWordPack(event.target.value);
    post("/api/game/changedWordPack", {
      wordPack: event.target.value,
      game_id: props.game_id
    }).then(()=> {})
  };

 //changes the number of sessions
  const handleSessionValueChange = (event) => {
    setSessions(event.target.value);
    post("/api/game/changedSessions", {
      sessions: event.target.value,
      game_id: props.game_id
    }).then(()=> {})
  }

  //changes the difficulty
  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
    post("/api/game/changedDifficulty", {
      pixel_proportion: event.target.value,
      game_id: props.game_id
    }).then(()=> {})
  }

  return (
    <>
    </>
  );
}
