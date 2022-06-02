import './App.css';
import Button from './Button.js';
import Player from './Player.js';
import PlayerForm from './PlayerForm.js';

function App() {
  return (
    <div className="App">
      {/* eslint-disable-next-line */}
      <ul role="list">
        <Player name="John Doe" score={20} />
        <Player name="Jane Doe" score={30} />
      </ul>
      <Button>Reset scores</Button>
      <Button>New game</Button>
      <PlayerForm />
    </div>
  );
}

export default App;
