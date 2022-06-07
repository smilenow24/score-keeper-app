import { useState } from 'react';
import './PlayerForm.css';

export default function PlayerForm({onCreatePlayer}) {

  //const [inputText, setInputText] = useState([]);

  //useEffect(() => setToLocal("InputText", inputText), [inputText]);

  function handleSubmit(event) {

    event.preventDefault();

    const form = event.target;
    const { namePlayerNew } = form.elements;
    const playerNew = { namePlayerNew: namePlayerNew.value, score: 0}

    onCreatePlayer(playerNew);

    form.reset();
    namePlayerNew.focus();

  }

  return (<form className='PlayerForm' onSubmit={handleSubmit}>
    <label htmlFor="name">insert a new name:</label>
    <input id="namePlayerNew" name="namePlayerNew" type="text" required/>
    <button className='PlayerNewButton'>New Player</button>
  </form>)
}