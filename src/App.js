
import { useState } from 'react';
import './App.css';
import Button from './Button.js';
import Player from './Player.js';
import PlayerForm from './PlayerForm.js';

function App() {
  const [playerAll, setPlayerAll] = useState([]);
  console.log(playerAll)

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

  return (
    <div className="App">
      {/* eslint-disable-next-line */}
      <ul className="playerList" role="list" >

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
      <Button>Reset scores</Button>
      <Button>New game</Button>
      <PlayerForm onCreatePlayer={createPlayer} />
    </div>
  );
}

export default App;
