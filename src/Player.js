import './Player.css';

export default function Player({name, score, onIncreaseScore, onDecreaseScore}) {
  return <li className='Player'>
   <span className="Player__name">{name}</span> 
   <button className='ButtonSub' onClick={onDecreaseScore}>-</button>
   <span className='ScoreClass'>{score}</span>
   <button className='ButtonPlus' onClick={onIncreaseScore}>+</button>
  </li>
}