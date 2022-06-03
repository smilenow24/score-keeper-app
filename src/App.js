
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

  return (
    <div className="App">
      {/* eslint-disable-next-line */}
      <ul className="playerList" role="list" >

      {playerAll.map((playerSingle) => 
      (<Player key={playerSingle.namePlayerNew} name={playerSingle.namePlayerNew} score={playerSingle.score}/>)
      )}
      </ul>
      <Button>Reset scores</Button>
      <Button>New game</Button>
      <PlayerForm onCreatePlayer={createPlayer} />
    </div>
  );
}

export default App;
