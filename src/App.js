//import styled from "styled-components";
import { useEffect, useState } from 'react';
import './App.css';
import Button from './Button/Button.js';
import Player from './Player.js';
import PlayerForm from './PlayerForm.js';
import { getFromLocal, setToLocal } from "./lib/localStorage";


function App() {
  // ?? nullish coalescing operator
  const [playerAll, setPlayerAll] = useState(getFromLocal("playerSingle") ?? []);
  useEffect(() => setToLocal("playerSingle", playerAll), [playerAll]);

  //const [playerAll, setPlayerAll] = useState([]);

  function createPlayer(playerSingle) {
    setPlayerAll([...playerAll, playerSingle])
  }

  function increaseScore(index) {
    const currentPlayer = playerAll[index]
    setPlayerAll([
      ...playerAll.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score +1},
      ...playerAll.slice(index +1)
    ]);
  }
  function decreaseScore(index){
    const currentPlayer = playerAll[index]
    setPlayerAll([
      ...playerAll.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score -1},
      ...playerAll.slice(index +1)
    ]);
  }

  function resetScores() {
    setPlayerAll(
      playerAll.map((playerSingle) => {
        return { ...playerSingle, score: 0};
      }
      ));
  }

  function resetAllPlayer() {
    return setPlayerAll([])
  }

  return (
    <div className="App">
      
      <h1>My Score-Keeper-App</h1>
      {/* eslint-disable-next-line */}
      <ul className="PlayerList" role="list" >

      {playerAll.map((playerSingle, index) => 
      (<Player
        key={playerSingle.namePlayerNew} 
        name={playerSingle.namePlayerNew} 
        score={playerSingle.score}
        onIncreaseScore={() => increaseScore(index)}
        onDecreaseScore={() => decreaseScore(index)} 
        />
      ))}
      </ul>
      <Button onClick={resetScores}>Reset Scores</Button>
      <Button onClick={resetAllPlayer}>New Game</Button>
      <PlayerForm onCreatePlayer={createPlayer} />
    </div>
  );
}

export default App;
